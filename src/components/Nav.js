import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import MobileNav from './MobileNav';

export default function Nav() {
	const { lang, handleLang, english, russian } = useContext(LanguageContext);
	const en = english.main;
	const ru = russian.main;
	return (
		<nav className="nav">
			<div className="nav__arrow">
				<div className="nav__arrow__translation" style={lang ? {} : {right: '150px'}}>
					<svg
						className="nav__arrow__translation__arrow"
						width="67"
						height="62"
						viewBox="0 0 67 62"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M47.9602 45.5746L48.0462 44.5783L48.0462 44.5783L47.9602 45.5746ZM14.5025 13.8491L15.4928 13.7102L15.4928 13.7102L14.5025 13.8491ZM13.4434 1.20158C13.0024 0.86906 12.3754 0.95697 12.0428 1.39793L6.62411 8.58384C6.29159 9.02481 6.3795 9.65184 6.82046 9.98436C7.26143 10.3169 7.88846 10.229 8.22098 9.78801L13.0376 3.40053L19.4251 8.21718C19.8661 8.5497 20.4931 8.46179 20.8256 8.02083C21.1581 7.57987 21.0702 6.95283 20.6293 6.62031L13.4434 1.20158ZM65.4354 46.0803L48.0462 44.5783L47.8741 46.5709L65.2633 48.0729L65.4354 46.0803ZM15.4928 13.7102L13.8316 1.86117L11.851 2.13886L13.5122 13.9879L15.4928 13.7102ZM48.0462 44.5783C31.3267 43.1342 17.8229 30.3294 15.4928 13.7102L13.5122 13.9879C15.9717 31.5304 30.2258 45.0465 47.8741 46.5709L48.0462 44.5783Z"
							fill="#F0F0F0"
						/>
					</svg>
					<p className="nav__arrow__translation__text">{lang ? en.click : ru.click}</p>
				</div>
			</div>

			<ul className="nav__list">
				<li className="nav__list__item">
					<Link className="nav__list__item__link" to="/about">
						{lang ? en.about : ru.about}
					</Link>
				</li>
				<li className="nav__list__item language-change" onClick={handleLang}>
					<button className="nav__list__item__link btn btn-en">{!lang ? 'EN /' : 'РУ /'}</button>
					<button className="nav__list__item__link btn btn-ru">{lang ? 'EN ' : 'РУ'}</button>
				</li>
				<li className="nav__list__item">
					<a className="nav__list__item__link" href="#contact">
						{lang ? en.contact : ru.contact}
					</a>
				</li>
				<li className="nav__list__item">
					<Link className="nav__list__item__link resume" to="/resume">
						{lang ? 'Resume' : 'Резюме'}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
