import React, { Fragment, useContext } from 'react';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import { LanguageContext } from '../contexts/LanguageContext';
export default function About() {
	const { lang, english, russian } = useContext(LanguageContext);
	const en = english.about;
	const ru = russian.about;
	let translation;
	if (lang) {
		translation = english.about;
	} else {
		translation = russian.about;
	}
	return (
		<Fragment>
			<div className="about">
				<div className="about__text">
					{translation.hello} <span className="about__text__outline">{translation.aaron}</span>.{' '}
					{translation.i} <span className="about__text__outline">{translation.frontEnd}</span>{' '}
					{translation.web} <span className="about__text__outline">{translation.react} </span>
					{translation.and} <span className="about__text__outline">{translation.next}</span>,{' '}
					{translation.but} <span className="about__text__outline"> {translation.love}</span>{' '}
					{translation.tech}
					<span className="about__text__outline">{translation.language}</span> {translation.languageReverse}
				</div>
			</div>
			<Contact />
			<ScrollToTop />
		</Fragment>
	);
}
