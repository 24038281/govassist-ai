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

let selectedLandingLanguage =
  localStorage.getItem("govassistLanguage") || "";

if (!landingTranslations[selectedLandingLanguage]) {
  selectedLandingLanguage = "";
}

function getLandingText() {
  return (
    landingTranslations[selectedLandingLanguage] ||
    landingTranslations.English
  );
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

  landingLanguageButtons.forEach(button => {
    const selected =
      button.dataset.landingLanguage === selectedLandingLanguage;

    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  updateLandingStartButton();
}

landingLanguageButtons.forEach(button => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    selectedLandingLanguage = button.dataset.landingLanguage;

    localStorage.setItem(
      "govassistLanguage",
      selectedLandingLanguage
    );

    applyLandingLanguage();
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

applyLandingLanguage();
