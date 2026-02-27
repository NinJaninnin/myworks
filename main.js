const translations = {
  ko: {
    title: "멋진 프로젝트",
    devTools: "개발 도구",
    gemini_title: "Gemini",
    gemini_desc: "창의적이고 유용한 협업 도구입니다.",
    firebase_title: "Firebase Studio",
    firebase_desc: "웹 앱을 쉽게 빌드하고 배포하세요.",
    github_title: "GitHub",
    github_desc: "세계 최고의 소프트웨어 개발 플랫폼입니다.",
    cloudflare_title: "Cloudflare",
    cloudflare_desc: "더 나은 인터넷을 만드는 데 도움을 줍니다.",
    google_labs_title: "Google Labs",
    google_mixboard_title: "Google Mixboard",
    manual_title: "메뉴얼",
    manual_desc: "firebase studio에 AI를 설정하는 법부터 배포까지",
    aiStudio: "Google AI Studio",
    posemaster_title: "PoseMaster",
    posemaster_desc: "AI로 멋진 포즈를 만들어 보세요.",
    promptlens_title: "PromptLens",
    promptlens_desc: "프롬프트의 힘을 탐색해 보세요.",
    schedule_management: "스케쥴 관리",
    bangdai_title: "방다이(Bangdai)",
    etc_works: "Etc Works",
    verse8_title: "Verse8",
    pixiv_title: "Pixiv"
  },
  en: {
    title: "My Awesome Project",
    devTools: "Development Tools",
    gemini_title: "Gemini",
    gemini_desc: "Your creative and helpful collaborator.",
    firebase_title: "Firebase Studio",
    firebase_desc: "Build and deploy web apps with ease.",
    github_title: "GitHub",
    github_desc: "The world's leading software development platform.",
    cloudflare_title: "Cloudflare",
    cloudflare_desc: "Helping build a better Internet.",
    google_labs_title: "Google Labs",
    google_mixboard_title: "Google Mixboard",
    manual_title: "Manual",
    manual_desc: "From setting up AI in Firebase Studio to deployment",
    aiStudio: "Google AI Studio",
    posemaster_title: "PoseMaster",
    posemaster_desc: "Create cool poses with AI.",
    promptlens_title: "PromptLens",
    promptlens_desc: "Explore the power of prompts.",
    schedule_management: "Schedule Management",
    bangdai_title: "Bangdai",
    etc_works: "Etc Works",
    verse8_title: "Verse8",
    pixiv_title: "Pixiv"
  },
  ja: {
    title: "素晴らしいプロジェクト",
    devTools: "開発ツール",
    gemini_title: "Gemini",
    gemini_desc: "創造的で便利なコラボレーションツールです。",
    firebase_title: "Firebase Studio",
    firebase_desc: "ウェブアプリを簡単にビルドして展開します。",
    github_title: "GitHub",
    github_desc: "世界をリードするソフトウェア開発プラットフォームです。",
    cloudflare_title: "Cloudflare",
    cloudflare_desc: "より良いインターネットの構築を支援します。",
    google_labs_title: "Google Labs",
    google_mixboard_title: "Google Mixboard",
    manual_title: "マニュアル",
    manual_desc: "Firebase StudioでのAIの設定からデプロイまで",
    aiStudio: "Google AI Studio",
    posemaster_title: "PoseMaster",
    posemaster_desc: "AIでクールなポーズを作成します。",
    promptlens_title: "PromptLens",
    promptlens_desc: "プロンプトの力を探ります。",
    schedule_management: "スケジュール管理",
    bangdai_title: "バンダイ",
    etc_works: "その他",
    verse8_title: "Verse8",
    pixiv_title: "Pixiv"
  }
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Set default language to Korean
changeLanguage('ko');
