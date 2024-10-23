import { useState } from "react";
import { quizQuestions, quizResponses } from "../data";
import { useFlavor } from "./useFlavor";

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
          if (val.responses[0] === responses[0]) {
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
        <h2>Find out what flavor you are</h2>
        <a
          className="bg-orange-300 border border-black p-2 hover:cursor-pointer"
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
                  : ""
              }
              key={question.questionId}
            >
              <h2>{question.question}</h2>
              <div className="flex justify-around">
                <label className="hover:cursor-pointer">
                  <input
                    type="checkbox"
                    value="a"
                    checked={question.respVal === "a"}
                    onChange={() => question.setResp("a")}
                  />
                  <br />
                  {question.option1}
                </label>
                <label className="hover:cursor-pointer">
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
                <a onClick={() => setQuestionView(questionView + 1)}>
                  Next question
                </a>
              ) : (
                <button disabled={isSubmitting}>Submit!</button>
              )}
            </div>
          );
        })}
      </form>
      <div className={questionView !== 9 && !selectedFlavor ? "hidden" : ""}>
        <h2>Your flavor is...</h2>
        <h3>{selectedFlavor?.title}</h3>
        <h3>{selectedFlavor?.description}</h3>
      </div>
    </div>
  );
}
