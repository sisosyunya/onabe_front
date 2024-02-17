import { useEffect, useState } from "react";
import { unansweredQuestion } from "../type";
import { allUnansweredQuestionMock } from "../mock";

const url: string | null = "http://3.112.223.9:8000/getall";

const useGetAllUnansweredQuestions = () => {
  const [allUnansweredQuestions, setallUnansweredQuestions] = useState<unansweredQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      };
      const jsonData = await response.json();
      return jsonData as unansweredQuestion[];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    };
  };

  const getAllData = async () => {
    return url ? await fetchAPI(url) : allUnansweredQuestionMock;
  };

  const updateAllUnansweredQuestions = async () => {
    setallUnansweredQuestions(await getAllData());
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    updateAllUnansweredQuestions();
  }, []);

  return { allUnansweredQuestions, updateAllUnansweredQuestions, loading };
};

export default useGetAllUnansweredQuestions;