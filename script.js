/* --------------------------------
   데이터 구조 강제 (JS 객체/배열)
-------------------------------- */
const majorsData = [
    {
        title: "임베디드시스템 및 회로",
       // 이미지 경로 추가 (반드시 실제 파일이 있어야 함)
        img: "./assets/images/major-embedded.jpg",
        desc: "하드웨어 장치를 제어하는 두뇌를 설계합니다. 회로망 해석과 마이크로프로세서 제어 기술을 통해 하드웨어와 소프트웨어를 결합합니다.",
        details: ["디지털 논리 회로 및 실습", "전자회로 및 Delta-Wye 등 복잡한 회로망 해석", "마이크로컨트롤러(MCU) 프로그래밍", "소형 전자기기 및 시스템 디버깅 역량"]
    },
    {
        title: "반도체 및 디스플레이",
        img: "./assets/images/Semiconductors.jpg",
        desc: "현대 IT 기기의 핵심 부품인 메모리, 시스템 반도체 및 디스플레이 패널의 동작 원리와 제조 공정을 연구합니다.",
        details: ["물리전자 및 반도체 공학", "집적회로(IC) 설계", "OLED 및 차세대 디스플레이 원리"]
    },
    {
        title: "멀티미디어 및 의공학",
        img: "./assets/images/Biomedical.jpg",
        desc: "영상 및 음성 데이터를 처리하는 기술과, 이를 의료 기기에 접목하여 인체 신호를 분석하고 질병을 진단하는 기술을 배웁니다.",
        details: ["영상 처리 및 컴퓨터 비전", "의료 전자기기 설계", "생체 신호 측정 및 분석"]
    },
    {
        title: "전자파 및 광전자",
        img: "./assets/images/Electromagnetic.jpg",
        desc: "안테나, 레이더, 광통신 등 전자기파의 특성을 활용합니다. 직교, 원통, 구 좌표계와 벡터 미적분학을 활용한 3차원 전자파 해석이 핵심입니다.",
        details: ["전자기학 및 벡터 미적분학 응용", "안테나 공학 및 마이크로파", "광통신 및 레이저 공학"]
    },
    {
        title: "인공지능 및 신호처리",
        img: "./assets/images/aiai.jpg",
        desc: "데이터에 숨겨진 패턴을 분석하고 기계 학습 알고리즘을 최적화하여 스마트 시스템을 구축하는 소프트웨어 중심 전공입니다.",
        details: ["디지털 신호 처리(DSP)", "머신러닝 및 딥러닝 개론", "음성 및 영상 신호 최적화 알고리즘"]
    },
    {
        title: "정보통신",
        img: "./assets/images/inform.jpg",
        desc: "스마트폰, 인터넷, IoT 기기들이 서로 데이터를 주고받는 유무선 통신 네트워크 시스템과 보안 프로토콜을 연구합니다.",
        details: ["이동통신 공학 (5G/6G)", "데이터 통신망 설계", "정보 이론 및 네트워크 보안"]
    },
    {
        title: "지능시스템 및 제어",
        img: "./assets/images/Control.jpg",
        desc: "자율주행 자동차, 드론, 산업용 로봇 등이 주변 환경을 인식하고 스스로 제어하여 움직이도록 하는 기술을 다룹니다.",
        details: ["자동제어 및 센서 공학", "로봇 제어 시스템", "드론 및 자율주행 알고리즘"]
    },
    {
        title: "모바일공학",
        img: "./assets/images/mobile.jpg",
        desc: "스마트폰 및 태블릿 폼팩터에 최적화된 모바일 시스템 아키텍처와 최신 모바일 플랫폼 생태계를 연구합니다.(삼성전자 MX사업부 계약학과)",
        details: ["모바일 시스템 구조", "모바일 앱 및 소프트웨어 최적화", "저전력 시스템 설계"]
    }
];

const curriculumData = [
    {
        title: "1학년: 기초를 다지다",
        desc: "전자공학의 기본이 되는 수학과 과학을 학습하며, 프로그래밍의 기초를 다집니다.",
        details: ["미적분학 및 공학수학", "일반물리학", "C언어 프로그래밍 기초", "전자공학 입문 세미나"]
    },
    {
        title: "2학년: 전공 핵심 진입",
        desc: "본격적인 하드웨어 및 소프트웨어 전공 기초 과목을 수강합니다.",
        details: ["회로이론 (복잡한 브리지 회로 및 Y-Δ 변환)", "전자기학 (벡터 해석학 기반 3D 전자기장 파악)", "디지털 논리 회로", "객체지향 프로그래밍 (C++/Java)"]
    },
    {
        title: "3학년: 심화 및 응용",
        desc: "세부 전공별 심화 과목을 선택하여 본인만의 전문성을 기릅니다.",
        details: ["전자회로 및 마이크로프로세서 응용", "반도체 공학 및 통신 이론", "디지털 신호 처리 및 제어공학", "전공 심화 실험 및 실습"]
    },
    {
        title: "4학년: 실무 융합 프로젝트",
        desc: "그동안 배운 지식을 통합하여 실제 동작하는 제품이나 시스템을 팀 단위로 개발합니다.",
        details: ["캡스톤 디자인 (졸업 작품)", "산학 협력 프로젝트 (기업 연계)", "2~3인 규모의 소자본 기술 창업 및 비즈니스 기획", "엔지니어 윤리 및 실무 특강"]
    }
];

/* --------------------------------
   프레젠테이션 상태 관리
-------------------------------- */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

/* DOM 요소 가져오기 */
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideCounter = document.getElementById('slide-counter');
const progressBar = document.getElementById('progress-bar');
const tocLinks = document.querySelectorAll('#toc-nav li');

/* 모달 요소 가져오기 */
const modalOverlay = document.getElementById('modal-overlay');
const modalCloseBtn = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

/* --------------------------------
   초기화 및 동적 렌더링
-------------------------------- */
function init() {
    renderCards('majors-container', majorsData, 'major');
    renderCards('curriculum-container', curriculumData, 'curriculum');
    updateSlide();
}

function renderCards(containerId, dataArray, type) {
    const container = document.getElementById(containerId);
    dataArray.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card interactive-card';
        card.innerHTML = `<h3>${item.title}</h3><p>클릭하여 상세 보기</p>`;
        
        // 클릭 시 모달 열기 이벤트 바인딩
        card.addEventListener('click', () => openModal(item));
        container.appendChild(card);
    });
}

/* --------------------------------
   모달 인터랙션 (2배 확대 및 Dim)
-------------------------------- */
// script.js 에서 openModal 함수 내부 수정

function openModal(data) {
    modalTitle.innerText = data.title;
    
    // 모달 내부를 좌/우로 나누기 위한 래퍼(wrapper) 추가
    let contentHtml = `<div class="modal-flex-layout">`;
    
    // 왼쪽: 텍스트 영역
    contentHtml += `<div class="modal-text-zone">`;
    contentHtml += `<p class="modal-desc">${data.desc}</p><ul>`;
    data.details.forEach(detail => {
        contentHtml += `<li>${detail}</li>`;
    });
    contentHtml += `</ul></div>`; // 텍스트 영역 닫기

    // 오른쪽: 이미지 영역 (데이터에 이미지가 있을 경우만)
    if (data.img) {
        contentHtml += `
            <div class="modal-image-zone">
                <img src="${data.img}" alt="${data.title}" class="modal-image">
            </div>
        `;
    }

    contentHtml += `</div>`; // 전체 래퍼 닫기
    
    modalBody.innerHTML = contentHtml;

    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
        modalOverlay.classList.add('show');
    }, 10);
}

function closeModal() {
    modalOverlay.classList.remove('show');
    // 애니메이션이 끝난 후 hidden 처리
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
    }, 400); // CSS transition 시간(0.4s)과 동일하게 맞춤
}

// 모달 닫기 이벤트
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* --------------------------------
   슬라이드 이동 로직
-------------------------------- */
function updateSlide() {
    // 모든 슬라이드 클래스 초기화
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'inactive-prev', 'inactive-next');
        if (index < currentSlide) {
            slide.classList.add('inactive-prev');
        } else if (index > currentSlide) {
            slide.classList.add('inactive-next');
        } else {
            slide.classList.add('active');
        }
    });

    // 컨트롤러 UI 업데이트
    slideCounter.innerText = `${currentSlide + 1} / ${totalSlides}`;
    progressBar.style.width = `${((currentSlide) / (totalSlides - 1)) * 100}%`;

    // 목차 네비게이션 업데이트
    tocLinks.forEach(link => link.classList.remove('active'));
    tocLinks[currentSlide].classList.add('active');

    // 버튼 상태 (첫/마지막 슬라이드)
    prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
    prevBtn.style.cursor = currentSlide === 0 ? 'default' : 'pointer';
    nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
    nextBtn.style.cursor = currentSlide === totalSlides - 1 ? 'default' : 'pointer';
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

/* --------------------------------
   이벤트 리스너 (키보드, 버튼, 목차)
-------------------------------- */
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
    // 모달이 열려있을 때는 슬라이드 이동 방지
    if (modalOverlay.classList.contains('show')) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        prevSlide();
    }
});

tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetSlide = parseInt(e.target.getAttribute('data-slide'));
        if (!isNaN(targetSlide)) {
            currentSlide = targetSlide;
            updateSlide();
        }
    });
});

// 초기화 실행
init();
/* --------------------------------
   진로 카드 클릭 토글 인터랙션
-------------------------------- */
// 화면에 있는 모든 진로 카드를 찾습니다.
const careerCards = document.querySelectorAll('.career-card');

careerCards.forEach(card => {
    card.addEventListener('click', () => {
        // 카드를 클릭할 때마다 'active-red' 클래스를 넣었다가 뺐다가(toggle) 합니다.
        card.classList.toggle('active-red');
    });
});
/* --------------------------------
   전자공학 페이지 캐릭터 클릭 인터랙션
-------------------------------- */
const charTrigger = document.getElementById('char-trigger');
const speechBubble = document.getElementById('speech-bubble');

if (charTrigger && speechBubble) {
    charTrigger.addEventListener('click', (e) => {
        // 이벤트 버블링 방지 (슬라이드 이동 등 방지)
        e.stopPropagation(); 
        
        // 말풍선 'show' 클래스를 토글 (껐다 켰다)
        speechBubble.classList.toggle('show');
    });

    // 💡 UX 배려: 말풍선이 켜져 있을 때 다른 곳을 클릭하면 닫히도록 함
    document.addEventListener('click', (e) => {
        if (speechBubble.classList.contains('show') && !charTrigger.contains(e.target)) {
            speechBubble.classList.remove('show');
        }
    });
}
