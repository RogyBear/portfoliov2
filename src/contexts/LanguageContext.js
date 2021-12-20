import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const english = {
    demo: "Live Demo",
    code: "Source Code",
    "2birdswedding": {
      title: "2 Birds Wedding",

      sectionOne: {
        description:
          "Developed a responsive site for 2 Birds Wedding company. They provided me the designs, and I turned it into code. The site is entirely multilingual (English and Russian) includes a custom built shopping cart and is responsive. The backend was built with Strapi and the front-end with React/Next.js. ",
      },
      sectionTwo: {
        title: "Technology",
        tech: " React, Next.js, HTML5, SASS, Strapi (backend), Axios, Context.js",
      },
      sectionThree: {
        title: "Features",
        featureOne: "Responsive Design",
        featureTwo: "Multilingual",
        featureThree: "Shopping Cart",
        featureFour: "CMS Integration",
        featureFive: "Server Side Rendering",
      },
    },
    blackjack: {
      title: "BlackJack",
      sectionOne: {
        description:
          "Developed a responsive site for BlackJack Contacting, a construction company based in Portland, Oregon. The design was created by Dasha Ogneva using Adobe Photoshop and Illustrator. The backend (CMS) was built with Strapi and the frontend with React/Next.js.",
      },
      sectionTwo: {
        title: "Technology",
        tech: " React, Next.js, HTML5, SASS, Strapi (backend), Axios, Context.js",
      },
      sectionThree: {
        title: "Features",
        featureOne: "Responsive Design",
        featureTwo: "Integrated Contact Form",
        featureThree: "CMS Integration",
        featureFour: "Keyframe Animations",
        featureFive: "Server Side Rendering",
      },
    },
    konin: {
      title: "Evgeniy Konin",
      sectionOne: {
        description:
          'Developed a website while working as an intern at Kolibri. The design was created by the company using Figma. This was the first "real" project that I completed after having started programming 4 months earlier. I wanted to try out React, so the Calendar component as well as the carousels were built with React. ',
      },
      sectionTwo: {
        title: "Technology",
        tech: " Vanilla Javascript, HTML5, SASS, React",
      },
      sectionThree: {
        title: "Features",
        featureOne: "Responsive Design",
        featureTwo: "Cool Animations",
        featureThree: "Custom Calendar Built Using Gmail API",
        featureFour: "Dynamic Image Carousel",
        featureFive: "Custom Carousel Built on React",
      },
    },
    main: {
      home: "Home",
      language: "ENG",
      contact: "Contact",
      about: "About",
      resume: "Download\nResume",
      click: "Click here for Russian",
    },
    home: {
      lineOne: "Hey! My name is Aaron and I'm a...",
      lineTwo: "Full Stack",
      lineThree: "Web Developer ",
      lineFour: "...scroll down to see my portfolio ",
    },
    projects: {
      "2birds": "2 Birds",
      wedding: "Wedding",
      black: "Black",
      jack: "Jack",
      evgeniy: "Evgeniy",
      konin: "Konin",
      mobile: "Mobile",
      tablet: "Tablet",
      laptop: "Laptop",
      details: "Details",
      demo: "Demo",
      code: "Code",
    },
    contact: {
      c: "C",
      on: "on",
      ta: "ta",
      t: "t",
      name: "name",
      email: "Email",
      subject: "subject",
      message: "message",
      submit: "send",
      send: "Your message was successfully sent",
    },
    about: {
      hello: "Hey! My name is",
      aaron: "Aaron",
      i: "I am a",
      frontEnd: "front end",
      web: "web developer from Portland, Oregon. I mainly code in",
      react: "React",
      and: "and",
      next: "Next.js",
      but: "but",
      love: "I love to learn",
      tech: "new technologies too. I spreche zie",
      language: " русский",
      languageReverse: "(Russian) and I like to travel.",
    },
  };
  const russian = {
    demo: "Перейти на сайт",
    code: "Посмотреть код",
    "2birdswedding": {
      title: "2 Birds Wedding",

      sectionOne: {
        description:
          "Я создал этот веб-сайт для 2 Birds Wedding. Клиенты сами разработали дизайн, и я написал под него код. Веб-сайт двуязычный (на английском и русском языках), включает в себя корзину и работает на всех устройствах. Бэкенд был построен с помощью Strapi, фронтенд - с помощью React и Next.js.",
      },
      sectionTwo: {
        title: "Технология",
        tech: " React, Next.js, HTML5, SASS, Strapi (бэкенд), Axios, Context.js",
      },
      sectionThree: {
        title: "Характеристики",
        featureOne: "Адаптивный дизайн",
        featureTwo: "Двуязычный",
        featureThree: "Корзина",
        featureFour: "Интеграция с админкой",
        featureFive: "Серверный рендеринг",
      },
    },
    blackjack: {
      title: "BlackJack",
      sectionOne: {
        description:
          "Этот веб-сайт разработан для BlackJack - строительной компании в Портленде, штат Орегон. Дизайн был создан Дарьей Огневой с использованием Photoshop и Illustrator. Весь бэкенд построен с помощью Strapi, фронтенд - с помощью React и Next.js.",
      },
      sectionTwo: {
        title: "Технология",
        tech: " React, Next.js, HTML5, SASS, Strapi (бэкенд), Axios, Context.js",
      },
      sectionThree: {
        title: "Характеристики",
        featureOne: "Адаптивный дизайн",
        featureTwo: "Интеграция с контактной формой",
        featureThree: "CMS-интеграция",
        featureFour: "Анимации Keyframes",
        featureFive: "Серверный рендеринг",
      },
    },
    konin: {
      title: "Евгений Конин",
      sectionOne: {
        description:
          'Данный сайт я разработал во время стажировки в рекламном агентстве «Колибри». Этот проект был первым "настоящим" после самостоятельного изучения программирования в течение четырех месяцев. Я хотел немного поэкспериментировать с react, поэтому создал компоненты "Календарь" и "Карусель"',
      },
      sectionTwo: {
        title: "Технология",
        tech: "Ванильный Javascript, HTML5, SASS, React",
      },
      sectionThree: {
        title: "Характеристики",
        featureOne: "Адаптивный дизайн",
        featureTwo: "Классные анимации",
        featureThree: "Календарь построен с помощью Gmail API",
        featureFour: "Оригинальные дизайн и стиль",
        featureFive: "Карусель построена с помощью React ",
      },
    },

    main: {
      home: "Главная",
      language: "РУС",
      contact: "Контакты",
      about: "Обо мне",
      resume: "Скачать\nрезюме",
      click: "Переключить на английский",
    },

    home: {
      lineOne: "Привет! Меня зовут Арон, я...",
      lineTwo: "Фулстак",
      lineThree: "Разработчик",
      lineFour: "...прокрутите вниз, чтобы посмотреть мое портфолио",
    },

    projects: {
      "2birds": "2 Birds",
      wedding: "Wedding",
      black: "Black",
      jack: "Jack",
      evgeniy: "Евгений",
      konin: "Конин",
      mobile: "Моб.",
      tablet: "Планшет",
      laptop: "Ноутбук",
      details: "Подробости",
      demo: "Демо",
      code: "Код",
    },

    contact: {
      c: "К",
      on: "он",
      ta: "та",
      t: "т",
      name: "Имя",
      email: "почта",
      subject: "Тема",
      message: "сообщение",
      submit: "Отправить",
      send: "Ваше сообщение успешно отправлено",
    },
    about: {
      hello: "Привет! Меня зовут",
      aaron: "Арон",
      i: "Я",
      frontEnd: "фронтенд-",
      web: "разработчик из Портленда. В основном я программирую в",
      react: "React",
      and: "и",
      next: "Next.js",
      but: "но",
      love: "Люблю учить",
      tech: "новые языки. Я говорю по-",
      language: "English",
      languageReverse: "(по-английски), и мне нравится путешествовать.",
    },
  };

  const [lang, setLang] = useState(true);
  const [curLang, setCurLang] = useState({ english, russian });

  const handleLang = () => {
    setLang(!lang);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, handleLang, curLang, russian, english }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}
