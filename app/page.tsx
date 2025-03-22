import { ArrowRight, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <FileSpreadsheet className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Excel スキルチェッカー</h1>
          <p className="text-lg text-gray-600 mb-6">
            あなたのExcelスキルレベルを診断してみましょう。
            初級から上級まで、実践的な問題を通じてスキルを確認できます。
          </p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">スキル診断を始める</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">初級レベル</h3>
                <p className="text-sm text-gray-600">基本的な関数と操作</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">中級レベル</h3>
                <p className="text-sm text-gray-600">応用関数とデータ分析</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">上級レベル</h3>
                <p className="text-sm text-gray-600">高度な分析と自動化</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/level-select">
              <Button size="lg" className="gap-2">
                診断スタート
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">✨ 無料で利用可能</h3>
            <p className="text-sm text-gray-600">
              会員登録不要で、すぐに診断を開始できます
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">📊 即時結果表示</h3>
            <p className="text-sm text-gray-600">
              診断終了後、すぐにレベル判定結果が確認できます
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">📚 詳細な解説付き</h3>
            <p className="text-sm text-gray-600">
              各問題の解説で理解を深められます
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}