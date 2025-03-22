"use client";

import { ArrowLeft, BookOpen, Brain, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LevelSelect() {
  const router = useRouter();

  const levels = [
    {
      id: "beginner",
      title: "初級レベル",
      description: "基本的な関数や操作方法を確認します",
      icon: BookOpen,
      questions: 10,
      time: "約10分",
    },
    {
      id: "intermediate",
      title: "中級レベル",
      description: "応用的な関数やデータ分析スキルをテストします",
      icon: Brain,
      questions: 10,
      time: "約15分",
    },
    {
      id: "advanced",
      title: "上級レベル",
      description: "高度な分析手法や自動化スキルを評価します",
      icon: Rocket,
      questions: 10,
      time: "約20分",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              戻る
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">レベルを選択</h1>
          <p className="text-gray-600">
            あなたの現在のExcelスキルに最も近いレベルを選んでください
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Card key={level.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <level.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-center">{level.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>問題数: {level.questions}問</p>
                  <p>所要時間: {level.time}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  onClick={() => router.push(`/quiz/${level.id}`)}
                  className="w-full"
                >
                  このレベルで診断開始
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}