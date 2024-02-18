import { useState } from "react";
import { question } from "../type";

const url: string | null = "https://wkwk-hack.takayaman2180.net/wordpost";

const useWordPost = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async ({keyword}:{keyword: string}) => {
    try {
      setLoading(true);
      const now = new Date();
      const data = { keyword: keyword, createdAt: now }
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      };
      const jsonData = await response.json();
      return jsonData as question;
    } catch (error) {
      return undefined;
    } finally {
      setLoading(false);
    };
  };

  const wordPost = async ({keyword}:{keyword:string;}) => {
    url && await fetchAPI({keyword});
  };

  return {  wordPost, loading };
};

export default useWordPost;