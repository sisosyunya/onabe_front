import {useState} from "react";
// import { Link } from "react-router-dom";
import wanko from "@/assets/wanko.svg";
import prompt from "@/assets/prompt.svg";
import {DiscloseMenu} from "../components/disclose_menu";
import useGetAllQuestions from "../customHooks/useGetAllQuestions";
import {question} from "../type";
import useWordPost from "../customHooks/useWordPost";

export function TopPage(): JSX.Element {
  const [input, setInput] = useState("");
  const [faqs, setFaqs] = useState<question[]>([]);
  const {allQuestions, loading} = useGetAllQuestions();
  const  {wordPost} = useWordPost();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setFaqs([]);
      return;
    }

    const filteredFaqs = allQuestions.filter(a =>
      a.question.includes(e.target.value),
    );
    setFaqs(filteredFaqs);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="relative w-96">
            <img src={wanko} alt="wanko" />
            <img
              src={prompt}
              alt="prompt"
              className="absolute bottom-2 left-[4rem] md:left-[6rem]"
            />
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
      </div>
      <div className="mt-6 px-4 py-6 bg-white h-[calc(100%-12rem)] overflow-scroll shadow">
        {input === "" ? (
          <>
            <span className="text-[#2B546A] text-base">
              Frequently Asked Questions
            </span>
            <ul className="pt-4 space-y-2">
              {allQuestions.reverse().map(faq => (
                <li
                  key={faq.question}
                  className=" text-lg text-[#2B546A] hover:bg-[#F6F6F7] rounded-md shadow-sm"
                >
                  <DiscloseMenu
                    question={`${faq.answer ? "" : "[未回答]  "}${faq.question}`}
                    answer={faq.answer}
                    questionId={faq.id}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            {faqs.length !== 0 ? (
              <>
                <span className="text-[#2B546A] text-base">{`${faqs.length} questions matched`}</span>
                <ul className="pt-4">
                  {faqs.reverse().map(faq => (
                    <li
                      key={faq.question}
                      className="pl-2 py-2 text-lg text-[#2B546A] list-inside list-square marker:text-[#57D5C1] hover:bg-[#F6F6F7] rounded-md"
                    >
                      {/* <Link
                    to={`/pages/${faq.pageTitle}`}
                    data-test="question-title"
                    >
                    {faq.question}
                  </Link> */}
                      <DiscloseMenu
                        question={`${faq.answer ? "" : "[未回答]  "}${faq.question}`}
                        answer={faq.answer}
                        questionId={faq.id}
                      />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="flex flex-col items-center gap-5">
                <p>質問が見つかりませんでした。</p>
                <button
                  type="button"
                  className="bg-purple-300 py-3 px-8 rounded-full"
                  onClick={() => {wordPost({keyword:input}); setInput("");}}
                >{`${input}についてもっと知りたい！！`}</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
