import {useState} from "react";
// import { Link } from "react-router-dom";
import wanko from "@/assets/wanko.svg";
import {useNavigate, useParams} from "react-router-dom";
import useGetQuestion from "../customHooks/useGetQuestion";
import useAddAnswer from "../customHooks/useAddAnswer";

const MakeAnswerPage = (): JSX.Element => {
  const {questionId} = useParams();
  const [input, setInput] = useState("");
  const {question} = useGetQuestion({questionId: questionId ?? ""});
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setInput(e.target.value);
  };
  const {addAnswer} = useAddAnswer();
  const navigate = useNavigate();

  const handleSubmit = () => {
    questionId && addAnswer({questionId: questionId, answer: input});
    navigate("/")
  };

  return (
    <div className="text-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="relative w-96">
            <img src={wanko} alt="wanko" />
            <p className="absolute bottom-2 left-[4rem] md:left-[6rem] text-xl">
              回答を作成してください。
            </p>
          </div>
        </div>
        <p className="py-6 text-2xl text-center bg-purple-300 rounded-full ">{`Q. ${question?.question}`}</p>
      </div>
      <div className="flex justify-center my-10">
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="回答を入力"
          data-test="search-input"
          className="w-full sm:w-[36rem] h-96 px-4 py-3 shadow outline-0"
        />
      </div>
      <button
        type="button"
        className="bg-purple-300 py-3 px-8 rounded-full"
        onClick={handleSubmit}
      >
        回答を送信する
      </button>
    </div>
  );
};

export default MakeAnswerPage;
