import { useEffect, useState } from "react";
import { unansweredQuestion } from "../type";
import { allUnansweredQuestionMock } from "../mock";

const url: string | null = null;

const useGetAllUnansweredQuestions = () => {
  const [allAnsweredQuestions, setAllAnsweredQuestions] = useState<unansweredQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      };
      const jsonData = await response.json();
      return jsonData.data as unansweredQuestion[];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    };
  };

  const getAllData = async () => {
    return url ? await fetchAPI(url) : allUnansweredQuestionMock;
  };

  const updateAllAnsweredQuestions = async () => {
    setAllAnsweredQuestions(await getAllData());
  };

  useEffect(() => {
    updateAllAnsweredQuestions();
  }, [updateAllAnsweredQuestions]);

  return { allAnsweredQuestions, updateAllAnsweredQuestions, loading };
};

export default useGetAllUnansweredQuestions;