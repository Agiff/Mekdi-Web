import { useState, useEffect } from 'react'

const useFetch = (entity, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const baseUrl = 'http://localhost:3000/';

  if (id) entity = entity + '/' + id;
  
  useEffect(() => {
    async function getItems() {
      try {
        let response = await fetch(baseUrl + entity);
        if (!response.ok) throw await response.text();
        response = await response.json();
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    getItems();
  }, [])

  return [data, loading, error];
}

export default useFetch
