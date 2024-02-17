import { answeredQuestion, unansweredQuestion } from "./type";

const mockCreatedAt = new Date(2024, 0, 1);
const mockAnsweredAt = new Date(2024, 1, 1);

//全ての未回答の質問
export const allUnansweredQuestion: unansweredQuestion[] = [
  {
    id: "aaaaaaaaaaaaaa",
    question: "バナナはおやつですか",
    keyword: "バナナ",
    createdAt: mockCreatedAt,
  },
  {
    id: "bbbbbbbbbbbbbb",
    question: "りんごはおやつですか",
    keyword: "りんご",
    createdAt: mockCreatedAt,
  },
  {
    id: "cccccccccccccc",
    question: "みかんはおやつですか",
    keyword: "みかん",
    createdAt: mockCreatedAt,
  },
  {
    id: "dddddddddddddd",
    question: "バナナはおやつですか",
    keyword: "いちご",
    createdAt: mockCreatedAt,
  },
  {
    id: "eeeeeeeeeeeeeee",
    question: "スイカはおやつですか",
    keyword: "スイカ",
    createdAt: mockCreatedAt,
  },
  {
    id: "ffffffffffffffff",
    question: "しいたけはおやつですか",
    keyword: "しいたけ",
    createdAt: mockCreatedAt,
  },
  {
    id: "ggggggggggggggggggg",
    question: "ももはおやつですか",
    keyword: "もも",
    createdAt: mockCreatedAt,
  },
  {
    id: "hhhhhhhhhhhhhhhhh",
    question: "たにしはおやつですか",
    keyword: "たにし",
    createdAt: mockCreatedAt,
  },
  {
    id: "iiiiiiiiiiiiiiiii",
    question: "じゃがいもはおやつですか",
    keyword: "じゃがいも",
    createdAt: mockCreatedAt,
  },
  {
    id: "jjjjjjjjjjjjjjjjj",
    question: "かぼちゃはおやつですか",
    keyword: "かぼちゃ",
    createdAt: mockCreatedAt,
  },
];

// 全ての回答済みの質問
export const allAnsweredQuestion: answeredQuestion[] = [
  {
    id: "kkkkkkkkkkkkk",
    question: "バナナはおかずですか",
    answer: "おかずです",
    keyword: "バナナ",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "llllllllllllll",
    question: "りんごはおかずですか",
    answer: "おかずです",
    keyword: "りんご",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "mmmmmmmmmmmmmm",
    question: "みかんはおかずですか",
    answer: "おかずです",
    keyword: "みかん",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "nnnnnnnnnnnnnnn",
    question: "バナナはおかずですか",
    answer: "おかずです",
    keyword: "いちご",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "ooooooooooooooooo",
    question: "スイカはおかずですか",
    answer: "おかずです",
    keyword: "スイカ",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "ppppppppppppppppppp",
    question: "しいたけはおかずですか",
    answer: "おかずです",
    keyword: "しいたけ",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "qqqqqqqqqqqqqqq",
    question: "ももはおかずですか",
    answer: "おかずです",
    keyword: "もも",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "rrrrrrrrrrrrrrrrrrrr",
    question: "たにしはおかずですか",
    answer: "おかずです",
    keyword: "たにし",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "sssssssssssssssssssss",
    question: "じゃがいもはおかずですか",
    answer: "おかずです",
    keyword: "じゃがいも",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
  {
    id: "tttttttttttttttttttt",
    question: "かぼちゃはおかずですか",
    answer: "おかずです",
    keyword: "かぼちゃ",
    createdAt: mockCreatedAt,
    answeredAt: mockAnsweredAt,
  },
];