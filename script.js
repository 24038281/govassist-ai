"use strict";

const N8N_CHAT_URL =
  "https://n8ngc.codeblazar.org/webhook/156199ce-4c33-498e-bae1-04cc07dc6125/chat";

const FEEDBACK_URL =
  "https://n8ngc.codeblazar.org/form/f8d4b95d-9430-4e4b-b167-53df7a2af6aa";


/* Guided task data
   These are only button labels and prepared questions.
   The actual answers still come from n8n and Google Sheets. */

const guidedServiceOptions = {
  Singpass: [
    {
      id: "singpass-login",
      labels: {
        English: "Log in to Singpass",
        "Simplified Chinese": "登录 Singpass",
        "Bahasa Melayu": "Log masuk ke Singpass",
        Tamil: "Singpass-இல் உள்நுழையவும்"
      },
      prompt: "How do I log in to Singpass?"
    },
    {
      id: "singpass-password",
      labels: {
        English: "Reset my Singpass password",
        "Simplified Chinese": "重设我的 Singpass 密码",
        "Bahasa Melayu": "Tetapkan semula kata laluan Singpass saya",
        Tamil: "எனது Singpass கடவுச்சொல்லை மீட்டமைக்கவும்"
      },
      prompt: "How do I reset my Singpass password?"
    },
    {
      id: "singpass-mobile-number",
      labels: {
        English: "Update my mobile number",
        "Simplified Chinese": "更新我的手机号码",
        "Bahasa Melayu": "Kemas kini nombor telefon bimbit saya",
        Tamil: "எனது கைப்பேசி எண்ணைப் புதுப்பிக்கவும்"
      },
      prompt: "How do I update my mobile number in Singpass?"
    },
    {
      id: "singpass-security",
      labels: {
        English: "Unexpected login request",
        "Simplified Chinese": "收到意外的登录请求",
        "Bahasa Melayu": "Permintaan log masuk yang tidak dijangka",
        Tamil: "எதிர்பாராத உள்நுழைவு கோரிக்கை"
      },
      prompt:
        "What should I do if I receive an unexpected Singpass login request?"
    }
  ],

  CPF: [
    {
      id: "cpf-balance",
      labels: {
        English: "Check my CPF balance",
        "Simplified Chinese": "查看我的 CPF 余额",
        "Bahasa Melayu": "Semak baki CPF saya",
        Tamil: "எனது CPF இருப்பைச் சரிபார்க்கவும்"
      },
      prompt: "How do I check my CPF balance?"
    },
    {
      id: "cpf-contributions",
      labels: {
        English: "View my CPF contributions",
        "Simplified Chinese": "查看我的 CPF 缴交记录",
        "Bahasa Melayu": "Lihat caruman CPF saya",
        Tamil: "எனது CPF பங்களிப்புகளைப் பார்க்கவும்"
      },
      prompt: "How do I view my CPF contributions?"
    },
    {
      id: "cpf-accounts",
      labels: {
        English: "Understand my CPF accounts",
        "Simplified Chinese": "了解我的 CPF 账户",
        "Bahasa Melayu": "Fahami akaun CPF saya",
        Tamil: "எனது CPF கணக்குகளைப் புரிந்துகொள்ளவும்"
      },
      prompt:
        "What are the different CPF accounts and what are they used for?"
    }
  ],

  HDB: [
    {
      id: "hdb-loan",
      labels: {
        English: "View my HDB loan information",
        "Simplified Chinese": "查看我的 HDB 贷款资料",
        "Bahasa Melayu": "Lihat maklumat pinjaman HDB saya",
        Tamil: "எனது HDB கடன் தகவலைப் பார்க்கவும்"
      },
      prompt: "How do I view my HDB loan information?"
    },
    {
      id: "hdb-application",
      labels: {
        English: "Check my housing application",
        "Simplified Chinese": "查看我的住房申请",
        "Bahasa Melayu": "Semak permohonan perumahan saya",
        Tamil: "எனது வீட்டு விண்ணப்பத்தைச் சரிபார்க்கவும்"
      },
      prompt: "How do I check my HDB housing application?"
    },
    {
      id: "hdb-assistance",
      labels: {
        English: "Find housing assistance",
        "Simplified Chinese": "寻找住房援助",
        "Bahasa Melayu": "Cari bantuan perumahan",
        Tamil: "வீட்டு உதவியைத் தேடவும்"
      },
      prompt: "What housing assistance is available through HDB?"
    }
  ],

  HealthHub: [
    {
      id: "healthhub-appointments",
      labels: {
        English: "View my appointments",
        "Simplified Chinese": "查看我的预约",
        "Bahasa Melayu": "Lihat janji temu saya",
        Tamil: "எனது மருத்துவ சந்திப்புகளைப் பார்க்கவும்"
      },
      prompt: "How do I view my appointments on HealthHub?"
    },
    {
      id: "healthhub-records",
      labels: {
        English: "View my health records",
        "Simplified Chinese": "查看我的健康记录",
        "Bahasa Melayu": "Lihat rekod kesihatan saya",
        Tamil: "எனது சுகாதாரப் பதிவுகளைப் பார்க்கவும்"
      },
      prompt: "How do I view my health records on HealthHub?"
    },
    {
      id: "healthhub-access",
      labels: {
        English: "Get help accessing HealthHub",
        "Simplified Chinese": "获取 HealthHub 登录帮助",
        "Bahasa Melayu": "Dapatkan bantuan mengakses HealthHub",
        Tamil: "HealthHub-ஐ அணுக உதவி பெறவும்"
      },
      prompt: "I need help accessing HealthHub. What should I do?"
    }
  ],

  CHAS: [
    {
      id: "chas-apply",
      labels: {
        English: "Apply for CHAS",
        "Simplified Chinese": "申请 CHAS",
        "Bahasa Melayu": "Mohon CHAS",
        Tamil: "CHAS-க்கு விண்ணப்பிக்கவும்"
      },
      prompt: "How do I apply for CHAS?"
    },
    {
      id: "chas-eligibility",
      labels: {
        English: "Check if I qualify for CHAS",
        "Simplified Chinese": "查看我是否符合 CHAS 资格",
        "Bahasa Melayu": "Semak sama ada saya layak untuk CHAS",
        Tamil: "நான் CHAS-க்கு தகுதியானவரா என்று சரிபார்க்கவும்"
      },
      prompt: "How do I know if I qualify for CHAS?"
    },
    {
      id: "chas-status",
      labels: {
        English: "Check my CHAS application status",
        "Simplified Chinese": "查看我的 CHAS 申请状态",
        "Bahasa Melayu": "Semak status permohonan CHAS saya",
        Tamil: "எனது CHAS விண்ணப்ப நிலையைச் சரிபார்க்கவும்"
      },
      prompt: "How do I check my CHAS application status?"
    }
  ],

  "CDC Vouchers": [
    {
      id: "cdc-claim",
      labels: {
        English: "Claim CDC Vouchers",
        "Simplified Chinese": "领取 CDC 邻里购物券",
        "Bahasa Melayu": "Tuntut Baucar CDC",
        Tamil: "CDC பற்றுச்சீட்டுகளைப் பெறவும்"
      },
      prompt: "How do I claim CDC Vouchers?"
    },
    {
      id: "cdc-use",
      labels: {
        English: "Use my CDC Vouchers",
        "Simplified Chinese": "使用我的 CDC 邻里购物券",
        "Bahasa Melayu": "Gunakan Baucar CDC saya",
        Tamil: "எனது CDC பற்றுச்சீட்டுகளைப் பயன்படுத்தவும்"
      },
      prompt: "How do I use my CDC Vouchers?"
    },
    {
      id: "cdc-link",
      labels: {
        English: "Retrieve my voucher link",
        "Simplified Chinese": "找回我的购物券链接",
        "Bahasa Melayu": "Dapatkan semula pautan baucar saya",
        Tamil: "எனது பற்றுச்சீட்டு இணைப்பை மீட்டெடுக்கவும்"
      },
      prompt: "How do I retrieve my CDC Voucher link?"
    }
  ],

  LifeSG: [
    {
      id: "lifesg-use",
      labels: {
        English: "Learn how to use LifeSG",
        "Simplified Chinese": "了解如何使用 LifeSG",
        "Bahasa Melayu": "Ketahui cara menggunakan LifeSG",
        Tamil: "LifeSG-ஐ எவ்வாறு பயன்படுத்துவது என்பதை அறியவும்"
      },
      prompt: "What can I do on LifeSG and how do I use it?"
    },
    {
      id: "lifesg-updates",
      labels: {
        English: "Check my application updates",
        "Simplified Chinese": "查看我的申请进度",
        "Bahasa Melayu": "Semak kemas kini permohonan saya",
        Tamil: "எனது விண்ணப்பப் புதுப்பிப்புகளைச் சரிபார்க்கவும்"
      },
      prompt: "How do I check my application updates on LifeSG?"
    },
    {
      id: "lifesg-benefits",
      labels: {
        English: "Find benefits and services",
        "Simplified Chinese": "寻找福利和政府服务",
        "Bahasa Melayu": "Cari manfaat dan perkhidmatan",
        Tamil: "நலன்கள் மற்றும் சேவைகளைக் கண்டறியவும்"
      },
      prompt: "How do I find government benefits and services in LifeSG?"
    }
  ],

  "Financial Assistance": [
    {
      id: "financial-options",
      labels: {
        English: "Find financial assistance",
        "Simplified Chinese": "寻找经济援助",
        "Bahasa Melayu": "Cari bantuan kewangan",
        Tamil: "நிதி உதவியைத் தேடவும்"
      },
      prompt:
        "What financial assistance is available for household expenses?"
    },
    {
      id: "financial-comcare",
      labels: {
        English: "Apply for ComCare assistance",
        "Simplified Chinese": "申请 ComCare 援助",
        "Bahasa Melayu": "Mohon bantuan ComCare",
        Tamil: "ComCare உதவிக்கு விண்ணப்பிக்கவும்"
      },
      prompt: "How do I apply for ComCare financial assistance?"
    },
    {
      id: "financial-daily-expenses",
      labels: {
        English: "Get help with daily expenses",
        "Simplified Chinese": "获取日常开销援助",
        "Bahasa Melayu": "Dapatkan bantuan untuk perbelanjaan harian",
        Tamil: "தினசரி செலவுகளுக்கு உதவி பெறவும்"
      },
      prompt:
        "Where can I get financial help with daily living expenses in Singapore?"
    }
  ]
};


const uiText = {
  English: {
    selectedLanguage: "Selected language: English",
    loading: "GovAssist is preparing a simple answer...",
    guidedLabel: "Guided help",
    guidedTitle: service =>
      `What would you like help with for ${service}?`,
    guidedDescription:
      "Select one option. GovAssist will show the steps, and you can type more questions afterwards.",
    close: "Close",
    chooseAnother: "Choose another service",
    ownQuestion: "Type my own question",
    followUpTitle: "What would you like to do next?",
    moreHelp: service =>
      service ? `More help with ${service}` : "More guided help",
    welcome:
      "Hello! I’m GovAssist AI. Please choose a service or type your question. Do not share your NRIC, password, OTP or banking details."
  },

  "Simplified Chinese": {
    selectedLanguage: "已选择语言：简体中文",
    loading: "GovAssist 正在准备简单易懂的回答……",
    guidedLabel: "引导式帮助",
    guidedTitle: service => `您需要哪一项 ${service} 帮助？`,
    guidedDescription:
      "请选择一个选项。GovAssist 会显示步骤，之后您仍可继续输入问题。",
    close: "关闭",
    chooseAnother: "选择其他服务",
    ownQuestion: "输入我自己的问题",
    followUpTitle: "接下来您想做什么？",
    moreHelp: service =>
      service ? `更多 ${service} 帮助` : "更多引导式帮助",
    welcome:
      "您好！我是 GovAssist AI。请选择一项服务或输入您的问题。请勿分享身份证号码、密码、一次性密码或银行资料。"
  },

  "Bahasa Melayu": {
    selectedLanguage: "Bahasa dipilih: Bahasa Melayu",
    loading: "GovAssist sedang menyediakan jawapan yang mudah...",
    guidedLabel: "Bantuan berpandu",
    guidedTitle: service =>
      `Apakah bantuan ${service} yang anda perlukan?`,
    guidedDescription:
      "Pilih satu pilihan. GovAssist akan menunjukkan langkah-langkah dan anda masih boleh menaip soalan selepas itu.",
    close: "Tutup",
    chooseAnother: "Pilih perkhidmatan lain",
    ownQuestion: "Taip soalan saya sendiri",
    followUpTitle: "Apakah yang anda mahu lakukan seterusnya?",
    moreHelp: service =>
      service ? `Lebih banyak bantuan ${service}` : "Lebih banyak bantuan berpandu",
    welcome:
      "Helo! Saya GovAssist AI. Sila pilih perkhidmatan atau taip soalan anda. Jangan kongsi NRIC, kata laluan, OTP atau maklumat bank."
  },

  Tamil: {
    selectedLanguage: "தேர்ந்தெடுக்கப்பட்ட மொழி: தமிழ்",
    loading: "GovAssist எளிய பதிலைத் தயாரிக்கிறது...",
    guidedLabel: "வழிகாட்டப்பட்ட உதவி",
    guidedTitle: service =>
      `${service} தொடர்பாக உங்களுக்கு என்ன உதவி தேவை?`,
    guidedDescription:
      "ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும். GovAssist படிகளை காட்டும்; பின்னர் மேலும் கேள்விகளை தட்டச்சு செய்யலாம்.",
    close: "மூடு",
    chooseAnother: "மற்றொரு சேவையைத் தேர்ந்தெடுக்கவும்",
    ownQuestion: "என் சொந்த கேள்வியைத் தட்டச்சு செய்கிறேன்",
    followUpTitle: "அடுத்து என்ன செய்ய விரும்புகிறீர்கள்?",
    moreHelp: service =>
      service ? `${service} குறித்த மேலும் உதவி` : "மேலும் வழிகாட்டப்பட்ட உதவி",
    welcome:
      "வணக்கம்! நான் GovAssist AI. ஒரு சேவையைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் கேள்வியைத் தட்டச்சு செய்யவும். NRIC, கடவுச்சொல், OTP அல்லது வங்கி விவரங்களை பகிர வேண்டாம்."
  }
};


const translations = {
  English: {
    htmlLang: "en",
    selectedLanguage: "Selected language: English",
    languagePrompt: "Please choose a language to continue.",
    loading: "GovAssist is preparing a simple answer...",
    guidedLabel: "Step 2",
    guidedTitle: service => `Pick a question for ${service}`,
    guidedDescription:
      "Choose a common question, or type your own question about this service.",
    close: "Close",
    chooseAnother: "Choose another service",
    ownQuestion: "Type my own question",
    followUpTitle: "What would you like to do next?",
    moreHelp: service =>
      service ? `More help with ${service}` : "More guided help",
    welcome:
      "Hello! I'm GovAssist AI. Please choose a service or type your question. Do not share your NRIC, password, OTP or banking details.",
    page: {
      documentTitle: "GovAssist AI",
      brandHomeAria: "GovAssist AI home",
      brandDescription: "Simple guidance for Singapore digital services",
      mainNavAria: "Main navigation",
      navHome: "Home",
      navLanguage: "Language",
      navServices: "Services",
      navChat: "Chat",
      heroLabel: "Start here",
      heroTitle:
        "Choose your language first. Then GovAssist will guide you step by step.",
      heroDescription:
        "Get simple help for common Singapore government websites without sharing private details.",
      heroReassurance:
        "Do not enter NRIC, passwords, OTPs or bank details.",
      assistantIntroTitle: "I can help with government websites.",
      assistantIntroDescription:
        "First choose a service. Then pick a common question or type your own question.",
      assistantIntroButton: "Get started",
      introPickService: "Pick service",
      introChooseQuestion: "Choose or type",
      introReadAnswer: "Read answer",
      heroImageAlt: "Two elderly people happily using a phone together",
      journeyPreviewAria: "How GovAssist works",
      journeyAskTitle: "Ask a question",
      journeyAskDescription:
        "Choose a common task or type your own question.",
      journeyLearnTitle: "Learn the steps",
      journeyLearnDescription:
        "Read a clear answer in your selected language.",
      journeyDoTitle: "Do it yourself anytime",
      journeyDoDescription: "Use the guidance when you are ready.",
      accessibilityLabel: "Accessibility",
      accessibilityTitle: "Make the page easier to use",
      largerText: "Larger Text",
      smallerText: "Smaller Text",
      resetText: "Reset Text",
      highContrast: "High Contrast",
      readAloud: "Read Aloud",
      languageLabel: "First step",
      languageTitle: "Choose your language",
      languageDescription:
        "GovAssist will use this language for the conversation.",
      languagePrompt: "Please choose a language to continue.",
      servicesLabel: "Guided services",
      servicesTitle: "Pick a service",
      servicesDescription:
        "Choose the government service you need help with.",
      chooseAnotherServiceBack: "← Choose another service",
      backToStart: "Back to Start",
      backToServices: "Back to Services",
      backToQuestions: "Back to Questions",
      chatLabel: "Step 3",
      chatTitle: "Ask GovAssist AI",
      chatDescription:
        "Ask about the service you picked. Read the answer here.",
      newConversation: "New Conversation",
      privacyAria: "Privacy reminder",
      privacyTitle: "Protect your information",
      privacyDescription:
        "Please do not enter your NRIC, Singpass password, OTP, bank details or card details.",
      chatMessagesAria: "GovAssist conversation",
      chatInputLabel: "Type your question",
      chatInputPlaceholder: "For example: How do I apply for CHAS?",
      voiceInput: "Speak",
      send: "Send",
      inputHelp:
        "Press Speak to use your voice. Press Enter to send. Press Shift + Enter for a new line.",
      feedbackTitle: "Was this answer helpful?",
      feedbackDescription:
        "Your feedback helps us make GovAssist clearer and easier for elderly users.",
      feedbackYes: "Yes, helpful",
      feedbackPartly: "Partly helpful",
      feedbackNo: "Not helpful",
      feedbackDetailed: "Give Detailed Feedback",
      safetyLabel: "Safety reminder",
      safetyTitle: "Your safety matters",
      safetyDescriptionOne:
        "GovAssist AI will never ask for your NRIC, Singpass password, OTP, bank details or card information.",
      safetyDescriptionTwo:
        "GovAssist provides general guidance only. Always confirm important steps on the official government website.",
      footerTitle: "GovAssist AI CA Project",
      footerDescription:
        "This is a student project and is not an official Singapore Government service."
    },
    serviceDescriptions: {
      CPF: "CPF balances and savings",
      HDB: "Housing and flat matters",
      HealthHub: "Appointments and records",
      CHAS: "Healthcare subsidies",
      "CDC Vouchers": "Claim and use vouchers",
      LifeSG: "Benefits and services",
      Singpass: "Login and account safety",
      "Financial Assistance": "Household support schemes"
    },
    taskLabels: {
      "singpass-login": "Log in to Singpass",
      "singpass-password": "Reset my Singpass password",
      "singpass-mobile-number": "Update my mobile number",
      "singpass-security": "Unexpected login request",
      "cpf-balance": "Check my CPF balance",
      "cpf-contributions": "View my CPF contributions",
      "cpf-accounts": "Understand my CPF accounts",
      "hdb-loan": "View my HDB loan information",
      "hdb-application": "Check my housing application",
      "hdb-assistance": "Find housing assistance",
      "healthhub-appointments": "View my appointments",
      "healthhub-records": "View my health records",
      "healthhub-access": "Get help accessing HealthHub",
      "chas-apply": "Apply for CHAS",
      "chas-eligibility": "Check if I qualify for CHAS",
      "chas-status": "Check my CHAS application status",
      "cdc-claim": "Claim CDC Vouchers",
      "cdc-use": "Use my CDC Vouchers",
      "cdc-link": "Retrieve my voucher link",
      "lifesg-use": "Learn how to use LifeSG",
      "lifesg-updates": "Check my application updates",
      "lifesg-benefits": "Find benefits and services",
      "financial-options": "Find financial support options",
      "financial-comcare": "Apply for ComCare",
      "financial-daily-expenses": "Get help with daily expenses"
    },
    systemMessages: {
      n8nMissing:
        "Please paste your n8n Embedded Chat URL into script.js first.",
      sensitiveWarning:
        "For your safety, please remove sensitive information such as NRIC, OTPs, passwords, bank details or card details before continuing.",
      editMyMessage: "Edit my message",
      sendAnyway: "Send anyway",
      privacyRemoved:
        "For your safety, personal information was removed before the message was sent to GovAssist AI.",
      emptyReply: "The workflow returned an empty response.",
      replyError:
        "GovAssist could not reply just now. Please try again. If the problem continues, check the latest execution in n8n.",
      noAnswerToRead: "There is no GovAssist answer to read yet.",
      speechUnsupported:
        "Read aloud is not supported by this browser.",
      feedbackMissing:
        "Please paste your feedback Production URL into script.js first.",
      requestFailed: status => `Request failed: ${status}`,
      recoveryTitle: "GovAssist could not connect just now.",
      tryAgain: "Try Again",
      typeDifferentQuestion: "Type a different question",
      chooseAnotherService: "Choose another service",
      listenToAnswer: "Listen to answer",
      printGuide: "🖨 Print Guide",
      copyAnswer: "📋 Copy Answer",
      copySuccess: "Answer copied.",
      copyError: "Unable to copy answer.",
      pauseReading: "Pause",
      continueReading: "Continue",
      stopReading: "Stop",
      voiceInputUnsupported:
        "Voice input is not supported by this browser. Please use Chrome or Edge.",
      voiceListening: "Listening... speak now.",
      voiceListeningButton: "Listening...",
      voiceNoSpeech: "I did not hear anything. Please try again.",
      voicePermissionDenied:
        "Microphone permission was blocked. Please allow microphone access and try again."
    }
  }
};

translations["Simplified Chinese"] = {
  ...translations.English,
  htmlLang: "zh-Hans",
  selectedLanguage: "已选择语言：简体中文",
  languagePrompt: "请选择一种语言以继续。",
  loading: "GovAssist 正在准备简单易懂的回答……",
  guidedLabel: "第二步",
  guidedTitle: service => `请选择一个 ${service} 问题`,
  guidedDescription: "选择常见问题，或输入有关这项服务的问题。",
  close: "关闭",
  chooseAnother: "选择其他服务",
  ownQuestion: "输入我自己的问题",
  followUpTitle: "接下来您想做什么？",
  moreHelp: service =>
    service ? `更多 ${service} 帮助` : "更多引导式帮助",
  welcome:
    "您好！我是 GovAssist AI。请选择一项服务或输入您的问题。请勿分享 NRIC、密码、OTP 或银行资料。",
  page: {
    documentTitle: "GovAssist AI",
    brandHomeAria: "GovAssist AI 主页",
    brandDescription: "新加坡数码政府服务的简单指引",
    mainNavAria: "主导航",
    navHome: "主页",
    navLanguage: "语言",
    navServices: "服务",
    navChat: "聊天",
    heroLabel: "从这里开始",
    heroTitle: "请先选择语言。之后 GovAssist 会一步一步引导您。",
    heroDescription:
      "为常见的新加坡政府网站提供简单帮助，同时不需要分享个人资料。",
    heroReassurance:
      "请勿输入 NRIC、密码、OTP 或银行资料。",
    assistantIntroTitle: "我可以帮助您使用政府网站。",
    assistantIntroDescription:
      "请先选择一项服务。然后选择常见问题，或输入自己的问题。",
    assistantIntroButton: "开始",
    introPickService: "选择服务",
    introChooseQuestion: "选择或输入",
    introReadAnswer: "阅读回答",
    heroImageAlt: "两位年长者开心地一起使用手机",
    journeyPreviewAria: "GovAssist 如何帮助您",
    journeyAskTitle: "提出问题",
    journeyAskDescription: "选择常见任务，或输入您自己的问题。",
    journeyLearnTitle: "了解步骤",
    journeyLearnDescription: "用您选择的语言阅读清楚的回答。",
    journeyDoTitle: "随时自己完成",
    journeyDoDescription: "准备好时，就按照指引操作。",
    accessibilityLabel: "辅助功能",
    accessibilityTitle: "让页面更容易使用",
    largerText: "放大文字",
    smallerText: "缩小文字",
    resetText: "重置文字",
    highContrast: "高对比度",
    readAloud: "朗读",
    languageLabel: "第一步",
    languageTitle: "选择您的语言",
    languageDescription: "GovAssist 将在本次对话中使用此语言。",
    languagePrompt: "请选择一种语言以继续。",
    servicesLabel: "第一步",
    servicesTitle: "选择一项服务",
    servicesDescription: "请选择您需要帮助的政府服务。",
    chooseAnotherServiceBack: "← 选择其他服务",
    chatLabel: "第三步",
    chatTitle: "询问 GovAssist AI",
    chatDescription: "询问您所选择的服务。在这里阅读回答。",
    newConversation: "新的对话",
    privacyAria: "隐私提醒",
    privacyTitle: "保护您的资料",
    privacyDescription:
      "请勿输入您的 NRIC、Singpass 密码、OTP、银行资料或银行卡资料。",
    chatMessagesAria: "GovAssist 对话",
    chatInputLabel: "输入您的问题",
    chatInputPlaceholder: "例如：如何申请 CHAS？",
    send: "发送",
    inputHelp: "按 Enter 发送。按 Shift + Enter 换行。",
    feedbackTitle: "这个回答有帮助吗？",
    feedbackDescription:
      "您的反馈能帮助我们让 GovAssist 更清楚、更适合年长用户。",
    feedbackYes: "有帮助",
    feedbackPartly: "部分有帮助",
    feedbackNo: "没有帮助",
    feedbackDetailed: "提供详细反馈",
    safetyLabel: "安全提醒",
    safetyTitle: "您的安全很重要",
    safetyDescriptionOne:
      "GovAssist AI 绝不会要求您提供 NRIC、Singpass 密码、OTP、银行资料或银行卡资料。",
    safetyDescriptionTwo:
      "GovAssist 只提供一般指引。重要步骤请务必到政府官方网站确认。",
    footerTitle: "GovAssist AI 课程项目",
    footerDescription: "这是学生项目，并非新加坡政府官方服务。"
  },
  serviceDescriptions: {
    CPF: "CPF 余额和储蓄",
    HDB: "住房和组屋事项",
    HealthHub: "预约和健康记录",
    CHAS: "医疗津贴",
    "CDC Vouchers": "领取和使用购物券",
    LifeSG: "福利和服务",
    Singpass: "登录和账户安全",
    "Financial Assistance": "家庭援助计划"
  },
  taskLabels: {
    "singpass-login": "登录 Singpass",
    "singpass-password": "重设我的 Singpass 密码",
    "singpass-mobile-number": "更新我的手机号码",
    "singpass-security": "意外的登录请求",
    "cpf-balance": "查看我的 CPF 余额",
    "cpf-contributions": "查看我的 CPF 缴交记录",
    "cpf-accounts": "了解我的 CPF 账户",
    "hdb-loan": "查看我的 HDB 贷款资料",
    "hdb-application": "查看我的住房申请",
    "hdb-assistance": "寻找住房援助",
    "healthhub-appointments": "查看我的预约",
    "healthhub-records": "查看我的健康记录",
    "healthhub-access": "获取 HealthHub 使用帮助",
    "chas-apply": "申请 CHAS",
    "chas-eligibility": "查看我是否符合 CHAS 资格",
    "chas-status": "查看我的 CHAS 申请状态",
    "cdc-claim": "领取 CDC Vouchers",
    "cdc-use": "使用我的 CDC Vouchers",
    "cdc-link": "找回我的购物券链接",
    "lifesg-use": "了解如何使用 LifeSG",
    "lifesg-updates": "查看我的申请更新",
    "lifesg-benefits": "寻找福利和服务",
    "financial-options": "寻找财务援助选择",
    "financial-comcare": "申请 ComCare",
    "financial-daily-expenses": "获取日常开销援助"
  },
  systemMessages: {
    n8nMissing: "请先在 script.js 中粘贴 n8n Embedded Chat URL。",
    privacyRemoved:
      "为了您的安全，个人资料已在发送给 GovAssist AI 前移除。",
    emptyReply: "工作流程返回了空白回答。",
    replyError:
      "GovAssist 现在无法回复。请再试一次。如果问题持续，请检查 n8n 中最新的执行记录。",
    noAnswerToRead: "目前还没有 GovAssist 回答可朗读。",
    speechUnsupported: "此浏览器不支持朗读功能。",
    feedbackMissing:
      "请先在 script.js 中粘贴反馈表格的 Production URL。",
    requestFailed: status => `请求失败：${status}`,
    recoveryTitle: "GovAssist 现在无法连接。",
    tryAgain: "再试一次",
    typeDifferentQuestion: "输入另一个问题",
    chooseAnotherService: "选择其他服务",
    listenToAnswer: "朗读回答",
    pauseReading: "暂停",
    continueReading: "继续",
    stopReading: "停止"
  }
};

translations["Bahasa Melayu"] = {
  ...translations.English,
  htmlLang: "ms",
  selectedLanguage: "Bahasa dipilih: Bahasa Melayu",
  languagePrompt: "Sila pilih bahasa untuk teruskan.",
  loading: "GovAssist sedang menyediakan jawapan yang mudah...",
  guidedLabel: "Langkah 2",
  guidedTitle: service => `Pilih soalan untuk ${service}`,
  guidedDescription:
    "Pilih soalan biasa, atau taip soalan anda tentang perkhidmatan ini.",
  close: "Tutup",
  chooseAnother: "Pilih perkhidmatan lain",
  ownQuestion: "Taip soalan saya sendiri",
  followUpTitle: "Apakah yang anda mahu lakukan seterusnya?",
  moreHelp: service =>
    service ? `Lebih banyak bantuan ${service}` : "Lebih banyak bantuan berpandu",
  welcome:
    "Helo! Saya GovAssist AI. Sila pilih perkhidmatan atau taip soalan anda. Jangan kongsi NRIC, kata laluan, OTP atau maklumat bank.",
  page: {
    documentTitle: "GovAssist AI",
    brandHomeAria: "Laman utama GovAssist AI",
    brandDescription: "Panduan mudah untuk perkhidmatan digital Singapura",
    mainNavAria: "Navigasi utama",
    navHome: "Laman utama",
    navLanguage: "Bahasa",
    navServices: "Perkhidmatan",
    navChat: "Sembang",
    heroLabel: "Mula di sini",
    heroTitle:
      "Pilih bahasa dahulu. Kemudian GovAssist akan membimbing anda langkah demi langkah.",
    heroDescription:
      "Dapatkan bantuan mudah untuk laman pemerintah Singapura tanpa berkongsi butiran peribadi.",
    heroReassurance:
      "Jangan masukkan NRIC, kata laluan, OTP atau maklumat bank.",
    assistantIntroTitle: "Saya boleh membantu dengan laman pemerintah.",
    assistantIntroDescription:
      "Pilih perkhidmatan dahulu. Kemudian pilih soalan biasa atau taip soalan anda.",
    assistantIntroButton: "Mula",
    introPickService: "Pilih perkhidmatan",
    introChooseQuestion: "Pilih atau taip",
    introReadAnswer: "Baca jawapan",
    heroImageAlt:
      "Dua warga emas gembira menggunakan telefon bersama-sama",
    journeyPreviewAria: "Cara GovAssist membantu",
    journeyAskTitle: "Tanya soalan",
    journeyAskDescription:
      "Pilih tugas biasa atau taip soalan anda sendiri.",
    journeyLearnTitle: "Pelajari langkah-langkah",
    journeyLearnDescription:
      "Baca jawapan yang jelas dalam bahasa pilihan anda.",
    journeyDoTitle: "Lakukan sendiri bila-bila masa",
    journeyDoDescription: "Gunakan panduan apabila anda sudah bersedia.",
    accessibilityLabel: "Kebolehcapaian",
    accessibilityTitle: "Jadikan halaman ini lebih mudah digunakan",
    largerText: "Besarkan Teks",
    smallerText: "Kecilkan Teks",
    resetText: "Tetapkan Semula Teks",
    highContrast: "Kontras Tinggi",
    readAloud: "Baca Kuat",
    languageLabel: "Langkah pertama",
    languageTitle: "Pilih bahasa anda",
    languageDescription:
      "GovAssist akan menggunakan bahasa ini untuk perbualan.",
    languagePrompt: "Sila pilih bahasa untuk teruskan.",
    servicesLabel: "Langkah 1",
    servicesTitle: "Pilih perkhidmatan",
    servicesDescription:
      "Pilih perkhidmatan pemerintah yang anda perlukan bantuan.",
    chooseAnotherServiceBack: "← Pilih perkhidmatan lain",
    chatLabel: "Langkah 3",
    chatTitle: "Tanya GovAssist AI",
    chatDescription:
      "Tanya tentang perkhidmatan yang anda pilih. Baca jawapan di sini.",
    newConversation: "Perbualan Baharu",
    privacyAria: "Peringatan privasi",
    privacyTitle: "Lindungi maklumat anda",
    privacyDescription:
      "Jangan masukkan NRIC, kata laluan Singpass, OTP, maklumat bank atau butiran kad anda.",
    chatMessagesAria: "Perbualan GovAssist",
    chatInputLabel: "Taip soalan anda",
    chatInputPlaceholder: "Contoh: Bagaimana saya memohon CHAS?",
    send: "Hantar",
    inputHelp:
      "Tekan Enter untuk hantar. Tekan Shift + Enter untuk baris baharu.",
    feedbackTitle: "Adakah jawapan ini membantu?",
    feedbackDescription:
      "Maklum balas anda membantu kami menjadikan GovAssist lebih jelas dan mudah untuk warga emas.",
    feedbackYes: "Ya, membantu",
    feedbackPartly: "Sebahagiannya membantu",
    feedbackNo: "Tidak membantu",
    feedbackDetailed: "Beri Maklum Balas Terperinci",
    safetyLabel: "Peringatan keselamatan",
    safetyTitle: "Keselamatan anda penting",
    safetyDescriptionOne:
      "GovAssist AI tidak akan meminta NRIC, kata laluan Singpass, OTP, maklumat bank atau butiran kad anda.",
    safetyDescriptionTwo:
      "GovAssist hanya memberi panduan umum. Sentiasa sahkan langkah penting di laman rasmi pemerintah.",
    footerTitle: "Projek CA GovAssist AI",
    footerDescription:
      "Ini ialah projek pelajar dan bukan perkhidmatan rasmi Pemerintah Singapura."
  },
  serviceDescriptions: {
    CPF: "Baki dan simpanan CPF",
    HDB: "Urusan perumahan dan flat",
    HealthHub: "Janji temu dan rekod",
    CHAS: "Subsidi penjagaan kesihatan",
    "CDC Vouchers": "Tuntut dan guna baucar",
    LifeSG: "Manfaat dan perkhidmatan",
    Singpass: "Log masuk dan keselamatan akaun",
    "Financial Assistance": "Skim sokongan isi rumah"
  },
  taskLabels: {
    "singpass-login": "Log masuk ke Singpass",
    "singpass-password": "Tetapkan semula kata laluan Singpass saya",
    "singpass-mobile-number": "Kemas kini nombor telefon bimbit saya",
    "singpass-security": "Permintaan log masuk yang tidak dijangka",
    "cpf-balance": "Semak baki CPF saya",
    "cpf-contributions": "Lihat caruman CPF saya",
    "cpf-accounts": "Fahami akaun CPF saya",
    "hdb-loan": "Lihat maklumat pinjaman HDB saya",
    "hdb-application": "Semak permohonan perumahan saya",
    "hdb-assistance": "Cari bantuan perumahan",
    "healthhub-appointments": "Lihat janji temu saya",
    "healthhub-records": "Lihat rekod kesihatan saya",
    "healthhub-access": "Dapatkan bantuan mengakses HealthHub",
    "chas-apply": "Mohon CHAS",
    "chas-eligibility": "Semak sama ada saya layak untuk CHAS",
    "chas-status": "Semak status permohonan CHAS saya",
    "cdc-claim": "Tuntut CDC Vouchers",
    "cdc-use": "Gunakan CDC Vouchers saya",
    "cdc-link": "Dapatkan semula pautan baucar saya",
    "lifesg-use": "Ketahui cara menggunakan LifeSG",
    "lifesg-updates": "Semak kemas kini permohonan saya",
    "lifesg-benefits": "Cari manfaat dan perkhidmatan",
    "financial-options": "Cari pilihan bantuan kewangan",
    "financial-comcare": "Mohon ComCare",
    "financial-daily-expenses": "Dapatkan bantuan untuk perbelanjaan harian"
  },
  systemMessages: {
    n8nMissing:
      "Sila tampal URL n8n Embedded Chat dalam script.js terlebih dahulu.",
    privacyRemoved:
      "Untuk keselamatan anda, maklumat peribadi telah dibuang sebelum mesej dihantar kepada GovAssist AI.",
    emptyReply: "Aliran kerja mengembalikan jawapan kosong.",
    replyError:
      "GovAssist tidak dapat membalas sekarang. Sila cuba lagi. Jika masalah berterusan, semak pelaksanaan terkini dalam n8n.",
    noAnswerToRead: "Belum ada jawapan GovAssist untuk dibaca.",
    speechUnsupported: "Fungsi baca kuat tidak disokong oleh pelayar ini.",
    feedbackMissing:
      "Sila tampal URL Production borang maklum balas dalam script.js terlebih dahulu.",
    requestFailed: status => `Permintaan gagal: ${status}`,
    recoveryTitle: "GovAssist tidak dapat bersambung sekarang.",
    tryAgain: "Cuba Lagi",
    typeDifferentQuestion: "Taip soalan lain",
    chooseAnotherService: "Pilih perkhidmatan lain",
    listenToAnswer: "Dengar jawapan",
    pauseReading: "Jeda",
    continueReading: "Sambung",
    stopReading: "Berhenti"
  }
};

translations.Tamil = {
  ...translations.English,
  htmlLang: "ta",
  selectedLanguage: "தேர்ந்தெடுக்கப்பட்ட மொழி: தமிழ்",
  languagePrompt: "தொடர ஒரு மொழியைத் தேர்ந்தெடுக்கவும்.",
  loading: "GovAssist எளிய பதிலைத் தயாரிக்கிறது...",
  guidedLabel: "படி 2",
  guidedTitle: service => `${service} கேள்வியைத் தேர்ந்தெடுக்கவும்`,
  guidedDescription:
    "பொதுவான கேள்வியைத் தேர்ந்தெடுக்கவும் அல்லது இந்த சேவையைப் பற்றி உங்கள் கேள்வியைத் தட்டச்சு செய்யவும்.",
  close: "மூடு",
  chooseAnother: "மற்றொரு சேவையைத் தேர்ந்தெடுக்கவும்",
  ownQuestion: "என் சொந்த கேள்வியைத் தட்டச்சு செய்கிறேன்",
  followUpTitle: "அடுத்து என்ன செய்ய விரும்புகிறீர்கள்?",
  moreHelp: service =>
    service ? `${service} குறித்த மேலும் உதவி` : "மேலும் வழிகாட்டப்பட்ட உதவி",
  welcome:
    "வணக்கம்! நான் GovAssist AI. ஒரு சேவையைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் கேள்வியைத் தட்டச்சு செய்யவும். NRIC, கடவுச்சொல், OTP அல்லது வங்கி விவரங்களை பகிர வேண்டாம்.",
  page: {
    documentTitle: "GovAssist AI",
    brandHomeAria: "GovAssist AI முகப்பு",
    brandDescription: "சிங்கப்பூர் டிஜிட்டல் சேவைகளுக்கான எளிய வழிகாட்டல்",
    mainNavAria: "முக்கிய வழிசெலுத்தல்",
    navHome: "முகப்பு",
    navLanguage: "மொழி",
    navServices: "சேவைகள்",
    navChat: "அரட்டை",
    heroLabel: "இங்கே தொடங்குங்கள்",
    heroTitle:
      "முதலில் உங்கள் மொழியைத் தேர்ந்தெடுக்கவும். பிறகு GovAssist படிப்படியாக வழிகாட்டும்.",
    heroDescription:
      "தனிப்பட்ட விவரங்களை பகிராமல் பொதுவான சிங்கப்பூர் அரசு இணையதளங்களுக்கு எளிய உதவி பெறுங்கள்.",
    heroReassurance:
      "NRIC, கடவுச்சொற்கள், OTP அல்லது வங்கி விவரங்களை உள்ளிட வேண்டாம்.",
    assistantIntroTitle: "அரசு இணையதளங்களுக்கு நான் உதவ முடியும்.",
    assistantIntroDescription:
      "முதலில் ஒரு சேவையைத் தேர்ந்தெடுக்கவும். பிறகு பொதுவான கேள்வியைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் கேள்வியைத் தட்டச்சு செய்யவும்.",
    assistantIntroButton: "தொடங்குங்கள்",
    introPickService: "சேவையைத் தேர்ந்தெடுக்கவும்",
    introChooseQuestion: "தேர்வு செய்யவும் அல்லது தட்டச்சு செய்யவும்",
    introReadAnswer: "பதிலைப் படிக்கவும்",
    heroImageAlt:
      "இரு முதியவர்கள் மகிழ்ச்சியாக ஒன்றாக தொலைபேசியைப் பயன்படுத்துகின்றனர்",
    journeyPreviewAria: "GovAssist எவ்வாறு உதவுகிறது",
    journeyAskTitle: "கேள்வி கேளுங்கள்",
    journeyAskDescription:
      "பொதுவான பணியைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் சொந்த கேள்வியைத் தட்டச்சு செய்யவும்.",
    journeyLearnTitle: "படிகளை அறியுங்கள்",
    journeyLearnDescription:
      "நீங்கள் தேர்ந்தெடுத்த மொழியில் தெளிவான பதிலைப் படிக்கவும்.",
    journeyDoTitle: "எப்போது வேண்டுமானாலும் நீங்களே செய்யுங்கள்",
    journeyDoDescription:
      "நீங்கள் தயாராக இருக்கும்போது வழிகாட்டலைப் பயன்படுத்துங்கள்.",
    accessibilityLabel: "அணுகல்தன்மை",
    accessibilityTitle: "இந்தப் பக்கத்தை பயன்படுத்த எளிதாக்கவும்",
    largerText: "பெரிய எழுத்து",
    smallerText: "சிறிய எழுத்து",
    resetText: "உரை மீட்டமை",
    highContrast: "அதிக மாறுபாடு",
    readAloud: "சத்தமாக வாசிக்கவும்",
    languageLabel: "முதல் படி",
    languageTitle: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    languageDescription:
      "GovAssist இந்த உரையாடலில் இந்த மொழியைப் பயன்படுத்தும்.",
    languagePrompt: "தொடர ஒரு மொழியைத் தேர்ந்தெடுக்கவும்.",
    servicesLabel: "படி 1",
    servicesTitle: "ஒரு சேவையைத் தேர்ந்தெடுக்கவும்",
    servicesDescription:
      "உங்களுக்கு உதவி தேவைப்படும் அரசு சேவையைத் தேர்ந்தெடுக்கவும்.",
    chooseAnotherServiceBack: "← மற்றொரு சேவையைத் தேர்ந்தெடுக்கவும்",
    chatLabel: "படி 3",
    chatTitle: "GovAssist AI-யிடம் கேளுங்கள்",
    chatDescription:
      "நீங்கள் தேர்ந்தெடுத்த சேவையைப் பற்றி கேளுங்கள். பதிலை இங்கே படிக்கவும்.",
    newConversation: "புதிய உரையாடல்",
    privacyAria: "தனியுரிமை நினைவூட்டல்",
    privacyTitle: "உங்கள் தகவலை பாதுகாக்கவும்",
    privacyDescription:
      "உங்கள் NRIC, Singpass கடவுச்சொல், OTP, வங்கி விவரங்கள் அல்லது அட்டை விவரங்களை உள்ளிட வேண்டாம்.",
    chatMessagesAria: "GovAssist உரையாடல்",
    chatInputLabel: "உங்கள் கேள்வியைத் தட்டச்சு செய்யவும்",
    chatInputPlaceholder: "உதாரணம்: CHAS-க்கு எப்படி விண்ணப்பிப்பது?",
    send: "அனுப்பு",
    inputHelp:
      "அனுப்ப Enter அழுத்தவும். புதிய வரிக்குப் Shift + Enter அழுத்தவும்.",
    feedbackTitle: "இந்த பதில் உதவியாக இருந்ததா?",
    feedbackDescription:
      "உங்கள் கருத்து GovAssist-ஐ முதிய பயனர்களுக்கு தெளிவாகவும் எளிதாகவும் மாற்ற உதவும்.",
    feedbackYes: "ஆம், உதவியது",
    feedbackPartly: "சில அளவு உதவியது",
    feedbackNo: "உதவவில்லை",
    feedbackDetailed: "விரிவான கருத்து கொடுக்கவும்",
    safetyLabel: "பாதுகாப்பு நினைவூட்டல்",
    safetyTitle: "உங்கள் பாதுகாப்பு முக்கியம்",
    safetyDescriptionOne:
      "GovAssist AI உங்கள் NRIC, Singpass கடவுச்சொல், OTP, வங்கி விவரங்கள் அல்லது அட்டை விவரங்களை ஒருபோதும் கேட்காது.",
    safetyDescriptionTwo:
      "GovAssist பொது வழிகாட்டல் மட்டுமே வழங்குகிறது. முக்கியமான படிகளை எப்போதும் அதிகாரப்பூர்வ அரசு இணையதளத்தில் உறுதிப்படுத்தவும்.",
    footerTitle: "GovAssist AI CA திட்டம்",
    footerDescription:
      "இது மாணவர் திட்டம்; அதிகாரப்பூர்வ சிங்கப்பூர் அரசு சேவை அல்ல."
  },
  serviceDescriptions: {
    CPF: "CPF இருப்பு மற்றும் சேமிப்பு",
    HDB: "வீடு மற்றும் flat விஷயங்கள்",
    HealthHub: "சந்திப்புகள் மற்றும் பதிவுகள்",
    CHAS: "சுகாதார மானியங்கள்",
    "CDC Vouchers": "வவுச்சர்களைப் பெறவும் பயன்படுத்தவும்",
    LifeSG: "நலன்கள் மற்றும் சேவைகள்",
    Singpass: "உள்நுழைவு மற்றும் கணக்கு பாதுகாப்பு",
    "Financial Assistance": "குடும்ப ஆதரவு திட்டங்கள்"
  },
  taskLabels: {
    "singpass-login": "Singpass-ல் உள்நுழையவும்",
    "singpass-password": "என் Singpass கடவுச்சொல்லை மீட்டமைக்கவும்",
    "singpass-mobile-number": "என் கைபேசி எண்ணைப் புதுப்பிக்கவும்",
    "singpass-security": "எதிர்பாராத உள்நுழைவு கோரிக்கை",
    "cpf-balance": "என் CPF இருப்பைச் சரிபார்க்கவும்",
    "cpf-contributions": "என் CPF பங்களிப்புகளைப் பார்க்கவும்",
    "cpf-accounts": "என் CPF கணக்குகளைப் புரிந்துகொள்ளவும்",
    "hdb-loan": "என் HDB கடன் தகவலைப் பார்க்கவும்",
    "hdb-application": "என் வீட்டு விண்ணப்பத்தைச் சரிபார்க்கவும்",
    "hdb-assistance": "வீட்டு உதவியைத் தேடவும்",
    "healthhub-appointments": "என் சந்திப்புகளைப் பார்க்கவும்",
    "healthhub-records": "என் சுகாதார பதிவுகளைப் பார்க்கவும்",
    "healthhub-access": "HealthHub அணுக உதவி பெறவும்",
    "chas-apply": "CHAS-க்கு விண்ணப்பிக்கவும்",
    "chas-eligibility": "நான் CHAS-க்கு தகுதியானவரா எனச் சரிபார்க்கவும்",
    "chas-status": "என் CHAS விண்ணப்ப நிலையைச் சரிபார்க்கவும்",
    "cdc-claim": "CDC Vouchers பெறவும்",
    "cdc-use": "என் CDC Vouchers பயன்படுத்தவும்",
    "cdc-link": "என் வவுச்சர் இணைப்பை மீட்டெடுக்கவும்",
    "lifesg-use": "LifeSG பயன்படுத்துவது எப்படி என அறியவும்",
    "lifesg-updates": "என் விண்ணப்ப புதுப்பிப்புகளைச் சரிபார்க்கவும்",
    "lifesg-benefits": "நலன்கள் மற்றும் சேவைகளைத் தேடவும்",
    "financial-options": "நிதி உதவி விருப்பங்களைத் தேடவும்",
    "financial-comcare": "ComCare-க்கு விண்ணப்பிக்கவும்",
    "financial-daily-expenses": "தினசரி செலவுகளுக்கு உதவி பெறவும்"
  },
  systemMessages: {
    n8nMissing:
      "முதலில் script.js-ல் உங்கள் n8n Embedded Chat URL-ஐ ஒட்டவும்.",
    privacyRemoved:
      "உங்கள் பாதுகாப்பிற்காக, GovAssist AI-க்கு செய்தி அனுப்பும் முன் தனிப்பட்ட தகவல் நீக்கப்பட்டது.",
    emptyReply: "workflow வெற்று பதிலைத் திருப்பி அனுப்பியது.",
    replyError:
      "GovAssist இப்போது பதிலளிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும். பிரச்சினை தொடர்ந்தால், n8n-ல் சமீபத்திய execution-ஐச் சரிபார்க்கவும்.",
    noAnswerToRead: "இன்னும் வாசிக்க GovAssist பதில் இல்லை.",
    speechUnsupported: "இந்த உலாவியில் வாசிப்பு வசதி ஆதரிக்கப்படவில்லை.",
    feedbackMissing:
      "முதலில் script.js-ல் feedback Production URL-ஐ ஒட்டவும்.",
    requestFailed: status => `கோரிக்கை தோல்வியடைந்தது: ${status}`,
    recoveryTitle: "GovAssist இப்போது இணைக்க முடியவில்லை.",
    tryAgain: "மீண்டும் முயற்சிக்கவும்",
    typeDifferentQuestion: "வேறு கேள்வி தட்டச்சு செய்யவும்",
    chooseAnotherService: "மற்றொரு சேவையைத் தேர்ந்தெடுக்கவும்",
    listenToAnswer: "பதிலை கேட்கவும்",
    pauseReading: "இடைநிறுத்து",
    continueReading: "தொடரவும்",
    stopReading: "நிறுத்து"
  }
};


const messages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const voiceInputButton = document.getElementById("voiceInputButton");
const chatStatus = document.getElementById("chatStatus");
const feedbackPanel = document.getElementById("feedbackPanel");
const selectedLanguageText = document.getElementById("selectedLanguage");
const increaseTextButton = document.getElementById("increaseText");
const decreaseTextButton = document.getElementById("decreaseText");
const resetTextButton = document.getElementById("resetText");
const chatTextSize = document.getElementById("chatTextSize");
const pauseReadAloud = document.getElementById("pauseReadAloud");
const continueReadAloud =
  document.getElementById("continueReadAloud");
const stopReadAloud = document.getElementById("stopReadAloud");
const speechControlRow =
  document.querySelector(".speech-control-row");
const pageContent = document.querySelector(".page-content");
const chatIntroSection =
  document.querySelector(".chat-intro-section");
const servicesSection = document.getElementById("services");
const backToStart = document.getElementById("backToStart");
const chooseAnotherServiceTop =
  document.getElementById("chooseAnotherServiceTop");
const commonWordsList =
  document.getElementById("commonWordsList");
const commonWordsExplanation =
  document.getElementById("commonWordsExplanation");

const guidedOptionsPanel =
  document.getElementById("guidedOptionsPanel");
const backToServicesFromQuestions =
  document.getElementById("backToServicesFromQuestions");
const guidedOptionsEyebrow =
  document.getElementById("guidedOptionsEyebrow");
const guidedOptionsTitle =
  document.getElementById("guidedOptionsTitle");
const guidedOptionsDescription =
  document.getElementById("guidedOptionsDescription");
const guidedOptionsList =
  document.getElementById("guidedOptionsList");
const closeGuidedOptions =
  document.getElementById("closeGuidedOptions");
const chooseAnotherService =
  document.getElementById("chooseAnotherService");
const guidedOtherQuestion =
  document.getElementById("guidedOtherQuestion");

const guidedFollowUpPanel =
  document.getElementById("guidedFollowUpPanel");
const guidedFollowUpTitle =
  document.getElementById("guidedFollowUpTitle");
const moreGuidedHelp =
  document.getElementById("moreGuidedHelp");
const followUpChooseService =
  document.getElementById("followUpChooseService");
const followUpTypeQuestion =
  document.getElementById("followUpTypeQuestion");
const backToQuestions =
  document.getElementById("backToQuestions");
const backToServicesFromChat =
  document.getElementById("backToServicesFromChat");
const startAssistantButton =
  document.getElementById("startAssistant");


const queryLanguage =
  new URLSearchParams(window.location.search).get("language");

if (queryLanguage && translations[queryLanguage]) {
  localStorage.setItem("govassistLanguage", queryLanguage);
}

const savedLanguage =
  queryLanguage && translations[queryLanguage]
    ? queryLanguage
    : localStorage.getItem("govassistLanguage");

let currentLanguage = savedLanguage || "English";

if (!translations[currentLanguage]) {
  currentLanguage = "English";
  localStorage.removeItem("govassistLanguage");
}

let hasChosenLanguage = Boolean(
  savedLanguage && translations[savedLanguage]
);

let currentService =
  localStorage.getItem("govassistService") || "";

let lastAssistantAnswer = "";
let lastUserQuestion = "";
let lastSafeMessage = "";
let requestInProgress = false;
let currentJourneyStage = hasChosenLanguage ? "intro" : "language";
let currentSpeech = null;
let currentSpeechText = "";
let activeReadContext = "";
let autoReadAloudEnabled = false;
let autoReadScheduleId = 0;
let selectedCommonWord = "";

// Common Words Explained: simple terms shown on the Pick Service page.
const commonWordExplanations = [
  {
    word: "OTP",
    explanation: "A one-time code sent to your phone."
  },
  {
    word: "Login",
    explanation: "Enter your account."
  },
  {
    word: "Verify",
    explanation: "Confirm that it is really you."
  },
  {
    word: "Submit",
    explanation: "Send the form."
  },
  {
    word: "Password",
    explanation:
      "A secret word or code used to enter your account."
  },
  {
    word: "Scam",
    explanation:
      "A trick used to steal your money or information."
  },
  {
    word: "Singpass",
    explanation:
      "An account used to access Singapore government digital services."
  },
  {
    word: "NRIC",
    explanation:
      "Your identity card number. Do not share it with the chatbot."
  },
  {
    word: "CAPTCHA",
    explanation: "A check to prove you are not a robot."
  },
  {
    word: "Bank details",
    explanation:
      "Private information about your bank account. Do not share it online unless you are sure the website is official."
  }
];

// Browser speech recognition is Chrome/Edge prefixed in some versions.
const SpeechRecognitionConstructor =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let voiceRecognition = null;
let isVoiceListening = false;
let voiceInputBaseText = "";
const FONT_BASE_PX = 18;
const FONT_MIN_SCALE = 50;
const FONT_MAX_SCALE = 150;
const FONT_DEFAULT_SCALE = 100;
const FONT_SCALE_KEY = "govassistFontScale";
const LEGACY_FONT_SIZE_KEY = "govassistFontSize";

function getStoredFontScale() {
  const storedScale = Number(localStorage.getItem(FONT_SCALE_KEY));

  if (Number.isFinite(storedScale) && storedScale > 0) {
    return storedScale;
  }

  const legacySize = Number(localStorage.getItem(LEGACY_FONT_SIZE_KEY));

  if (Number.isFinite(legacySize) && legacySize > 0) {
    return Math.round((legacySize / FONT_BASE_PX) * 100);
  }

  return FONT_DEFAULT_SCALE;
}

let currentFontScale = getStoredFontScale();

let sessionId = getOrCreateSessionId();

const highContrastEnabled =
  localStorage.getItem("govassistHighContrast") === "true";


document.body.classList.toggle(
  "high-contrast",
  highContrastEnabled
);

document
  .getElementById("contrastButton")
  .setAttribute("aria-pressed", String(highContrastEnabled));

applyFontSize();
setJourneyStage(currentJourneyStage);
updateLanguageControls();
updateSelectedServiceCard();
renderCommonWords();


function getCurrentUiText() {
  return translations[currentLanguage] || translations.English;
}

function languageHtmlCode(language) {
  return translations[language]?.htmlLang || "en";
}

function getTranslationValue(path) {
  const keys = path.split(".");
  let translated = getCurrentUiText();
  let fallback = translations.English;

  for (const key of keys) {
    translated = translated?.[key];
    fallback = fallback?.[key];
  }

  return translated ?? fallback ?? "";
}

function applyInterfaceTranslations() {
  document.title = getTranslationValue("page.documentTitle");

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {
      const translatedText = getTranslationValue(
        `page.${element.dataset.i18n}`
      );

      element.textContent = element.dataset.i18nIcon
        ? `${element.dataset.i18nIcon} ${translatedText}`
        : translatedText;
    });

  document
    .querySelectorAll("[data-i18n-attr]")
    .forEach(element => {
      element.dataset.i18nAttr
        .split(";")
        .map(item => item.trim())
        .filter(Boolean)
        .forEach(item => {
          const [attribute, key] = item
            .split(":")
            .map(part => part.trim());

          if (attribute && key) {
            element.setAttribute(
              attribute,
              getTranslationValue(`page.${key}`)
            );
          }
        });
    });

  document
    .querySelectorAll("[data-service-description]")
    .forEach(element => {
      const service = element.dataset.serviceDescription;
      element.textContent =
        getCurrentUiText().serviceDescriptions?.[service] ??
        translations.English.serviceDescriptions[service] ??
        element.textContent;
    });
}

function setJourneyStage(stage) {
  currentJourneyStage = stage;

  document.body.classList.remove(
    "stage-language",
    "stage-intro",
    "stage-service",
    "stage-task",
    "stage-answer"
  );

  document.body.classList.add(`stage-${stage}`);
  scheduleAutoReadAloud();
}

function setServiceListCollapsed(collapsed) {
  const shouldCollapse = Boolean(collapsed && currentService);

  servicesSection.classList.toggle(
    "has-service-selected",
    shouldCollapse
  );

  chooseAnotherServiceTop.hidden = !shouldCollapse;
}

function renderCommonWords() {
  if (!commonWordsList || !commonWordsExplanation) {
    return;
  }

  commonWordsList.replaceChildren();

  commonWordExplanations.forEach(item => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "common-word-button";
    button.textContent = item.word;
    button.setAttribute("aria-pressed", "false");

    // Clicking a word displays only that word's simple explanation.
    button.addEventListener("click", () => {
      showCommonWordExplanation(item);
    });

    commonWordsList.appendChild(button);
  });
}

function showCommonWordExplanation(item) {
  selectedCommonWord = item.word;

  commonWordsExplanation.hidden = false;
  commonWordsExplanation.replaceChildren();

  const word = document.createElement("strong");
  word.textContent = item.word;

  const explanation = document.createElement("p");
  explanation.textContent = item.explanation;

  commonWordsExplanation.append(word, explanation);

  commonWordsList
    .querySelectorAll(".common-word-button")
    .forEach(button => {
      const selected = button.textContent === item.word;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
}


/* Create or retrieve the current conversation ID */

function getOrCreateSessionId() {
  let savedSessionId =
    localStorage.getItem("govassistSessionId");

  if (!savedSessionId) {
    savedSessionId =
      window.crypto?.randomUUID?.() ||
      `govassist-${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`;

    localStorage.setItem(
      "govassistSessionId",
      savedSessionId
    );
  }

  return savedSessionId;
}


/* Remove sensitive information before showing or sending it */

function containsSensitiveKeywords(message) {
  // These words warn users before the question is sent to the chatbot.
  const sensitiveKeywordPatterns = [
    /\bnric\b/i,
    /\bic\s*number\b/i,
    /\botp\b/i,
    /\bone[-\s]*time\s*password\b/i,
    /\bsingpass\s*password\b/i,
    /\bpassword\b/i,
    /\bbank\s*account\b/i,
    /\bcard\s*number\b/i,
    /\bcredit\s*card\b/i,
    /\bdebit\s*card\b/i,
    /\bcvv\b/i,
    /\bpin\b/i
  ];

  return sensitiveKeywordPatterns.some(pattern =>
    pattern.test(message)
  );
}

function showSensitiveKeywordWarning(message) {
  const text = getCurrentUiText().systemMessages;
  const fallback = translations.English.systemMessages;

  // The warning appears in the chat with two clear choices for the user.
  addMessage(
    "system",
    text.sensitiveWarning || fallback.sensitiveWarning,
    {
      actions: [
        {
          label: text.editMyMessage || fallback.editMyMessage,
          handler: () => {
            chatInput.value = message;
            chatInput.focus();
          }
        },
        {
          label: text.sendAnyway || fallback.sendAnyway,
          handler: () => {
            sendMessage(message, {
              skipSensitiveKeywordWarning: true
            });
          }
        }
      ]
    }
  );
}

function redactSensitiveInformation(message) {
  let safeMessage = message;
  const detected = [];

  const patterns = [
    {
      name: "NRIC or FIN",
      regex: /\b[STFGM]\d{7}[A-Z]\b/gi,
      replacement: "[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Email address",
      regex:
        /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
      replacement: "[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Phone number",
      regex:
        /\b(?:\+65[\s-]?)?[689]\d{3}[\s-]?\d{4}\b/g,
      replacement: "[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Phone number",
      regex:
        /\b((?:my\s+)?(?:mobile|phone|contact)\s*(?:number)?\s*(?:is|:|=)?\s*)\+?\d[\d\s-]{6,}\d\b/gi,
      replacement:
        "$1[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Account or reference number",
      regex:
        /\b((?:account|bank|card|reference)\s*(?:number|no\.?)?\s*(?:is|:|=)?\s*)\d[\d\s-]{6,}\d\b/gi,
      replacement:
        "$1[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Card or long account number",
      regex: /\b(?:\d[\s-]*?){13,19}\b/g,
      replacement: "[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Possible OTP",
      regex: /\b\d{6}\b/g,
      replacement: "[PERSONAL INFORMATION REMOVED]"
    },
    {
      name: "Password or passcode",
      regex:
        /\b(password|passcode)\s*(?:is|:|=)\s*\S+/gi,
      replacement: "$1 [PERSONAL INFORMATION REMOVED]"
    }
  ];

  for (const pattern of patterns) {
    pattern.regex.lastIndex = 0;

    if (pattern.regex.test(safeMessage)) {
      detected.push(pattern.name);
      pattern.regex.lastIndex = 0;

      safeMessage = safeMessage.replace(
        pattern.regex,
        pattern.replacement
      );
    }
  }

  return {
    safeMessage,
    detected: [...new Set(detected)]
  };
}


/* Display a message safely */

function addMessage(role, text, options = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = `message-row ${role}`;

  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${role}`;

  appendTextWithLinks(bubble, String(text));

  if (role === "assistant" && options.listen !== false) {
    bubble.appendChild(createListenButton(String(text)));
  }

  if (options.actions?.length) {
    bubble.appendChild(createMessageActions(options.actions));
  }

  wrapper.appendChild(bubble);
  messages.appendChild(wrapper);

  messages.scrollTop = messages.scrollHeight;

  return wrapper;
}

function createListenButton(text) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "listen-answer-button";
  button.textContent =
    getCurrentUiText().systemMessages.listenToAnswer;
  button.addEventListener("click", () => {
    speakAnswer(text);
  });

  return button;
}

function createMessageActions(actions) {
  const container = document.createElement("div");
  container.className = "message-actions";

  actions.forEach(action => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action.label;
    button.addEventListener("click", action.handler);
    container.appendChild(button);
  });

  return container;
}


/* Print Guide: turns only the latest chatbot answer into a simple printable guide. */

function buildGuideText(answer = lastAssistantAnswer) {
  const guideLines = [
    currentService ? `Selected service: ${currentService}` : "",
    "Chatbot answer:",
    answer || "",
    "Safety reminder:",
    "Do not share NRIC, Singpass password, OTP, bank details or card details.",
    "GovAssist AI is a student prototype and is not an official Singapore Government service."
  ];

  return guideLines.filter(line => line !== "").join("\n\n");
}

function createGuideActions() {
  const text = getCurrentUiText().systemMessages;
  const fallback = translations.English.systemMessages;

  return [
    {
      label: text.printGuide || fallback.printGuide || "🖨 Print Guide",
      // Always print the latest answer, even if an older Print Guide button is clicked.
      handler: () => printGuide()
    },
    {
      label: text.copyAnswer || fallback.copyAnswer || "📋 Copy Answer",
      // The Copy Answer button uses the latest saved AI answer, not the button text or HTML.
      handler: () => copyLatestAnswer()
    }
  ];
}

async function copyLatestAnswer() {
  // Only copy when the chatbot has already saved an answer.
  if (!lastAssistantAnswer) {
    showCopyStatus(false);
    return;
  }

  try {
    await copyPlainText(lastAssistantAnswer);
    showCopyStatus(true);
  } catch (error) {
    console.error(error);
    showCopyStatus(false);
  }
}

async function copyPlainText(text) {
  // Use the modern clipboard API first when the browser allows it.
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Older browsers can still copy plain text with a temporary textarea.
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Copy command failed.");
  }
}

function showCopyStatus(wasCopied) {
  const text = getCurrentUiText().systemMessages;
  const fallback = translations.English.systemMessages;

  chatStatus.textContent = wasCopied
    ? text.copySuccess || fallback.copySuccess || "Answer copied."
    : text.copyError || fallback.copyError || "Unable to copy answer.";
}

function printGuide(answer = lastAssistantAnswer) {
  // If there is no answer yet, do not open a print window.
  if (!answer) {
    return;
  }

  const guideText = buildGuideText(answer);
  const printWindow = window.open("", "_blank");
  const title = "GovAssist AI Guide";
  const escapedTitle = escapeHtml(title);
  const escapedGuide = escapeHtml(guideText);
  const printMarkup = `
    <!DOCTYPE html>
    <html lang="${languageHtmlCode(currentLanguage)}">
    <head>
      <meta charset="UTF-8">
      <title>${escapedTitle}</title>
      <style>
        body {
          max-width: 760px;
          margin: 32px auto;
          padding: 0 24px;
          color: #1d2b36;
          font-family: Arial, sans-serif;
          font-size: 18px;
          line-height: 1.6;
        }

        h1 {
          font-size: 28px;
        }

        pre {
          white-space: pre-wrap;
          font-family: inherit;
        }
      </style>
    </head>
    <body>
      <h1>${escapedTitle}</h1>
      <pre>${escapedGuide}</pre>
    </body>
    </html>
  `;

  if (!printWindow) {
    printGuideFromHiddenFrame(printMarkup);
    return;
  }

  printWindow.document.write(printMarkup);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function printGuideFromHiddenFrame(printMarkup) {
  // This fallback still prints only the guide if the browser blocks the new window.
  const printFrame = document.createElement("iframe");
  printFrame.style.position = "fixed";
  printFrame.style.right = "0";
  printFrame.style.bottom = "0";
  printFrame.style.width = "0";
  printFrame.style.height = "0";
  printFrame.style.border = "0";
  document.body.appendChild(printFrame);

  const frameDocument = printFrame.contentWindow.document;
  frameDocument.open();
  frameDocument.write(printMarkup);
  frameDocument.close();

  printFrame.contentWindow.focus();
  printFrame.contentWindow.print();

  setTimeout(() => {
    printFrame.remove();
  }, 1000);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function addLoadingMessage() {
  const wrapper = document.createElement("div");
  wrapper.className = "message-row assistant loading-message-row";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble assistant loading-message";
  bubble.setAttribute("aria-live", "polite");
  bubble.textContent = getCurrentUiText().loading;

  const dots = document.createElement("span");
  dots.className = "loading-dots";
  dots.setAttribute("aria-hidden", "true");
  dots.textContent = "...";
  bubble.appendChild(dots);

  wrapper.appendChild(bubble);
  messages.appendChild(wrapper);
  messages.scrollTop = messages.scrollHeight;

  return wrapper;
}

function addWelcomeMessage() {
  const wrapper = addMessage(
    "assistant",
    getCurrentUiText().welcome
  );

  wrapper.dataset.welcomeMessage = "true";
}

function updateWelcomeMessage() {
  const welcomeBubble = messages.querySelector(
    '[data-welcome-message="true"] .message-bubble'
  );

  if (!welcomeBubble) {
    return;
  }

  welcomeBubble.replaceChildren();
  appendTextWithLinks(
    welcomeBubble,
    getCurrentUiText().welcome
  );
  welcomeBubble.appendChild(
    createListenButton(getCurrentUiText().welcome)
  );
}

function canUseSpeech() {
  if ("speechSynthesis" in window) {
    return true;
  }

  addMessage(
    "system",
    getCurrentUiText().systemMessages.speechUnsupported
  );

  return false;
}

function speakAnswer(text) {
  if (!text || !canUseSpeech()) {
    return;
  }

  setSpeechControlsVisible(true);
  window.speechSynthesis.cancel();

  currentSpeechText = text;
  const utterance = new SpeechSynthesisUtterance(text);
  currentSpeech = utterance;
  utterance.rate = 0.85;
  utterance.lang = languageSpeechCode(currentLanguage);
  utterance.addEventListener("end", () => {
    if (currentSpeech === utterance) {
      hideSpeechControls();
    }
  });
  utterance.addEventListener("error", () => {
    if (currentSpeech === utterance) {
      hideSpeechControls();
    }
  });

  window.speechSynthesis.speak(utterance);
}

function pauseSpeech() {
  if (canUseSpeech() && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
}

function continueSpeech() {
  if (canUseSpeech() && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

function stopSpeech() {
  if (!canUseSpeech()) {
    return;
  }

  autoReadAloudEnabled = false;
  autoReadScheduleId += 1;
  window.speechSynthesis.cancel();
  hideSpeechControls();
}

function setSpeechControlsVisible(visible) {
  if (speechControlRow) {
    speechControlRow.hidden = !visible;
  }

  pauseReadAloud.hidden = !visible;
  continueReadAloud.hidden = !visible;
  stopReadAloud.hidden = !visible;
}

function hideSpeechControls() {
  currentSpeech = null;
  currentSpeechText = "";
  setSpeechControlsVisible(false);
}

function scheduleAutoReadAloud() {
  if (!autoReadAloudEnabled) {
    return;
  }

  const scheduleId = ++autoReadScheduleId;

  window.setTimeout(() => {
    if (
      scheduleId !== autoReadScheduleId ||
      !autoReadAloudEnabled ||
      requestInProgress
    ) {
      return;
    }

    const readText = getReadAloudText();

    if (readText) {
      speakAnswer(readText);
    }
  }, 350);
}

function getServiceSelectionReadText() {
  const text = getCurrentUiText();
  const services = Object.entries(text.serviceDescriptions || {})
    .map(([service, description]) => `${service}: ${description}`);
  const selectedExplanation = commonWordExplanations.find(
    item => item.word === selectedCommonWord
  );

  return [
    text.page.servicesTitle,
    text.page.servicesDescription,
    services.join(". "),
    selectedExplanation
      ? `Common Words Explained. ${selectedExplanation.word}. ${selectedExplanation.explanation}`
      : ""
  ].filter(Boolean).join(". ");
}

function getGuidedOptionsReadText() {
  const options = Array
    .from(guidedOptionsList.querySelectorAll("button"))
    .map(button => button.textContent.trim())
    .filter(Boolean);

  return [
    guidedOptionsTitle.textContent.trim(),
    guidedOptionsDescription.textContent.trim(),
    options.length ? options.join(". ") : "",
    guidedOtherQuestion.textContent.trim(),
    chooseAnotherService.textContent.trim()
  ].filter(Boolean).join(". ");
}

function getIntroReadText() {
  const text = getCurrentUiText().page;

  return [
    text.assistantIntroTitle,
    text.assistantIntroDescription,
    text.heroReassurance,
    text.introPickService,
    text.introChooseQuestion,
    text.introReadAnswer
  ].filter(Boolean).join(". ");
}

function getLanguageReadText() {
  const text = getCurrentUiText().page;
  const languages = Array
    .from(document.querySelectorAll("[data-language]"))
    .map(button => button.textContent.trim())
    .filter(Boolean);

  return [
    text.languageTitle,
    text.languagePrompt,
    languages.join(". ")
  ].filter(Boolean).join(". ");
}

function getChatInstructionsReadText() {
  const text = getCurrentUiText().page;

  return [
    text.chatTitle,
    text.chatDescription,
    text.privacyTitle,
    text.privacyDescription
  ].filter(Boolean).join(". ");
}

function getFeedbackReadText() {
  const options = Array
    .from(feedbackPanel.querySelectorAll("[data-helpful]"))
    .map(button => button.textContent.trim())
    .filter(Boolean);

  return [
    document.getElementById("feedbackHeading")?.textContent.trim(),
    feedbackPanel.querySelector("[data-i18n='feedbackDescription']")
      ?.textContent.trim(),
    options.length ? options.join(". ") : ""
  ].filter(Boolean).join(". ");
}

function getReadAloudText() {
  if (
    activeReadContext === "feedback" &&
    !feedbackPanel.hidden
  ) {
    return getFeedbackReadText();
  }

  if (currentJourneyStage === "answer" && lastAssistantAnswer) {
    return lastAssistantAnswer;
  }

  if (!feedbackPanel.hidden) {
    return getFeedbackReadText();
  }

  if (currentJourneyStage === "answer") {
    return getChatInstructionsReadText();
  }

  if (
    currentJourneyStage === "task" &&
    !guidedOptionsPanel.hidden
  ) {
    return getGuidedOptionsReadText();
  }

  if (currentJourneyStage === "service") {
    return getServiceSelectionReadText();
  }

  if (currentJourneyStage === "language") {
    return getLanguageReadText();
  }

  return getIntroReadText();
}

function showRecoveryMessage() {
  const text = getCurrentUiText().systemMessages;

  addMessage("system", text.recoveryTitle, {
    actions: [
      {
        label: text.tryAgain,
        handler: () => {
          if (lastSafeMessage) {
            sendMessage(lastSafeMessage);
          }
        }
      },
      {
        label: text.typeDifferentQuestion,
        handler: focusOwnQuestion
      },
      {
        label: text.chooseAnotherService,
        handler: chooseAnotherServiceFlow
      }
    ]
  });
}


/* Make URLs clickable and convert **text** into bold text */

function appendTextWithLinks(container, text) {
  const tokenPattern =
    /(https?:\/\/[^\s<]+|\*\*[^*]+\*\*)/g;

  const parts = text.split(tokenPattern);

  for (const part of parts) {
    if (!part) {
      continue;
    }

    if (
      part.startsWith("http://") ||
      part.startsWith("https://")
    ) {
      const punctuationMatch = part.match(/[),.;!?]+$/);
      const punctuation = punctuationMatch?.[0] || "";
      const cleanUrl = punctuation
        ? part.slice(0, -punctuation.length)
        : part;

      const link = document.createElement("a");
      link.href = cleanUrl;
      link.textContent = cleanUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      container.appendChild(link);

      if (punctuation) {
        container.appendChild(
          document.createTextNode(punctuation)
        );
      }

      continue;
    }

    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {
      const strong = document.createElement("strong");
      strong.textContent = part.slice(2, -2);
      container.appendChild(strong);
      continue;
    }

    container.appendChild(
      document.createTextNode(part)
    );
  }
}


/* Loading state */

function setLoading(isLoading) {
  requestInProgress = isLoading;
  sendButton.disabled = isLoading;
  chatInput.disabled = isLoading;

  document
    .querySelectorAll(
      ".service-card, [data-language], .guided-option-button, .guided-action-button, .guided-secondary-button"
    )
    .forEach(button => {
      button.disabled = isLoading;
    });

  chatStatus.textContent = "";

  updateVoiceInputButton();

  if (!isLoading) {
    chatInput.focus();
  }
}


/* Extract the answer from different n8n response formats */

function extractReply(data) {
  if (typeof data === "string") {
    try {
      return extractReply(JSON.parse(data));
    } catch {
      return data;
    }
  }

  if (Array.isArray(data)) {
    return data.length ? extractReply(data[0]) : "";
  }

  if (data && typeof data === "object") {
    const preferredKeys = [
      "output",
      "text",
      "message",
      "response"
    ];

    for (const key of preferredKeys) {
      if (typeof data[key] === "string") {
        return data[key];
      }
    }

    return JSON.stringify(data, null, 2);
  }

  return String(data ?? "");
}


/* Detect the likely service for feedback prefilling */

function detectService(question) {
  const value = question.toLowerCase();

  const mappings = [
    ["CDC Vouchers", ["cdc", "voucher"]],
    [
      "Financial Assistance",
      [
        "financial",
        "comcare",
        "household expenses",
        "daily living expenses",
        "money help"
      ]
    ],
    [
      "HealthHub",
      [
        "healthhub",
        "health hub",
        "appointment",
        "health record",
        "lab report",
        "immunisation"
      ]
    ],
    [
      "Singpass",
      [
        "singpass",
        "sing pass",
        "digital identity"
      ]
    ],
    [
      "CHAS",
      [
        "chas",
        "clinic subsidy",
        "dental subsidy"
      ]
    ],
    [
      "LifeSG",
      [
        "lifesg",
        "life sg",
        "government benefits"
      ]
    ],
    [
      "HDB",
      [
        "hdb",
        "flat",
        "housing loan",
        "housing application"
      ]
    ],
    [
      "CPF",
      [
        "cpf",
        "provident fund",
        "retirement savings"
      ]
    ]
  ];

  for (const [service, keywords] of mappings) {
    if (
      keywords.some(keyword => value.includes(keyword))
    ) {
      return service;
    }
  }

  return currentService;
}


/* Guided service menu */

function getGuidedOptionLabel(option) {
  return (
    getCurrentUiText().taskLabels?.[option.id] ||
    translations.English.taskLabels?.[option.id] ||
    option.labels?.[currentLanguage] ||
    option.labels?.English ||
    option.prompt
  );
}

function updateSelectedServiceCard() {
  document
    .querySelectorAll(".service-card")
    .forEach(card => {
      const selected =
        card.dataset.service === currentService;

      card.classList.toggle("is-selected", selected);
      card.setAttribute(
        "aria-pressed",
        String(selected)
      );
    });
}

function renderGuidedOptions(service) {
  const options = guidedServiceOptions[service] || [];
  const text = getCurrentUiText();

  guidedOptionsEyebrow.textContent = text.guidedLabel;
  guidedOptionsTitle.textContent = text.guidedTitle(service);
  guidedOptionsDescription.textContent =
    text.guidedDescription;
  closeGuidedOptions.textContent = text.close;
  chooseAnotherService.textContent = text.chooseAnother;
  guidedOtherQuestion.textContent = text.ownQuestion;

  guidedOptionsList.replaceChildren();

  options.forEach(option => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "guided-option-button";
    button.textContent = getGuidedOptionLabel(option);
    button.dataset.optionId = option.id;

    button.addEventListener("click", () => {
      submitGuidedQuestion(service, option);
    });

    guidedOptionsList.appendChild(button);
  });
}

function showGuidedOptions(service) {
  const options = guidedServiceOptions[service] || [];

  if (!options.length) {
    chatInput.focus();
    return;
  }

  currentService = service;

  localStorage.setItem(
    "govassistService",
    currentService
  );

  updateSelectedServiceCard();
  setServiceListCollapsed(true);
  renderGuidedOptions(service);

  guidedFollowUpPanel.hidden = true;
  guidedOptionsPanel.hidden = false;
  setJourneyStage("task");

  guidedOptionsPanel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  window.setTimeout(() => {
    guidedOptionsList
      .querySelector("button")
      ?.focus({ preventScroll: true });
  }, 250);
}

function hideGuidedOptions() {
  guidedOptionsPanel.hidden = true;
  guidedOptionsList.replaceChildren();
}

function submitGuidedQuestion(service, option) {
  if (requestInProgress) {
    return;
  }

  currentService = service;

  localStorage.setItem(
    "govassistService",
    currentService
  );

  updateSelectedServiceCard();
  chatInput.value = option.prompt;
  hideGuidedOptions();
  setJourneyStage("answer");
  setServiceListCollapsed(true);
  chatForm.requestSubmit();
}

function updateFollowUpLabels() {
  const text = getCurrentUiText();

  guidedFollowUpTitle.textContent = text.followUpTitle;
  moreGuidedHelp.textContent = text.moreHelp(currentService);
  followUpChooseService.textContent = text.chooseAnother;
  followUpTypeQuestion.textContent = text.ownQuestion;
}

function showFollowUpActions() {
  if (!currentService || !guidedServiceOptions[currentService]) {
    guidedFollowUpPanel.hidden = true;
    return;
  }

  updateFollowUpLabels();
  guidedFollowUpPanel.hidden = false;
}

function chooseAnotherServiceFlow() {
  hideGuidedOptions();
  guidedFollowUpPanel.hidden = true;
  setJourneyStage("service");
  setServiceListCollapsed(false);

  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  window.setTimeout(() => {
    document
      .querySelector(".service-card")
      ?.focus({ preventScroll: true });
  }, 350);
}

function backToStartFlow() {
  // Back to Start only changes the visible step; it keeps language and accessibility settings.
  hideGuidedOptions();
  guidedFollowUpPanel.hidden = true;
  setServiceListCollapsed(false);
  setJourneyStage("intro");

  chatIntroSection?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  window.setTimeout(() => {
    startAssistantButton?.focus({ preventScroll: true });
  }, 250);
}

function backToQuestionsFlow() {
  // Back to Questions reopens the choices for the currently selected service.
  if (currentService) {
    showGuidedOptions(currentService);
    return;
  }

  chooseAnotherServiceFlow();
}

function focusOwnQuestion() {
  hideGuidedOptions();
  guidedFollowUpPanel.hidden = true;
  setJourneyStage("answer");
  setServiceListCollapsed(Boolean(currentService));
  chatInput.value = "";

  chatForm.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

  window.setTimeout(() => chatInput.focus(), 250);
}


/* Send a message to n8n */

async function sendMessage(rawMessage, options = {}) {
  const trimmedMessage = rawMessage.trim();

  if (!trimmedMessage || requestInProgress) {
    return;
  }

  if (
    !options.skipSensitiveKeywordWarning &&
    containsSensitiveKeywords(trimmedMessage)
  ) {
    showSensitiveKeywordWarning(trimmedMessage);
    chatInput.focus();
    return;
  }

  if (
    N8N_CHAT_URL.includes("PASTE_") ||
    !N8N_CHAT_URL.startsWith("http")
  ) {
    addMessage(
      "system",
      getCurrentUiText().systemMessages.n8nMissing
    );
    return;
  }

  const { safeMessage, detected } =
    redactSensitiveInformation(trimmedMessage);
  lastSafeMessage = safeMessage;
  lastUserQuestion = safeMessage;

  currentService = detectService(safeMessage);

  if (currentService) {
    localStorage.setItem(
      "govassistService",
      currentService
    );
  }

  updateSelectedServiceCard();
  hideGuidedOptions();
  guidedFollowUpPanel.hidden = true;
  feedbackPanel.hidden = true;
  lastAssistantAnswer = "";
  setJourneyStage("answer");
  setServiceListCollapsed(Boolean(currentService));

  addMessage("user", safeMessage);

  if (detected.length > 0) {
    addMessage(
      "system",
      getCurrentUiText().systemMessages.privacyRemoved
    );
  }

  chatInput.value = "";
  const loadingMessage = addLoadingMessage();
  setLoading(true);

  try {
    const response = await fetch(N8N_CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "sendMessage",
        sessionId,
        chatInput: safeMessage,
        frontendPrivacyDetected:
          detected.length > 0,
        frontendDetectedInformation: detected,
        metadata: {
          source: "govassist-website",
          language: currentLanguage,
          service: currentService
        }
      })
    });

    const contentType =
      response.headers.get("content-type") || "";

    const data = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new Error(
        extractReply(data) ||
          getCurrentUiText().systemMessages.requestFailed(
            response.status
          )
      );
    }

    const reply = extractReply(data).trim();

    if (!reply) {
      throw new Error(
        getCurrentUiText().systemMessages.emptyReply
      );
    }

    loadingMessage.remove();
    lastAssistantAnswer = reply;
    activeReadContext = "answer";
    addMessage("assistant", reply, {
      actions: createGuideActions()
    });

    feedbackPanel.hidden = false;
    showFollowUpActions();
    scheduleAutoReadAloud();
  } catch (error) {
    console.error(error);
    loadingMessage.remove();

    showRecoveryMessage();
  } finally {
    setLoading(false);
  }
}



/* Voice input: converts speech into editable text before sending. */

function getVoiceMessage(key) {
  return (
    getCurrentUiText().systemMessages?.[key] ||
    translations.English.systemMessages?.[key] ||
    ""
  );
}

function getVoiceInputLabel() {
  return getTranslationValue("page.voiceInput") || "Speak";
}

function voiceRecognitionLanguageCode(language) {
  const codes = {
    English: "en-SG",
    // Mandarin-specific code improves Chinese speech input in Chrome/Edge.
    "Simplified Chinese": "cmn-Hans-CN",
    "Bahasa Melayu": "ms-MY",
    Tamil: "ta-SG"
  };

  return codes[language] || "en-SG";
}

function updateVoiceInputButton() {
  if (!voiceInputButton) {
    return;
  }

  const unsupported = !SpeechRecognitionConstructor;
  const label = isVoiceListening
    ? getVoiceMessage("voiceListeningButton") || "Listening..."
    : getVoiceInputLabel();

  voiceInputButton.textContent = label;
  voiceInputButton.disabled = requestInProgress || unsupported;
  voiceInputButton.classList.toggle("is-listening", isVoiceListening);
  voiceInputButton.setAttribute("aria-pressed", String(isVoiceListening));
  voiceInputButton.setAttribute("aria-label", label);

  if (unsupported) {
    voiceInputButton.title =
      getVoiceMessage("voiceInputUnsupported") ||
      "Voice input is not supported by this browser.";
  } else {
    voiceInputButton.removeAttribute("title");
  }
}

function ensureVoiceRecognition() {
  if (!SpeechRecognitionConstructor) {
    chatStatus.textContent =
      getVoiceMessage("voiceInputUnsupported") ||
      "Voice input is not supported by this browser.";
    updateVoiceInputButton();
    return null;
  }

  if (voiceRecognition) {
    return voiceRecognition;
  }

  voiceRecognition = new SpeechRecognitionConstructor();
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = true;
  voiceRecognition.maxAlternatives = 1;

  voiceRecognition.addEventListener("start", () => {
    isVoiceListening = true;
    chatStatus.textContent =
      getVoiceMessage("voiceListening") || "Listening... speak now.";
    updateVoiceInputButton();
  });

  voiceRecognition.addEventListener("result", event => {
    let transcript = "";

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      transcript += event.results[index][0].transcript;
    }

    transcript = transcript.trim();

    if (!transcript) {
      return;
    }

    // Fill the textarea only; users can check the text before pressing Send.
    chatInput.value = voiceInputBaseText
      ? `${voiceInputBaseText} ${transcript}`
      : transcript;
  });

  voiceRecognition.addEventListener("error", event => {
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      chatStatus.textContent =
        getVoiceMessage("voicePermissionDenied") ||
        "Microphone permission was blocked.";
      return;
    }

    if (event.error === "no-speech") {
      chatStatus.textContent =
        getVoiceMessage("voiceNoSpeech") ||
        "I did not hear anything. Please try again.";
    }
  });

  voiceRecognition.addEventListener("end", () => {
    isVoiceListening = false;
    updateVoiceInputButton();
    chatInput.focus();
  });

  return voiceRecognition;
}

function toggleVoiceInput() {
  if (requestInProgress) {
    return;
  }

  const recognition = ensureVoiceRecognition();

  if (!recognition) {
    return;
  }

  if (isVoiceListening) {
    recognition.stop();
    return;
  }

  voiceInputBaseText = chatInput.value.trim();
  recognition.lang = voiceRecognitionLanguageCode(currentLanguage);

  try {
    recognition.start();
  } catch (error) {
    console.error(error);
  }
}

voiceInputButton?.addEventListener("click", toggleVoiceInput);
updateVoiceInputButton();

/* Send normal typed questions */

chatForm.addEventListener("submit", event => {
  event.preventDefault();
  sendMessage(chatInput.value);
});


/* Enter sends, Shift + Enter adds a new line */

chatInput.addEventListener("keydown", event => {
  if (
    event.key === "Enter" &&
    !event.shiftKey
  ) {
    event.preventDefault();
    chatForm.requestSubmit();
  }
});


/* Quick service buttons now open guided task choices */

document
  .querySelectorAll(".service-card")
  .forEach(card => {
    card.addEventListener("click", () => {
      showGuidedOptions(card.dataset.service);
    });
  });


closeGuidedOptions.addEventListener("click", () => {
  chooseAnotherServiceFlow();
});

backToStart?.addEventListener("click", backToStartFlow);

backToServicesFromQuestions?.addEventListener(
  "click",
  chooseAnotherServiceFlow
);

backToQuestions?.addEventListener(
  "click",
  backToQuestionsFlow
);

backToServicesFromChat?.addEventListener(
  "click",
  chooseAnotherServiceFlow
);

chooseAnotherService.addEventListener(
  "click",
  chooseAnotherServiceFlow
);

chooseAnotherServiceTop.addEventListener(
  "click",
  chooseAnotherServiceFlow
);

guidedOtherQuestion.addEventListener(
  "click",
  focusOwnQuestion
);

moreGuidedHelp.addEventListener("click", () => {
  if (currentService) {
    showGuidedOptions(currentService);
  }
});

followUpChooseService.addEventListener(
  "click",
  chooseAnotherServiceFlow
);

followUpTypeQuestion.addEventListener(
  "click",
  focusOwnQuestion
);

feedbackPanel.addEventListener("focusin", () => {
  activeReadContext = "feedback";
  scheduleAutoReadAloud();
});

feedbackPanel.addEventListener("pointerenter", () => {
  activeReadContext = "feedback";
  scheduleAutoReadAloud();
});


/* Language buttons */

function updateLanguageControls() {
  const text = getCurrentUiText();
  document.documentElement.lang =
    languageHtmlCode(currentLanguage);
  applyInterfaceTranslations();
  selectedLanguageText.textContent = hasChosenLanguage
    ? text.selectedLanguage
    : text.languagePrompt;
  pauseReadAloud.textContent =
    `⏸️ ${text.systemMessages.pauseReading}`;
  continueReadAloud.textContent =
    `▶️ ${text.systemMessages.continueReading}`;
  stopReadAloud.textContent =
    `🛑 ${text.systemMessages.stopReading}`;
  updateVoiceInputButton();

  document
    .querySelectorAll("[data-language]")
    .forEach(button => {
      const selected =
        hasChosenLanguage &&
        button.dataset.language === currentLanguage;

      button.classList.toggle(
        "is-selected",
        selected
      );

      button.setAttribute(
        "aria-pressed",
        String(selected)
      );
    });

  if (!guidedOptionsPanel.hidden && currentService) {
    renderGuidedOptions(currentService);
  }

  if (!guidedFollowUpPanel.hidden) {
    updateFollowUpLabels();
  }

  if (requestInProgress) {
    chatStatus.textContent = "";
  }

  updateWelcomeMessage();
}


document
  .querySelectorAll("[data-language]")
  .forEach(button => {
    button.addEventListener("click", () => {
      currentLanguage = button.dataset.language;
      hasChosenLanguage = true;

      localStorage.setItem(
        "govassistLanguage",
        currentLanguage
      );

      updateLanguageControls();

      if (currentJourneyStage === "language") {
        setJourneyStage("intro");
        document.getElementById("chatIntro")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

startAssistantButton?.addEventListener("click", () => {
  if (!hasChosenLanguage) {
    document
      .querySelector("[data-language]")
      ?.focus({ preventScroll: false });
    return;
  }

  setJourneyStage("service");
  setServiceListCollapsed(false);

  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


/* Start a fresh conversation */

document
  .getElementById("newConversation")
  .addEventListener("click", () => {
    if (requestInProgress) {
      return;
    }

    sessionId =
      window.crypto?.randomUUID?.() ||
      `govassist-${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`;

    localStorage.setItem(
      "govassistSessionId",
      sessionId
    );

    localStorage.removeItem("govassistService");
    currentService = "";

    messages.replaceChildren();
    feedbackPanel.hidden = true;
    guidedFollowUpPanel.hidden = true;
    hideGuidedOptions();
    updateSelectedServiceCard();
    setJourneyStage("service");
    setServiceListCollapsed(false);

    lastAssistantAnswer = "";
    lastUserQuestion = "";
    chatInput.value = "";
    chatStatus.textContent = "";

    addWelcomeMessage();

    document
      .querySelector(".service-card")
      ?.focus({ preventScroll: true });
  });


/* Accessibility controls */

document
  .getElementById("increaseText")
  .addEventListener("click", () => {
    currentFontScale = Math.min(
      currentFontScale + 10,
      FONT_MAX_SCALE
    );

    applyFontSize();
  });


document
  .getElementById("decreaseText")
  .addEventListener("click", () => {
    currentFontScale = Math.max(
      currentFontScale - 10,
      FONT_MIN_SCALE
    );

    applyFontSize();
  });


document
  .getElementById("resetText")
  .addEventListener("click", () => {
    currentFontScale = FONT_DEFAULT_SCALE;
    applyFontSize();
    localStorage.removeItem(FONT_SCALE_KEY);
  });


function applyFontSize() {
  const clampedScale = Math.min(
    FONT_MAX_SCALE,
    Math.max(FONT_MIN_SCALE, currentFontScale)
  );

  currentFontScale = clampedScale;

  pageContent?.style.setProperty(
    "--page-content-scale",
    `${clampedScale}%`
  );

  localStorage.setItem(FONT_SCALE_KEY, String(clampedScale));
  localStorage.removeItem(LEGACY_FONT_SIZE_KEY);

  if (chatTextSize) {
    chatTextSize.textContent = `Text Size: ${clampedScale}%`;
  }

  increaseTextButton.disabled = clampedScale >= FONT_MAX_SCALE;
  decreaseTextButton.disabled = clampedScale <= FONT_MIN_SCALE;
}


document
  .getElementById("contrastButton")
  .addEventListener("click", event => {
    const enabled =
      document.body.classList.toggle(
        "high-contrast"
      );

    localStorage.setItem(
      "govassistHighContrast",
      String(enabled)
    );

    event.currentTarget.setAttribute(
      "aria-pressed",
      String(enabled)
    );
  });


/* Read the current context aloud */

document
  .getElementById("readAloud")
  .addEventListener("click", () => {
    if (!canUseSpeech()) {
      return;
    }

    autoReadAloudEnabled = true;
    const readText = getReadAloudText();

    if (!readText) {
      addMessage(
        "system",
        getCurrentUiText().systemMessages.noAnswerToRead
      );
      return;
    }

    speakAnswer(readText);
  });

pauseReadAloud.addEventListener("click", pauseSpeech);
continueReadAloud.addEventListener("click", continueSpeech);
stopReadAloud.addEventListener("click", stopSpeech);


function languageSpeechCode(language) {
  const codes = {
    English: "en-SG",
    "Simplified Chinese": "zh-CN",
    "Bahasa Melayu": "ms-MY",
    Tamil: "ta-SG"
  };

  return codes[language] || "en-SG";
}


/* Build the feedback form URL */

function buildFeedbackUrl(helpfulValue = "") {
  if (
    FEEDBACK_URL.includes("PASTE_") ||
    !FEEDBACK_URL.startsWith("http")
  ) {
    return "";
  }

  const url = new URL(FEEDBACK_URL);

  if (currentService) {
    url.searchParams.set(
      "Service",
      currentService
    );
  }

  url.searchParams.set(
    "Language",
    currentLanguage
  );

  if (helpfulValue) {
    url.searchParams.set(
      "Helpful",
      helpfulValue
    );
  }

  return url.toString();
}


function openFeedback(helpfulValue = "") {
  const url = buildFeedbackUrl(helpfulValue);

  if (!url) {
    addMessage(
      "system",
      getCurrentUiText().systemMessages.feedbackMissing
    );
    return;
  }

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* Yes, Partly and No feedback buttons */

document
  .querySelectorAll("[data-helpful]")
  .forEach(button => {
    button.addEventListener("click", () => {
      openFeedback(button.dataset.helpful);
    });
  });


/* Detailed feedback button */

document
  .getElementById("detailedFeedback")
  .addEventListener("click", () => {
    openFeedback();
  });


/* First welcome message */

addWelcomeMessage();
