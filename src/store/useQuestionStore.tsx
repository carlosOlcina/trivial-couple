import { create } from "zustand";
import QuestionData from "../data/questions.json";

type Store = {
  questions: string[];
  deleteFirstQuestion: () => void;
};

export const useQuestionStore = create<Store>((set) => ({
  questions: [...QuestionData],
  deleteFirstQuestion: () =>
    set((state) => ({ questions: state.questions.slice(1) })),
}));
