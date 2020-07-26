// src/models/Quiz.ts - not a TSX file, because there is no JSX used here. We'll store all TS models called models or similar.
export type Quiz = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [
        string
    ];
};

export type QuizResponse = {
    response_code: number;
    results: Quiz[];
}