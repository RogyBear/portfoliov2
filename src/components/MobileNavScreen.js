import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../contexts/NavContext';
import { LanguageContext, LanguageProvider } from '../contexts/LanguageContext';
export default function MobileNavScreen() {
	const { isOpen, setIsOpen } = useContext(NavContext);
	const { lang, english, russian, handleLang } = useContext(LanguageContext);
	const [ onLoad, setOnLoad ] = useState(false);
	const en = english.main;
	const ru = russian.main;
	return (
		<div className={isOpen ? 'mobile--screen scaler' : ' mobile--screen'}>
			<ul className={isOpen ? 'mobile--screen__list scaler' : ' mobile--screen__list'}>
				<li className={isOpen ? 'mobile--screen__list__item scaler' : ' mobile--screen__list__item'}>
					<Link
						to="/"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						{lang ? en.home : ru.home}
					</Link>
				</li>
				<li
					className={isOpen ? 'mobile--screen__list__item scaler' : ' mobile--screen__list__item'}
					onClick={handleLang}
				>
					{lang ? en.language : ru.language}
				</li>
				<li className={isOpen ? 'mobile--screen__list__item scaler' : ' mobile--screen__list__item'}>
					<a
						href="#contact"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						{lang ? en.contact : ru.contact}
					</a>
				</li>
				<li className={isOpen ? 'mobile--screen__list__item scaler' : ' mobile--screen__list__item'}>
					<Link
						to="/about"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						{lang ? en.about : ru.about}
					</Link>
				</li>
				<li className={isOpen ? 'mobile--screen__list__item scaler' : ' mobile--screen__list__item'}>
					{lang ? en.resume : ru.resume}
				</li>
			</ul>
		</div>
	);
}
