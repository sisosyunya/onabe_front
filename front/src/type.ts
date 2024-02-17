export type question = answeredQuestion | unansweredQuestion;

type commonQuestionFields = {
  id: string,
  question: string,
  keyword: string,
  createdAt: Date,
};

// 回答済みの質問
export type answeredQuestion =  commonQuestionFields & {
  answer: string,
  answeredAt: Date,
};

// 未回答の質問
export type unansweredQuestion =  commonQuestionFields;
