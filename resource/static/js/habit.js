const problems = [
    "第1の原則 あらゆる事柄に目標を設定し、計画的に生きる",
    "第2の原則 セルフコントロール能力の習得",
    "第3の原則 成功者としての自己概念を形成する",
    "第4の原則 心の法則を使う",
    "第5の原則 パワーパートナーの協力を得る能力",
    "第6の原則 専門能力を開発し、真のプロフェッショナルになる",
    "第7の原則 過去志向型から未来志向型への変革",
    "第8の原則 一生学び続ける",
    "第9の原則 健康管理を徹底し、エネルギッシュに生きる",
    "第10の原則 実践主義に徹する"
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
