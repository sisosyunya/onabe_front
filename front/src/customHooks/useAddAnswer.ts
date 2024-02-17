import { useState } from "react";

const url: string | null = "http://3.112.223.9:8000/addanswer";

const useAddAnswer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const addAnswer = async ({ questionId, answer }: { questionId: string, answer: string; }) => {
    try {
      setLoading(true);
      setIsError(false);
      const data = { id: questionId, answer: answer, answeredAt: new Date() };
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
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    };
  };

  return {addAnswer, loading, isError};
}

export default useAddAnswer;