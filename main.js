
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
    aiStudio: "Google AI Studio",
    posemaster_title: "PoseMaster",
    posemaster_desc: "AI로 멋진 포즈를 만들어 보세요.",
    promptlens_title: "PromptLens",
    promptlens_desc: "프롬프트의 힘을 탐색해 보세요."
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
    aiStudio: "Google AI Studio",
    posemaster_title: "PoseMaster",
    posemaster_desc: "Create cool poses with AI.",
    promptlens_title: "PromptLens",
    promptlens_desc: "Explore the power of prompts."
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
    aiStudio: "Google AI Studio",
    posemaster_title: "PoseMaster",
    posemaster_desc: "AIでクールなポーズを作成します。",
    promptlens_title: "PromptLens",
    promptlens_desc: "プロンプトの力を探ります。"
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
