import { useEffect, useState } from "react";
import { answeredQuestion } from "../type";
import { allAnsweredQuestionMock } from "../mock";

const url: string | null = "https://wkwk-hack.takayaman2180.net/getall";

const useGetAllAnsweredQuestions = () => {
  const [allAnsweredQuestions, setAllAnsweredQuestions] = useState<answeredQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      };
      const jsonData = await response.json();
      return jsonData.data as answeredQuestion[];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    };
  };

  const getAllData = async () => {
    return url ? await fetchAPI(url) : allAnsweredQuestionMock;
  };

  const updateAllAnsweredQuestions = async () => {
    setAllAnsweredQuestions(await getAllData());
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    updateAllAnsweredQuestions();
  }, []);

  return { allAnsweredQuestions, updateAllAnsweredQuestions, loading };
};

export default useGetAllAnsweredQuestions;