import fs from 'fs';
import path from 'path';

const specialDays = [
  "ソフトクリームの日",
  "通天閣の日",
  "七味の日",
  "波の日",
  "オロナミンCの日",
  "渚の日",
  "涙の日",
  "塩と暮らしの日",
  "NAOMIの日",
  "くるみパンの日",
  "みたらしだんごの日",
  "ビースリーの日",
  "枇杷忌",
  "紅玉忌"
];

// ランダムに2つの日付を選択
const getRandomDays = (days) => {
  const randomIndices = [];
  while (randomIndices.length < 2) {
    const randomIndex = Math.floor(Math.random() * days.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }
  return randomIndices.map(index => days[index]);
};

const todaySpecialDays = getRandomDays(specialDays);

// JSONファイルに書き込む
const filePath = path.join(process.cwd(), 'special_days.json');
fs.writeFileSync(filePath, JSON.stringify(todaySpecialDays, null, 2));

console.log('Special days updated:', todaySpecialDays);
