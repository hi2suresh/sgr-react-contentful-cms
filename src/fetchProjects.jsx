import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_KEY,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });

      const data = response.items.map((item) => {
        const { fields, sys } = item;
        const { id } = sys;
        const { title, url, image } = fields;
        const img = image?.fields?.file?.url;
        return {
          id,
          title,
          url,
          img,
        };
      });
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { isLoading, projects };
};

export default useFetchProjects;
