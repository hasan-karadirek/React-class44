import React, { useEffect, useState } from "react";
import fetchData from "./fetchHelper";

export default function useFetch(url, errorHandler) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  let urlArr;
  if (!url) {
    urlArr = [];
  }
  if (url.includes(",")) {
    urlArr = url.split(",");
  } else {
    urlArr = [url];
  }

  useEffect(() => {
    const fetchPromises = urlArr.map((url) => fetchData(url));

    Promise.all(fetchPromises)
      .then((res) => {
        const processedResults = res.map((res) => {
          // Wrap single products in an array
          return Array.isArray(res) ? res : [res];
        });
        const flattenedResults = processedResults.reduce((acc, current) => {
          return [...acc, ...current];
        }, []);
        setResult(flattenedResults);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        errorHandler(err);
      });
  }, [url]);
  console.log(result, "heyhey");

  //     fetchData(url)
  //       .then((res) => {
  //         setResult(res);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         errorHandler(err);
  //         setLoading(false);
  //       });
  //   }, [url]);

  return [result, loading];
}
