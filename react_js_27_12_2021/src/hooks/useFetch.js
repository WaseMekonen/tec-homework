import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(getData, [url]);

  function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => {
        console.error(err), setError(true);
      });
  }

  return [data, isLoading, error];
}
