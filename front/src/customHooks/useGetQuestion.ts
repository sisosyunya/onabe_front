import { useEffect, useState } from "react";
import { question } from "../type";
import { allAnsweredQuestionMock } from "../mock";

const url: string | null = "http://3.112.223.9:8000/getquestion";

const useGetQuestion = ({ questionId }: { questionId: string }) => {
  const [question, setQuestion] = useState<question | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async (url: string) => {
    try {
      const data = { id: questionId }
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      };
      const jsonData = await response.json();
      console.log(jsonData)
      return jsonData as question;
    } catch (error) {
      return undefined;
    } finally {
      setLoading(false);
    };
  };

  const getQuestion = async () => {
    return url ? await fetchAPI(url) : allAnsweredQuestionMock.find(a=>a.answer === questionId);
  };

  const roadQuestion = async () => {
    setQuestion(await getQuestion());
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    roadQuestion();
  }, []);

  return { question, roadQuestion, loading };
};

export default useGetQuestion;