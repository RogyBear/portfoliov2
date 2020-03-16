import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
	const english = {
		demo: 'Live Demo',
		code: 'Source Code',
		'2birdswedding': {
			title: '2 Birds Wedding',

			sectionOne: {
				description:
					'Developed a responsive site for 2 Birds Wedding company. They provided me the designs, and I turned it into code. The site is entirely multilingual (English and Russian) includes a custom built shopping cart and is responsive. The backend was built with Strapi and the front-end with React/Next.js. '
			},
			sectionTwo: {
				title: 'Technology',
				tech: ' React, Next.js, HTML5, SASS, Strapi (backend), Axios, Context.js'
			},
			sectionThree: {
				title: 'Features',
				featureOne: 'Responsive Design',
				featureTwo: 'Multilingual',
				featureThree: 'Shopping Cart',
				featureFour: 'CMS Integration',
				featureFive: 'Server Side Rendering'
			}
		},
		blackjack: {
			title: 'BlackJack',
			sectionOne: {
				description:
					'Developed a responsive site for BlackJack Contacting, a construction company based in Portland, Oregon. The design was created by Dasha Ogneva using Adobe Photoshop and Illustrator. The backend (CMS) was built with Strapi and the frontend with React/Next.js'
			},
			sectionTwo: {
				title: 'Technology',
				tech: ' React, Next.js, HTML5, SASS, Strapi (backend), Axios, Context.js'
			},
			sectionThree: {
				title: 'Features',
				featureOne: 'Responsive Design',
				featureTwo: 'Integrated Contact Form',
				featureThree: 'CMS Integration',
				featureFour: 'Keyframe Animations',
				featureFive: 'Server Side Rendering'
			}
		},
		konin: {
			title: 'Evgeniy Konin',
			sectionOne: {
				description:
					'Developed a website while working as an intern at Kolibri. The design was created by the company using Figma. This was the first "real" project that I completed after having started programming 4 months earlier. I wanted to try out React, so the Calendar component as well as the carousels were built with React. '
			},
			sectionTwo: {
				title: 'Technology',
				tech: ' Vanilla Javascript, HTML5, SASS, React'
			},
			sectionThree: {
				title: 'Features',
				featureOne: 'Responsive Design',
				featureTwo: 'Cool Animations',
				featureThree: 'Custom Calendar Built Using Gmail API',
				featureFour: 'Dynamic Image Carousel',
				featureFive: 'Custom Carousel Built on React'
			}
		},
		main: {
			home: 'Home',
			language: 'ENG',
			contact: 'Contact',
			about: 'About',
			resume: 'Resume',
			click: 'Click here for Russian'
		},
		home: {
			lineOne: "Hey! My name is Aaron and I'm a...",
			lineTwo: 'Front-end',
			lineThree: 'Web Developer ',
			lineFour: '...scroll down to see my portfolio '
		},
		projects: {
			'2birds': '2 Birds',
			wedding: 'Wedding',
			black: 'Black',
			jack: 'Jack',
			evgeniy: 'Evgeniy',
			konin: 'Konin',
			mobile: 'Mobile',
			tablet: 'Tablet',
			laptop: 'Laptop'
		},
		contact: {
			c: 'C',
			on: 'on',
			ta: 'ta',
			t: 't',
			name: 'name',
			email: 'Email',
			subject: 'subject',
			message: 'message',
			submit: 'send'
		},
		about: {
			hello: 'Hey! My name is',
			aaron: 'Aaron',
			i: 'I am a',
			frontEnd: 'front end',
			web: 'web developer from Portland, Oregon. I mainly code in',
			react: 'React',
			and: 'and',
			next: 'Next.js',
			but: 'but',
			love: 'I love to learn',
			tech: 'new technologies too. I spreche zie',
			language: ' русский',
			languageReverse: '(Russian) and I like to travel.'
		}
	};
	const russian = {
		demo: 'Перейти на сайт',
		code: 'Посмотреть код',
		'2birdswedding': {
			title: '2 Birds Wedding',

			sectionOne: {
				description:
					'Developed a responsive site for 2 Birds Wedding company. They provided me the designs, and I turned it into code. The site is entirely multilingual (English and Russian) includes a custom built shopping cart and is responsive. The backend was built with Strapi and the front-end with React/Next.js. '
			},
			sectionTwo: {
				title: 'Технология',
				tech: ' React, Next.js, HTML5, SASS, Strapi (backend), Axios, Context.js'
			},
			sectionThree: {
				title: 'Features',
				featureOne: 'Responsive Design',
				featureTwo: 'Multilingual',
				featureThree: 'Shopping Cart',
				featureFour: 'CMS Integration',
				featureFive: 'Server Side Rendering'
			}
		},
		blackjack: {
			title: 'BlackJack',
			sectionOne: {
				description:
					'Developed a responsive site for BlackJack Contacting, a construction company based in Portland, Oregon. The design was created by Dasha Ogneva using Adobe Photoshop and Illustrator. The backend (CMS) was built with Strapi and the frontend with React/Next.js'
			},
			sectionTwo: {
				title: 'Технология',
				tech: ' Реакт, Next.js, HTML5, SASS, Strapi (backend), Axios, Context.js'
			},
			sectionThree: {
				title: 'Характеристики',
				featureOne: 'Адаптивный дизайн',
				featureTwo: 'Интеграция с контактной формой',
				featureThree: 'CMS Интеграция',
				featureFour: 'Анимации Keyframe',
				featureFive: 'Серверный рендеринг'
			}
		},
		konin: {
			title: 'Evgeniy Konin',
			sectionOne: {
				description:
					'Developed a website while working as an intern at Kolibri. The design was created by the company using Figma. This was the first "real" project that I completed after having started programming 4 months earlier. I wanted to try out React, so the Calendar component as well as the carousels were built with React. '
			},
			sectionTwo: {
				title: 'Technology',
				tech: ' Ванильный Javascript, HTML5, SASS, Реакт'
			},
			sectionThree: {
				title: 'Характеристики',
				featureOne: 'Адаптивный дизайн',
				featureTwo: 'Классные анимации',
				featureThree: 'Custom Calendar Built Using Gmail API',
				featureFour: 'Dynamic Image Carousel',
				featureFive: 'Custom Carousel Built on React'
			}
		},

		main: {
			home: 'Главная',
			language: 'РУС',
			contact: 'Контакты',
			about: 'Обо мне',
			resume: 'Резюме',
			click: 'Нажмите сюда для английского'
		},

		home: {
			lineOne: 'Привет! Меня зовут Арон, и я...',
			lineTwo: 'Фронт-енд',
			lineThree: 'Разработчик',
			lineFour: '...листайте вниз, чтобы увидить мое фортфолио'
		},

		projects: {
			'2birds': '2 Бэрдс',
			wedding: 'Веддинг',
			black: 'Блэк',
			jack: 'джек',
			evgeniy: 'Евгений',
			konin: 'Конин',
			mobile: 'Мобильный',
			tablet: 'Планшет',
			laptop: 'Ноутбук'
		},

		contact: {
			c: 'К',
			on: 'онт',
			ta: 'а',
			t: 'ты',
			name: 'Имя',
			email: 'почта',
			subject: 'Тема',
			message: 'сообщение',
			submit: 'Отправить'
		},
		about: {
			hello: 'Привет! Меня зовут',
			aaron: 'Арон',
			i: 'Я -',
			frontEnd: 'фронт-енд',
			web: 'разработчик из Портленда. В основном, я программирую в',
			react: 'Риакте',
			and: 'и',
			next: 'Некст',
			but: 'но',
			love: 'Я люблю учить',
			tech: 'новые языки. Я говорю по-',
			language: 'English',
			languageReverse: '(по-английски) и люблю путешествовать.'
		}
	};
	const [ lang, setLang ] = useState(true);
	const [ curLang, setCurLang ] = useState({ english, russian });

	const handleLang = () => {
		setLang(!lang);
	};

	return (
		<LanguageContext.Provider value={{ lang, setLang, handleLang, curLang, russian, english }}>
			{props.children}
		</LanguageContext.Provider>
	);
}
