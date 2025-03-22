"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { type Quiz } from "@/lib/quiz-data";
import Link from "next/link";

interface QuizClientProps {
  initialQuizzes: Quiz[];
  level: string;
}

export function QuizClient({ initialQuizzes, level }: QuizClientProps) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const quizzes = initialQuizzes;
  const currentQuiz = quizzes[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizzes.length) * 100;
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex === quizzes.length - 1) {
      // Calculate results and navigate to results page
      const correctAnswers = selectedAnswers.filter(
        (answer, index) => answer === quizzes[index].correctAnswerIndex
      ).length;
      
      router.push(
        `/results?level=${level}&score=${correctAnswers}&total=${quizzes.length}`
      );
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    }
  };

  if (!currentQuiz) {
    return <div>Loading...</div>;
  }

  const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
  const isCorrect = selectedAnswers[currentQuestionIndex] === currentQuiz.correctAnswerIndex;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/level-select">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              中止する
            </Button>
          </Link>
          <div className="text-sm text-gray-500">
            問題 {currentQuestionIndex + 1} / {quizzes.length}
          </div>
        </div>


          <Progress 
            value={(currentQuestionIndex / quizzes.length) * 100} 
            className="mb-8" 
          />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuiz.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuiz.choices.map((choice, index) => (
              <Button
                key={index}
                variant={
                  showExplanation
                    ? index === currentQuiz.correctAnswerIndex
                      ? "default"
                      : index === selectedAnswers[currentQuestionIndex]
                      ? "destructive"
                      : "outline"
                    : selectedAnswers[currentQuestionIndex] === index
                    ? "default"
                    : "outline"
                }
                className="w-full justify-start text-left h-auto py-4 px-6"
                onClick={() => handleAnswerSelect(index)}
              >
                {choice}
              </Button>
            ))}
          </CardContent>
          {showExplanation && (
            <CardFooter className="flex flex-col items-start">
              <div className={`p-4 rounded-lg w-full ${
                isCorrect ? "bg-green-50" : "bg-red-50"
              }`}>
                <p className={`font-semibold mb-2 ${
                  isCorrect ? "text-green-700" : "text-red-700"
                }`}>
                  {isCorrect ? "正解です！" : "不正解です"}
                </p>
                <p className="text-gray-700">{currentQuiz.explanation}</p>
              </div>
            </CardFooter>
          )}
        </Card>

        <div className="flex justify-end">
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="gap-2"
          >
            {currentQuestionIndex === quizzes.length - 1 ? "結果を見る" : "次の問題へ"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}