import { useState } from "react";
import { quizQuestions, quizResponses } from "../data";
import { useFlavor } from "./useFlavor";
import { Link } from "react-router-dom";

export function Quiz() {
  const [questionView, setQuestionView] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resp1, setResp1] = useState<"a" | "b" | "">("");
  const [resp2, setResp2] = useState<"a" | "b" | "">("");
  const [resp3, setResp3] = useState<"a" | "b" | "">("");
  const [resp4, setResp4] = useState<"a" | "b" | "">("");
  const [resp5, setResp5] = useState<"a" | "b" | "">("");
  const [resp6, setResp6] = useState<"a" | "b" | "">("");
  const [resp7, setResp7] = useState<"a" | "b" | "">("");
  const [resp8, setResp8] = useState<"a" | "b" | "">("");
  const { selectedFlavor, handleSetFlavor } = useFlavor();

  const resps = [resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8];
  const setResps = [
    setResp1,
    setResp2,
    setResp3,
    setResp4,
    setResp5,
    setResp6,
    setResp7,
    setResp8,
  ];

  const questionArray = quizQuestions.map((val, index) => {
    return {
      ...val,
      respVal: resps[index],
      setResp: setResps[index],
    };
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const responses = [resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8];
    let highest = { flavorId: -1, highestComp: 0 };
    quizResponses.forEach((val) => {
      if (responses[7] === val.responses[7]) {
        let comp = 0;
        for (let i = 0; i < val.responses.length; i++) {
          if (val.responses[i] === responses[i]) {
            comp += 1;
          }
        }
        if (comp > highest.highestComp) {
          highest = { flavorId: val.flavorId, highestComp: comp };
        }
      }
    });
    handleSetFlavor(highest.flavorId);
    setIsSubmitting(false);
    setQuestionView(questionView + 1);
  }

  return (
    <div>
      <div className={questionView !== 0 || selectedFlavor ? "hidden" : ""}>
        <h2 className="mb-4 text-md sm:text-2xl">
          Find out what flavor you are
        </h2>
        <a
          className="bg-[#FC4700] hover:bg-[#85D3A5] border text-md sm:text-2xl border-black p-4 hover:cursor-pointer rounded-full"
          onClick={() => setQuestionView(questionView + 1)}
        >
          Get started!
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        {questionArray.map((question) => {
          return (
            <div
              className={
                questionView !== question.questionId || selectedFlavor
                  ? "hidden"
                  : "flex flex-col justify-around"
              }
              key={question.questionId}
            >
              <h2 className="mb-4 text-lg sm:text-2xl">
                Q{question.questionId}: {question.question}
              </h2>
              <div className="flex justify-between mb-8 ">
                <label className="hover:cursor-pointer text-lg sm:text-2xl hover:drop-shadow-2xl hover:text-slate-200 capitalize basis-[45%] sm:basis-1/2">
                  <input
                    type="checkbox"
                    value="a"
                    checked={question.respVal === "a"}
                    onChange={() => question.setResp("a")}
                  />
                  <br />
                  {question.option1}
                </label>
                <label className="hover:cursor-pointer text-lg sm:text-2xl hover:drop-shadow-2xl hover:text-slate-200 capitalize basis-[45%] sm:basis-1/2">
                  <input
                    type="checkbox"
                    value="b"
                    checked={question.respVal === "b"}
                    onChange={() => question.setResp("b")}
                  />
                  <br />
                  {question.option2}
                </label>
              </div>
              {question.questionId !== 8 ? (
                <a
                  onClick={() => {
                    if (question.respVal !== "") {
                      setQuestionView(questionView + 1);
                    }
                  }}
                  className={
                    question.respVal !== ""
                      ? "bg-[#FC4700] hover:bg-[#85D3A5] border text-lg sm:text-2xl border-black p-4 hover:cursor-pointer hover:drop-shadow-2xl rounded-full"
                      : "invisible"
                  }
                >
                  Next question
                </a>
              ) : (
                <button
                  disabled={isSubmitting}
                  className={
                    question.respVal !== ""
                      ? "bg-[#FC4700] hover:bg-[#85D3A5] border text-lg sm:text-2xl border-black p-4 hover:cursor-pointer hover:drop-shadow-2xl rounded-full "
                      : "invisible"
                  }
                >
                  Submit!
                </button>
              )}
            </div>
          );
        })}
      </form>
      <div
        className={
          questionView !== 9 && !selectedFlavor
            ? "hidden"
            : "flex flex-col justify-center items-center"
        }
      >
        <h2 className="text-lg sm:text-2xl mb-4">Your flavor is...</h2>
        <h3 className="text-lg sm:text-2xl mb-4">{selectedFlavor?.title}</h3>
        <h3 className="text-base sm:text-xl sm:w-3/4 w-full">
          {selectedFlavor?.respDescription}
        </h3>
        <Link
          to="order"
          className="bg-[#FC4700] hover:bg-[#85D3A5] border text-lg sm:text-2xl border-black p-4 hover:cursor-pointer hover:drop-shadow-2xl rounded-full"
        >
          Order Now!
        </Link>
      </div>
    </div>
  );
}
