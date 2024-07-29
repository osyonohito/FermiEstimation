const problems = [
    "Purpose(存在目的) 人生をかがやかせる",
    "Vision(ビジョン) 十村十色",
    "Ownership(当事者意識)",
    "Integrity(高潔さ)",
    "Commitment(達成力)",
    "Challenge(挑戦)",
    "Praise(賞賛)",
    "Discipline(規律)",
    "Self-Improvement(研鑽)"
];

function generateVision() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    document.getElementById('problem').innerText = problems[randomIndex];
}

function fermiChange() {
    window.location.href = "index.html";
}

function caseChange() {
    window.location.href = "CaseProblem.html";
}

function habitChange(){
    window.location.href = "habit.html";
}
