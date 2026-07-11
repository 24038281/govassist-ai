"use strict";

const landingTranslations = {
  English: {
    htmlLang: "en",
    navFeatures: "Features",
    navHow: "How it works",
    navLanguage: "Language",
    eyebrow: "Friendly digital assistance",
    headingLineOne: "Welcome to your simple",
    headingLineTwo: "government website guide",
    heroDescription:
      "GovAssist AI helps elderly users ask questions, learn the steps, and navigate common Singapore digital services with more confidence.",
    languageTitle: "Choose a language to start",
    selectedLanguage: "Selected language: English",
    chooseLanguage: "Please choose a language.",
    startButton: "Get started",
    startAfterLanguage: "Please choose a language first.",
    safetyNote:
      "Do not enter NRIC, Singpass password, OTP or bank details.",
    floatAskTitle: "Ask",
    floatAskText: "Common questions",
    floatLearnTitle: "Learn",
    floatLearnText: "Step by step",
    floatDoTitle: "Do",
    floatDoText: "Anytime",
    howEyebrow: "How it works",
    howTitle: "Ask, learn, then try it yourself.",
    stepAskTitle: "Ask a question",
    stepAskText:
      "Choose a guided task or type what you need help with.",
    stepLearnTitle: "Learn the steps",
    stepLearnText:
      "Read a simple answer in your selected language.",
    stepDoTitle: "Do it anytime",
    stepDoText:
      "Use the guidance when you are ready to visit the official site.",
    featuresEyebrow: "Built for seniors",
    featuresTitle: "Simple support, familiar controls.",
    featureReadableTitle: "Large readable interface",
    featureReadableText:
      "Text sizing, high contrast and clear buttons stay available on the assistant page.",
    featureGuidedTitle: "Guided service choices",
    featureGuidedText:
      "Pick CPF, HDB, HealthHub, CHAS, Singpass and more before asking.",
    featurePrivacyTitle: "Privacy reminders",
    featurePrivacyText:
      "The assistant reminds users not to share sensitive personal details.",
    videoGuideTitle: "Watch a Step-by-Step Guide",
    videoGuideDescription:
      "Learn how to use GovAssist AI by following this short video tutorial.",
    videoLanguageLabel: "Choose tutorial video language",
    footerTitle: "GovAssist AI CA Project",
    footerText:
      "This is a student project and is not an official Singapore Government service."
  },

  "Simplified Chinese": {
    htmlLang: "zh-Hans",
    navFeatures: "功能",
    navHow: "使用方式",
    navLanguage: "语言",
    eyebrow: "亲切的数码协助",
    headingLineOne: "欢迎使用简单的",
    headingLineTwo: "政府网站指南",
    heroDescription:
      "GovAssist AI 帮助年长者提出问题、了解步骤，并更有信心地使用新加坡常见的数码政府服务。",
    languageTitle: "请选择语言开始",
    selectedLanguage: "已选择语言：简体中文",
    chooseLanguage: "请选择一种语言。",
    startButton: "开始",
    startAfterLanguage: "请先选择一种语言。",
    safetyNote:
      "请勿输入 NRIC、Singpass 密码、OTP 或银行资料。",
    floatAskTitle: "提问",
    floatAskText: "常见问题",
    floatLearnTitle: "学习",
    floatLearnText: "一步一步",
    floatDoTitle: "使用",
    floatDoText: "随时查看",
    howEyebrow: "使用方式",
    howTitle: "先提问，再学习步骤，然后自己尝试。",
    stepAskTitle: "提出问题",
    stepAskText: "选择常见任务，或输入您需要的帮助。",
    stepLearnTitle: "了解步骤",
    stepLearnText: "用您选择的语言阅读简单回答。",
    stepDoTitle: "随时使用",
    stepDoText: "准备好访问官方网站时，可参考这些指引。",
    featuresEyebrow: "为年长者设计",
    featuresTitle: "简单支持，熟悉的控制方式。",
    featureReadableTitle: "清楚易读的界面",
    featureReadableText:
      "在助手页面可使用文字大小、高对比度和清楚按钮。",
    featureGuidedTitle: "引导式服务选择",
    featureGuidedText:
      "提问前可先选择 CPF、HDB、HealthHub、CHAS、Singpass 等服务。",
    featurePrivacyTitle: "隐私提醒",
    featurePrivacyText:
      "助手会提醒用户不要分享敏感个人资料。",
    videoGuideTitle: "观看分步指南",
    videoGuideDescription: "通过这段简短的视频教程学习如何使用 GovAssist AI。",
    videoLanguageLabel: "选择教程视频语言",
    footerTitle: "GovAssist AI 课程项目",
    footerText:
      "这是学生项目，并非新加坡政府官方服务。"
  },

  "Bahasa Melayu": {
    htmlLang: "ms",
    navFeatures: "Ciri",
    navHow: "Cara guna",
    navLanguage: "Bahasa",
    eyebrow: "Bantuan digital yang mesra",
    headingLineOne: "Selamat datang ke panduan",
    headingLineTwo: "laman pemerintah yang mudah",
    heroDescription:
      "GovAssist AI membantu warga emas bertanya soalan, mempelajari langkah-langkah dan menggunakan perkhidmatan digital Singapura dengan lebih yakin.",
    languageTitle: "Pilih bahasa untuk mula",
    selectedLanguage: "Bahasa dipilih: Bahasa Melayu",
    chooseLanguage: "Sila pilih bahasa.",
    startButton: "Mula",
    startAfterLanguage: "Sila pilih bahasa dahulu.",
    safetyNote:
      "Jangan masukkan NRIC, kata laluan Singpass, OTP atau maklumat bank.",
    floatAskTitle: "Tanya",
    floatAskText: "Soalan biasa",
    floatLearnTitle: "Belajar",
    floatLearnText: "Langkah demi langkah",
    floatDoTitle: "Buat",
    floatDoText: "Bila-bila masa",
    howEyebrow: "Cara ia berfungsi",
    howTitle: "Tanya, belajar, kemudian cuba sendiri.",
    stepAskTitle: "Tanya soalan",
    stepAskText:
      "Pilih tugas berpandu atau taip bantuan yang anda perlukan.",
    stepLearnTitle: "Belajar langkah-langkah",
    stepLearnText:
      "Baca jawapan mudah dalam bahasa pilihan anda.",
    stepDoTitle: "Buat bila-bila masa",
    stepDoText:
      "Gunakan panduan apabila anda bersedia melawat laman rasmi.",
    featuresEyebrow: "Dibina untuk warga emas",
    featuresTitle: "Sokongan mudah, kawalan biasa.",
    featureReadableTitle: "Antara muka mudah dibaca",
    featureReadableText:
      "Saiz teks, kontras tinggi dan butang jelas tersedia di halaman pembantu.",
    featureGuidedTitle: "Pilihan perkhidmatan berpandu",
    featureGuidedText:
      "Pilih CPF, HDB, HealthHub, CHAS, Singpass dan lain-lain sebelum bertanya.",
    featurePrivacyTitle: "Peringatan privasi",
    featurePrivacyText:
      "Pembantu mengingatkan pengguna supaya tidak berkongsi butiran peribadi sensitif.",
    videoGuideTitle: "Tonton Panduan Langkah demi Langkah",
    videoGuideDescription:
      "Pelajari cara menggunakan GovAssist AI dengan mengikuti video tutorial ringkas ini.",
    videoLanguageLabel: "Pilih bahasa video panduan",
    footerTitle: "Projek CA GovAssist AI",
    footerText:
      "Ini ialah projek pelajar dan bukan perkhidmatan rasmi Pemerintah Singapura."
  },

  Tamil: {
    htmlLang: "ta",
    navFeatures: "அம்சங்கள்",
    navHow: "எப்படி வேலை செய்கிறது",
    navLanguage: "மொழி",
    eyebrow: "நண்பான டிஜிட்டல் உதவி",
    headingLineOne: "உங்கள் எளிய",
    headingLineTwo: "அரசு இணையதள வழிகாட்டிக்கு வரவேற்கிறோம்",
    heroDescription:
      "GovAssist AI முதியவர்கள் கேள்வி கேட்க, படிகளை அறிய, சிங்கப்பூர் டிஜிட்டல் அரசு சேவைகளை நம்பிக்கையுடன் பயன்படுத்த உதவுகிறது.",
    languageTitle: "தொடங்க ஒரு மொழியைத் தேர்ந்தெடுக்கவும்",
    selectedLanguage: "தேர்ந்தெடுக்கப்பட்ட மொழி: தமிழ்",
    chooseLanguage: "ஒரு மொழியைத் தேர்ந்தெடுக்கவும்.",
    startButton: "தொடங்குங்கள்",
    startAfterLanguage: "முதலில் ஒரு மொழியைத் தேர்ந்தெடுக்கவும்.",
    safetyNote:
      "NRIC, Singpass கடவுச்சொல், OTP அல்லது வங்கி விவரங்களை உள்ளிட வேண்டாம்.",
    floatAskTitle: "கேள்",
    floatAskText: "பொதுவான கேள்விகள்",
    floatLearnTitle: "கற்று",
    floatLearnText: "படிப்படியாக",
    floatDoTitle: "செய்",
    floatDoText: "எப்போதும்",
    howEyebrow: "இது எப்படி வேலை செய்கிறது",
    howTitle: "கேளுங்கள், கற்றுக்கொள்ளுங்கள், பின்னர் நீங்களே முயற்சிக்கவும்.",
    stepAskTitle: "கேள்வி கேளுங்கள்",
    stepAskText:
      "வழிகாட்டப்பட்ட பணியைத் தேர்ந்தெடுக்கவும் அல்லது உங்களுக்கு தேவையான உதவியை தட்டச்சு செய்யவும்.",
    stepLearnTitle: "படிகளை அறிக",
    stepLearnText:
      "நீங்கள் தேர்ந்தெடுத்த மொழியில் எளிய பதிலைப் படிக்கவும்.",
    stepDoTitle: "எப்போதும் பயன்படுத்தவும்",
    stepDoText:
      "அதிகாரப்பூர்வ இணையதளத்திற்கு செல்ல தயாராக இருக்கும் போது இந்த வழிகாட்டியைப் பயன்படுத்தவும்.",
    featuresEyebrow: "முதியவர்களுக்காக உருவாக்கப்பட்டது",
    featuresTitle: "எளிய ஆதரவு, பழக்கமான கட்டுப்பாடுகள்.",
    featureReadableTitle: "படிக்க எளிதான இடைமுகம்",
    featureReadableText:
      "உரை அளவு, அதிக மாறுபாடு மற்றும் தெளிவான பொத்தான்கள் உதவி பக்கத்தில் இருக்கும்.",
    featureGuidedTitle: "வழிகாட்டப்பட்ட சேவை தேர்வுகள்",
    featureGuidedText:
      "கேட்பதற்கு முன் CPF, HDB, HealthHub, CHAS, Singpass மற்றும் பல சேவைகளைத் தேர்ந்தெடுக்கவும்.",
    featurePrivacyTitle: "தனியுரிமை நினைவூட்டல்கள்",
    featurePrivacyText:
      "உணர்வுபூர்வமான தனிப்பட்ட விவரங்களை பகிர வேண்டாம் என்று உதவியாளர் நினைவூட்டும்.",
    videoGuideTitle: "படிப்படியான வழிகாட்டியைப் பாருங்கள்",
    videoGuideDescription:
      "இந்தக் குறுகிய காணொளி வழிகாட்டியைப் பின்பற்றி GovAssist AI-ஐ எவ்வாறு பயன்படுத்துவது என்பதை அறியுங்கள்.",
    videoLanguageLabel: "வழிகாட்டி காணொளியின் மொழியைத் தேர்ந்தெடுக்கவும்",
    footerTitle: "GovAssist AI CA திட்டம்",
    footerText:
      "இது மாணவர் திட்டம்; அதிகாரப்பூர்வ சிங்கப்பூர் அரசு சேவை அல்ல."
  }
};

const landingLanguageButtons = document.querySelectorAll(
  "[data-landing-language]"
);
const landingStartButton = document.getElementById(
  "landingStartButton"
);
const landingSelectedLanguage = document.getElementById(
  "landingSelectedLanguage"
);
const landingIncreaseText = document.getElementById("landingIncreaseText");
const landingDecreaseText = document.getElementById("landingDecreaseText");
const landingResetText = document.getElementById("landingResetText");
const landingTextSize = document.getElementById("landingTextSize");
const landingReadAloud = document.getElementById("landingReadAloud");
const landingPauseReadAloud = document.getElementById(
  "landingPauseReadAloud"
);
const landingContinueReadAloud = document.getElementById(
  "landingContinueReadAloud"
);
const landingStopReadAloud = document.getElementById("landingStopReadAloud");
const landingPageContent = document.querySelector(".page-content");
const landingCarouselSlides = document.querySelectorAll(
  ".landing-carousel-slide"
);
const landingAccessibilityPanel = document.querySelector(
  ".landing-accessibility-panel"
);
const landingMobileQuery = window.matchMedia("(max-width: 560px)");
const videoLanguageTabs = Array.from(
  document.querySelectorAll("[data-video-language]")
);
const guideVideoFrame = document.getElementById("guideVideoFrame");
const videoLanguageStatus = document.getElementById("videoLanguageStatus");

const guideVideos = {
  English: {
    url: "https://share.synthesia.io/embeds/videos/c1646c0a-4f10-49a1-a0da-fef4b2da27f3",
    status: "Showing the English guide video"
  },
  "Simplified Chinese": {
    url: "https://share.synthesia.io/embeds/videos/e7a445a4-45ef-47a0-b4c5-09af34b4ade2",
    status: "正在显示简体中文指南视频"
  },
  "Bahasa Melayu": {
    url: "https://share.synthesia.io/embeds/videos/35302657-6d36-41db-9a53-3e119799111a",
    status: "Menunjukkan video panduan Bahasa Melayu"
  },
  Tamil: {
    url: "https://share.synthesia.io/embeds/videos/26fb6024-6934-4802-be26-a9e72b53d8a9",
    status: "தமிழ் வழிகாட்டி காணொளி காட்டப்படுகிறது"
  }
};

let selectedLandingLanguage =
  localStorage.getItem("govassistLanguage") || "";
const landingFontScaleKey = "govassistFontScale";
const landingLegacyFontSizeKey = "govassistFontSize";
const landingBaseFontPx = 18;
const landingMinFontScale = 50;
const landingMaxFontScale = 150;
const landingDefaultFontScale = 100;

function getLandingStoredFontScale() {
  const storedScale = Number(localStorage.getItem(landingFontScaleKey));

  if (Number.isFinite(storedScale) && storedScale > 0) {
    return storedScale;
  }

  const legacySize = Number(localStorage.getItem(landingLegacyFontSizeKey));

  if (Number.isFinite(legacySize) && legacySize > 0) {
    return Math.round((legacySize / landingBaseFontPx) * 100);
  }

  return landingDefaultFontScale;
}

let landingFontScale = getLandingStoredFontScale();

if (!landingTranslations[selectedLandingLanguage]) {
  selectedLandingLanguage = "";
}

function syncLandingAccessibilityPanel() {
  if (!landingAccessibilityPanel) {
    return;
  }

  landingAccessibilityPanel.open = !landingMobileQuery.matches;
}

function getLandingText() {
  return (
    landingTranslations[selectedLandingLanguage] ||
    landingTranslations.English
  );
}

function applyLandingFontSize() {
  const clampedSize = Math.min(
    landingMaxFontScale,
    Math.max(landingMinFontScale, landingFontScale)
  );

  landingFontScale = clampedSize;
  document.documentElement.style.setProperty(
    "--user-font-size",
    `${(landingBaseFontPx * clampedSize) / 100}px`
  );
  landingPageContent?.style.setProperty(
    "--page-content-scale",
    String(clampedSize)
  );
  localStorage.setItem(landingFontScaleKey, String(clampedSize));
  localStorage.removeItem(landingLegacyFontSizeKey);

  if (landingTextSize) {
    landingTextSize.textContent = `Text Size: ${clampedSize}%`;
  }

  landingIncreaseText.disabled = clampedSize >= landingMaxFontScale;
  landingDecreaseText.disabled = clampedSize <= landingMinFontScale;
}

function canUseLandingSpeech() {
  return "speechSynthesis" in window;
}

function setLandingSpeechControlsVisible(visible) {
  landingPauseReadAloud.hidden = !visible;
  landingContinueReadAloud.hidden = !visible;
  landingStopReadAloud.hidden = !visible;
}

function hideLandingSpeechControls() {
  setLandingSpeechControlsVisible(false);
}

function readLandingIntro() {
  if (!canUseLandingSpeech()) {
    return;
  }

  const parts = [
    document.getElementById("landingHeading")?.innerText,
    document.querySelector("[data-landing-i18n='heroDescription']")?.innerText,
    document.querySelector(".landing-panel-title")?.innerText,
    landingSelectedLanguage?.innerText,
    landingStartButton?.innerText,
    document.querySelector(".landing-safety-note")?.innerText
  ].filter(Boolean);

  if (!parts.length) {
    return;
  }

  setLandingSpeechControlsVisible(true);
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(parts.join(". "));
  utterance.rate = 0.88;
  utterance.lang = document.documentElement.lang || "en-US";
  utterance.addEventListener("end", hideLandingSpeechControls);
  utterance.addEventListener("error", hideLandingSpeechControls);
  window.speechSynthesis.speak(utterance);
}

function updateLandingStartButton() {
  const text = getLandingText();

  if (selectedLandingLanguage) {
    landingStartButton.href =
      `chat.html?language=${encodeURIComponent(selectedLandingLanguage)}`;
    landingStartButton.classList.remove("is-disabled");
    landingStartButton.removeAttribute("aria-disabled");
    landingSelectedLanguage.textContent = text.selectedLanguage;
    return;
  }

  landingStartButton.href = "#language";
  landingStartButton.classList.add("is-disabled");
  landingStartButton.setAttribute("aria-disabled", "true");
  landingSelectedLanguage.textContent = text.chooseLanguage;
}

function applyLandingLanguage() {
  const text = getLandingText();

  document.documentElement.lang = text.htmlLang;

  document
    .querySelectorAll("[data-landing-i18n]")
    .forEach(element => {
      const key = element.dataset.landingI18n;
      element.textContent =
        text[key] ?? landingTranslations.English[key] ?? "";
    });

  document
    .querySelectorAll("[data-landing-i18n-aria-label]")
    .forEach(element => {
      const key = element.dataset.landingI18nAriaLabel;
      element.setAttribute(
        "aria-label",
        text[key] ?? landingTranslations.English[key] ?? ""
      );
    });

  landingLanguageButtons.forEach(button => {
    const selected =
      button.dataset.landingLanguage === selectedLandingLanguage;

    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  updateLandingStartButton();
}

function selectGuideVideo(language, moveFocus = false) {
  const video = guideVideos[language] || guideVideos.English;

  videoLanguageTabs.forEach(tab => {
    const selected = tab.dataset.videoLanguage === language;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;

    if (selected && moveFocus) {
      tab.focus();
    }
  });

  if (guideVideoFrame && guideVideoFrame.src !== video.url) {
    guideVideoFrame.src = video.url;
  }

  if (videoLanguageStatus) {
    videoLanguageStatus.textContent = video.status;
  }
}

videoLanguageTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    selectGuideVideo(tab.dataset.videoLanguage);
  });

  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % videoLanguageTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + videoLanguageTabs.length) % videoLanguageTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = videoLanguageTabs.length - 1;
    }

    selectGuideVideo(
      videoLanguageTabs[nextIndex].dataset.videoLanguage,
      true
    );
  });
});


function startLandingCarousel() {
  if (landingCarouselSlides.length <= 1) {
    return;
  }

  let activeSlideIndex = 0;

  landingCarouselSlides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === activeSlideIndex);
  });

  window.setInterval(() => {
    landingCarouselSlides[activeSlideIndex].classList.remove("is-active");
    activeSlideIndex = (activeSlideIndex + 1) % landingCarouselSlides.length;
    landingCarouselSlides[activeSlideIndex].classList.add("is-active");
  }, 2000);
}

landingIncreaseText?.addEventListener("click", () => {
  landingFontScale = Math.min(
    landingFontScale + 10,
    landingMaxFontScale
  );
  applyLandingFontSize();
});

landingDecreaseText?.addEventListener("click", () => {
  landingFontScale = Math.max(
    landingFontScale - 10,
    landingMinFontScale
  );
  applyLandingFontSize();
});

landingResetText?.addEventListener("click", () => {
  landingFontScale = landingDefaultFontScale;
  applyLandingFontSize();
});

landingReadAloud?.addEventListener("click", readLandingIntro);

landingPauseReadAloud?.addEventListener("click", () => {
  if (canUseLandingSpeech() && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
});

landingContinueReadAloud?.addEventListener("click", () => {
  if (canUseLandingSpeech() && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
});

landingStopReadAloud?.addEventListener("click", () => {
  if (!canUseLandingSpeech()) {
    return;
  }

  window.speechSynthesis.cancel();
  hideLandingSpeechControls();
});

landingLanguageButtons.forEach(button => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    selectedLandingLanguage = button.dataset.landingLanguage;

    localStorage.setItem(
      "govassistLanguage",
      selectedLandingLanguage
    );

    applyLandingLanguage();
    selectGuideVideo(selectedLandingLanguage);
  });
});

landingStartButton.addEventListener("click", event => {
  if (selectedLandingLanguage) {
    return;
  }

  event.preventDefault();
  landingSelectedLanguage.textContent =
    landingTranslations.English.startAfterLanguage;
  document.getElementById("language").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
  landingLanguageButtons[0]?.focus({ preventScroll: true });
});

landingMobileQuery.addEventListener(
  "change",
  syncLandingAccessibilityPanel
);

syncLandingAccessibilityPanel();
applyLandingLanguage();
selectGuideVideo(
  guideVideos[selectedLandingLanguage]
    ? selectedLandingLanguage
    : "English"
);
applyLandingFontSize();
hideLandingSpeechControls();
startLandingCarousel();
