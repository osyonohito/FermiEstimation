const problems = [
    "あらゆる事柄に目標を設定し、計画的に生きる",
    "セルフコントロール能力の習得",
    "成功者としての自己概念を形成する",
    "心の法則を使う",
    "パワーパートナーの協力を得る能力",
    "専門能力を開発し、真のプロフェッショナルになる",
    "過去志向型から未来志向型への変革",
    "一生学び続ける",
    "健康管理を徹底し、エネルギッシュに生きる",
    "実践主義に徹する"
];

function generateHabit() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    document.getElementById('problem').innerText = problems[randomIndex];
}

function fermiChange() {
    window.location.href = "index.html";
}

function caseChange() {
    window.location.href = "CaseProblem.html";
}

function visionChange() {
    window.location.href = "vision.html";
}
