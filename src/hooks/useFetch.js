import React, { useEffect, useState } from "react";

const useFetch = (api) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(api);
        const data = await result.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (api) {
      fetchData();
    }
  }, [api]);
  return { data, error, loading };
};


export default useFetch;
