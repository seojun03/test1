function getFortune() {
    const fortunes = [
        "오늘은 정말 좋은 일이 생길 것 같아요! 🍀",
        "기대하지 않았던 곳에서 행운이 찾아옵니다. ✨",
        "차분하게 하루를 보내면 뜻밖의 성과가 있을 거예요. 🧘",
        "새로운 인연이 생길 수 있는 날입니다. 😊",
        "하고 싶었던 일을 시작하기에 아주 좋은 날입니다! 🚀",
        "오늘은 맛있는 음식을 먹으며 힐링해 보세요. 🍕",
        "긍정적인 마음가짐이 더 큰 행운을 불러옵니다. ☀️",
        "주변 사람들에게 따뜻한 말 한마디를 건네보세요. ❤️"
    ];
    
    const fortuneDisplay = document.getElementById('fortune');
    
    // 애니메이션 효과를 위해 클래스 제거 후 다시 추가
    fortuneDisplay.classList.remove('fortune-active');
    void fortuneDisplay.offsetWidth; // 리플로우 강제 발생
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneDisplay.innerText = fortunes[randomIndex];
    fortuneDisplay.classList.add('fortune-active');
}

// 다크모드/라이트모드 전환 로직
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
