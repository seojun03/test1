function getFortune() {
    const fortunes = [
        "오늘은 최고의 날이 될 것입니다!",
        "뜻밖의 행운이 찾아올 수 있습니다.",
        "새로운 시작을 하기에 좋은 날입니다.",
        "긍정적인 마음을 유지하면 좋은 일이 생길 것입니다.",
        "주변 사람들에게 친절을 베풀면 복이 되어 돌아올 것입니다."
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneElement = document.getElementById("fortune");
    fortuneElement.textContent = fortunes[randomIndex];
}

const themeSwitch = document.getElementById('checkbox');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});