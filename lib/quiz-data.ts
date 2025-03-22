export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Quiz {
  id: string;
  level: QuizLevel;
  question: string;
  choices: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const quizData: Quiz[] = [
  {
    id: '1',
    level: 'beginner',
    question: 'セル A1〜A5 にある「売上金額（数値）」の合計を求めるには、どの関数を使えばよいですか？',
    choices: [
      '=COUNT(A1:A5)',
      '=SUM(A1:A5)',
      '=AVERAGE(A1:A5)',
      '=MAX(A1:A5)'
    ],
    correctAnswerIndex: 1,
    explanation: 'SUM関数は選択した範囲の数値を合計します。売上金額の合計を求める基本的な関数です。'
  },
  {
    id: '2',
    level: 'beginner',
    question: '文字列が入力されたセル B2〜B6 を昇順で並べ替えるには、どの操作を使いますか？',
    choices: [
      'セルの書式設定',
      'データの入力規則',
      'データ → 並べ替え',
      '表の挿入'
    ],
    correctAnswerIndex: 2,
    explanation: 'データタブの「並べ替え」機能を使用することで、選択した範囲のデータを昇順または降順に並べ替えることができます。'
  },
  {
    id: '3',
    level: 'beginner',
    question: 'C2 に「=A2+B2」の数式が入っているとき、C2〜C10 に同様の式をコピーする適切な方法は？',
    choices: [
      '手動で1つずつ入力する',
      '数式をコピーしてペーストする',
      'C2の右下をドラッグしてオートフィルする',
      '印刷範囲を設定する'
    ],
    correctAnswerIndex: 2,
    explanation: 'セルの右下のフィルハンドルをドラッグすることで、数式を自動的に下方向にコピーできます。'
  },
  {
    id: '4',
    level: 'beginner',
    question: 'セルに日付「2025/03/01」が入力されているとき、曜日を表示するために使う関数は？',
    choices: [
      '=WEEKDAY()',
      '=DAY()',
      '=NOW()',
      '=TEXT()'
    ],
    correctAnswerIndex: 3,
    explanation: 'TEXT関数を使用して、日付を曜日表示に変換できます。例：=TEXT(A1,"aaa")'
  },
  {
    id: '5',
    level: 'intermediate',
    question: 'A列に80点以上は緑色、60点未満は赤色にするには、どの機能を使えばよいですか？',
    choices: [
      'データの入力規則',
      '条件付き書式',
      'セルの結合',
      '名前の定義'
    ],
    correctAnswerIndex: 1,
    explanation: '条件付き書式を使用することで、セルの値に応じて色や書式を自動的に変更できます。'
  },
  {
    id: '6',
    level: 'intermediate',
    question: 'B列に「出席」や「欠席」があるとき、C列に「=IF関数」を使って出席なら「◯」、欠席なら「×」と表示する正しい式は？',
    choices: [
      '=IF(B2="出席","◯","×")',
      '=IF(B2>0,"◯","×")',
      '=IF("出席"=B2,"×","◯")',
      '=IF(B2="欠席","◯","×")'
    ],
    correctAnswerIndex: 0,
    explanation: 'IF関数の第1引数に条件、第2引数に真の場合の値、第3引数に偽の場合の値を指定します。'
  },
  {
    id: '7',
    level: 'intermediate',
    question: 'VLOOKUP関数で正しい構文は次のうちどれですか？',
    choices: [
      '=VLOOKUP(検索値, 範囲, 列番号, 方式)',
      '=VLOOKUP(列番号, 検索値, 範囲, 方式)',
      '=VLOOKUP(範囲, 列番号, 検索値)',
      '=VLOOKUP(検索値, 範囲, 行番号, 方式)'
    ],
    correctAnswerIndex: 0,
    explanation: 'VLOOKUP関数は、検索値、検索範囲、返す列番号、検索方式の4つの引数を必要とします。'
  },
  {
    id: '8',
    level: 'intermediate',
    question: 'データの中から重複した値を削除するには、どの機能を使用しますか？',
    choices: [
      '条件付き書式',
      '重複の削除',
      'データのフィルター',
      'セルの結合解除'
    ],
    correctAnswerIndex: 1,
    explanation: 'データタブの「重複の削除」機能を使用することで、選択した範囲から重複する値を削除できます。'
  },
  {
    id: '9',
    level: 'advanced',
    question: '売上データから支店ごとの月別売上合計を出すには、どの機能を使用するのが最適ですか？',
    choices: [
      'COUNTIF関数',
      '折れ線グラフ',
      'ピボットテーブル',
      'データの並べ替え'
    ],
    correctAnswerIndex: 2,
    explanation: 'ピボットテーブルを使用することで、複数の条件でデータを集計し、クロス集計表を作成できます。'
  },
  {
    id: '10',
    level: 'advanced',
    question: '複数条件で値を検索したいときに使う関数の組み合わせとして正しいのは？',
    choices: [
      '=VLOOKUP + IF',
      '=INDEX + MATCH',
      '=SUM + COUNTIF',
      '=AVERAGE + IF'
    ],
    correctAnswerIndex: 1,
    explanation: 'INDEX + MATCHの組み合わせは、複数条件での検索や、縦横どちらの検索にも対応できる柔軟な方法です。'
  },
  {
    id: '11',
    level: 'advanced',
    question: '「中央値」を求める関数はどれですか？',
    choices: [
      '=MODE()',
      '=MEDIAN()',
      '=AVERAGE()',
      '=MID()'
    ],
    correctAnswerIndex: 1,
    explanation: 'MEDIAN関数は、数値の中央値を返します。データの分布を分析する際に使用されます。'
  },
  {
    id: '12',
    level: 'advanced',
    question: 'グラフに「移動平均線」を追加するには、どの操作が必要ですか？',
    choices: [
      'グラフ → 書式設定 → データラベル追加',
      'グラフ → グラフ要素追加 → 折れ線グラフに変換',
      'グラフ → グラフ要素の追加 → 近似曲線 → 移動平均',
      'グラフ → レイアウトの変更 → データ範囲の変更'
    ],
    correctAnswerIndex: 2,
    explanation: 'グラフ要素の追加から近似曲線を選択し、移動平均を設定することで、データの傾向を把握しやすくなります。'
  }
];

export const getQuizzesByLevel = (level: QuizLevel): Quiz[] => {
  return quizData.filter(quiz => quiz.level === level);
};