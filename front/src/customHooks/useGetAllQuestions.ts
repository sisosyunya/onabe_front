import { useEffect, useState } from "react";
import { question } from "../type";
import { allAnsweredQuestionMock } from "../mock";

const url: string | null = "https://wkwk-hack.takayaman2180.net/getall";

const useGetAllQuestions = () => {
  const [allQuestions, setAllQuestions] = useState<question[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      };
      const jsonData = await response.json();
      return jsonData as question[];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    };
  };

  const getAllData = async () => {
    return url ? await fetchAPI(url) : allAnsweredQuestionMock;
  };

  const updateAllQuestions = async () => {
    setAllQuestions(await getAllData());
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    updateAllQuestions();
  }, []);

  return { allQuestions, updateAllQuestions, loading };
};

export default useGetAllQuestions;
