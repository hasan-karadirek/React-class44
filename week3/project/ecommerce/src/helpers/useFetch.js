import React, { useEffect, useState } from "react";
import fetchData from "./fetchHelper";

export default function useFetch(url, errorHandler) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const urlArr = url.split(",");

  useEffect(() => {
    const fetchPromises = urlArr.map((url) => fetchData(url));

    Promise.all(fetchPromises)
      .then((res) => {
        const processedResults = res.map((res) => {
          return Array.isArray(res) ? res : [res];
        });
        const flattenedResults = processedResults.reduce((acc, current) => {
          return [...acc, ...current];
        }, []);
        setResult(flattenedResults);
        setLoading(false);
      })
      .catch((err) => {
        errorHandler(err);
      });
  }, [url]);

  return [result, loading];
}
