import React from "react";

export default function ErrorComponent({ apiError }) {
  return <div>Something went wrong. Eror Message:{apiError.message}</div>;
}
