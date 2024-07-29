// case.js

const caseProblems = [
    "デイリーの売り上げを上げるにはどうすればよいでしょうか",
    "ボランティア活動への参加者を増やすには？",
    "オンライン教育の受講者数を増やすには？",
    "地域のごみ拾いイベントへの参加者を増やすには？",
    "企業のエコ活動を促進するには？",
    "禁煙者を増やすには？",
    "地方の観光客を増やすには？",
    "公共交通機関の利用者を増やすには？",
    "読書習慣を促進するには？",
    "家族の団らん時間を増やすには？",
    "電気自動車の普及を促進するには？",
    "地域の防災意識を高めるには？",
    "学校でのプログラミング教育を普及させるには？",
    "健康診断の受診率を上げるには？",
    "職場のハラスメントを減らすには？",
    "リサイクル率を上げるには？",
    "地域のスポーツイベントへの参加者を増やすには？",
    "子どもの運動不足を解消するには？",
    "通勤時間を短縮するには？",
    "高齢者の孤独を減らすには？",
    "若者の投票率を上げるには？",
    "犬の飼い主のマナーを向上させるには？",
    "地域の商店街の活性化を図るには？",
    "フードロスを減らすには？",
    "学生の勉強時間を増やすには？",
    "家庭のエネルギー消費を減らすには？",
    "地域の文化祭の参加者を増やすには？",
    "ゴミの分別を徹底するには？",
    "地域の防犯意識を高めるには？",
    "職場の生産性を向上させるには？",
    "デジタルデトックスを促進するには？",
    "学生の留学希望者を増やすには？",
    "地域の健康イベントへの参加者を増やすには？",
    "自然災害時の備えを強化するには？",
    "若者のアルバイト参加率を上げるには？",
    "地域の農業を活性化させるには？",
    "高齢者の運動習慣を促進するには？",
    "社会的孤立を防ぐには？",
    "自転車利用を促進するには？",
    "地域の美化活動を推進するには？",
    "子どもの読解力を向上させるには？",
    "学校のいじめを減らすには？",
    "地域の防災訓練の参加率を上げるには？",
    "リモートワークを普及させるには？",
    "家庭でのゴミの再利用を促進するには？",
    "職場でのコミュニケーションを改善するには？",
    "地域の文化活動を支援するには？",
    "若者の職業訓練参加率を上げるには？",
    "地域の祭りを活性化させるには？",
    "家庭菜園を普及させるには？",
    "子どもの科学教育を促進するには？",
    "地域の災害ボランティアを増やすには？",
    "自宅でのペットの飼育を推進するには？",
    "若者の読書離れを防ぐには？",
    "地域の交通安全意識を高めるには？",
    "若者のスポーツ参加率を上げるには？",
    "学校での芸術教育を普及させるには？",
    "親子の時間を増やすには？",
    "職場でのメンタルヘルスを改善するには？",
    "高齢者のデジタルリテラシーを向上させるには？",
    "地域の図書館の利用者を増やすには？",
    "若者の起業を支援するには？",
    "地域の環境保護活動を推進するには？",
    "家庭での節水を促進するには？",
    "学校の部活動への参加者を増やすには？",
    "地域の歴史教育を充実させるには？",
    "若者の社会貢献意識を高めるには？",
    "家庭の食育を推進するには？",
    "地域の交通渋滞を減らすには？",
    "若者の読書離れを防ぐには？",
    "親子の時間を増やすには？",
    "若者の職業訓練参加率を上げるには？",
    "地域の防災意識を高めるには？",
    "自転車利用を促進するには？",
    "家庭菜園を普及させるには？",
    "子どもの科学教育を促進するには？",
    "地域の交通安全意識を高めるには？",
    "地域の農業を活性化させるには？",
    "若者のスポーツ参加率を上げるには？",
    "学校での芸術教育を普及させるには？",
    "親子の時間を増やすには？",
    "職場でのメンタルヘルスを改善するには？",
    "高齢者のデジタルリテラシーを向上させるには？",
    "地域の図書館の利用者を増やすには？",
    "若者の起業を支援するには？",
    "地域の環境保護活動を推進するには？",
    "家庭での節水を促進するには？",
    "学校の部活動への参加者を増やすには？",
    "地域の歴史教育を充実させるには？",
    "若者の社会貢献意識を高めるには？",
    "家庭の食育を推進するには？",
    "地域の交通渋滞を減らすには？",
    "若者の読書離れを防ぐには？",
    "親子の時間を増やすには？",
    "若者の職業訓練参加率を上げるには？",
    "地域の防災意識を高めるには？",
    "自転車利用を促進するには？",
    "家庭菜園を普及させるには？",
    "子どもの科学教育を促進するには？",
    "地域の交通安全意識を高めるには？"
];

function generateCase() {
    const randomIndex = Math.floor(Math.random() * caseProblems.length);
    document.getElementById('problem').innerText = caseProblems[randomIndex];
}


function fermiChange() {
    window.location.href = "index.html";
}
function visionChange(){
    window.location.href = "vision.html";
}
function habitChange(){
    window.location.href = "habit.html";
}