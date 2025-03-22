
import { QuizClient } from "@/app/quiz/[level]/_components/quiz-client";
import { getQuizzesByLevel, type QuizLevel } from "@/lib/quiz-data";

export function generateStaticParams() {
  return [
    { level: 'beginner' },
    { level: 'intermediate' },
    { level: 'advanced' },
  ];
}

export default function QuizPage({ params }: { params: { level: string } }) {
  const quizzes = getQuizzesByLevel(params.level as QuizLevel);
  
  return (
    <QuizClient
      initialQuizzes={quizzes} 
      level={params.level} 
    />
  );
}