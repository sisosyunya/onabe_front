import { useState} from "react";
// import { Link } from "react-router-dom";
import wanko from "@/assets/wanko.svg";
import { useParams } from "react-router-dom";
import useGetQuestion from "../customHooks/useGetQuestion";

const MakeAnswerPage = (): JSX.Element => {
  const {questionId} = useParams();
  const [input, setInput] = useState("");
  const {question} = useGetQuestion({questionId:questionId??""});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };  

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="relative w-96">
            <img src={wanko} alt="wanko" />
            <p
              className="absolute bottom-2 left-[4rem] md:left-[6rem]"
            >回答を作成してください。</p>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter the keyword"
            data-test="search-input"
            className="w-full sm:w-[36rem] h-12 px-4 py-3 shadow outline-0"
          />
        </div>
      <div className="mt-6 px-4 py-6 bg-white h-[calc(100%-12rem)] overflow-scroll shadow">
        <p>{question?.question}</p>
      </div>
    </>
  );
};

export default MakeAnswerPage;