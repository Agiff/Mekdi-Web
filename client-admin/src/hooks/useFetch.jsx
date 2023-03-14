import { useEffect, useState } from 'react';

const useFetch = (entity) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const baseUrl = 'http://localhost:3000/';

  useEffect(() => {
    async function getItems() {
      try {
        let response = await fetch(baseUrl + entity);
        if (!response) throw await response.text();
        response = await response.json();
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    getItems();
  }, [])

  return [data, loading, error]
}

export default useFetch
