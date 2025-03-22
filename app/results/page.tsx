"use client";

import { useSearchParams } from "next/navigation";
import { Trophy, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "0");
  const percentage = Math.round((score / total) * 100);

  const getLevelTitle = (level: string) => {
    switch (level) {
      case "beginner":
        return "初級";
      case "intermediate":
        return "中級";
      case "advanced":
        return "上級";
      default:
        return "";
    }
  };

  const getEvaluation = (percentage: number) => {
    if (percentage >= 80) {
      return {
        title: "優秀",
        description: "このレベルのExcelスキルを十分に習得しています！",
        color: "text-green-600",
      };
    } else if (percentage >= 60) {
      return {
        title: "良好",
        description: "基本的なスキルは身についていますが、さらなる練習で完璧に！",
        color: "text-blue-600",
      };
    } else {
      return {
        title: "要練習",
        description: "基礎からじっくり学び直すことをお勧めします。",
        color: "text-orange-600",
      };
    }
  };

  const evaluation = getEvaluation(percentage);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              トップへ戻る
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">診断結果</h1>
          <p className="text-gray-600">
            {getLevelTitle(level || "")}レベルの診断が完了しました
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              あなたのスコア
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-5xl font-bold mb-4">
              {score} <span className="text-2xl text-gray-500">/ {total}</span>
            </div>
            <div className="text-xl font-semibold mb-2">
              正答率: {percentage}%
            </div>
            <div className={`text-2xl font-bold mb-4 ${evaluation.color}`}>
              {evaluation.title}
            </div>
            <p className="text-gray-600">{evaluation.description}</p>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Link href="/level-select">
            <Button variant="outline" size="lg">
              別のレベルに挑戦
            </Button>
          </Link>
          <Button
            variant="default"
            size="lg"
            className="gap-2"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Excel スキルチェッカー - 診断結果",
                  text: `私のExcelスキル診断結果：${getLevelTitle(level || "")}レベルで${score}/${total}点を獲得しました！`,
                  url: window.location.href,
                });
              }
            }}
          >
            結果をシェア
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}