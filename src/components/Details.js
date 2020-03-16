import React, { Fragment, useState, useContext } from 'react';
import Contact from './Contact';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { Waypoint } from 'react-waypoint';
import ScrollToTop from './ScrollToTop';
export default function Details(props) {
	const { lang, english, russian } = useContext(LanguageContext);
	const [ style, setStyle ] = useState({ sectionTwo: false, sectionThree: false });
	const pathname = useLocation();
	const en = english;
	const ru = russian;
	let newPath = pathname.pathname.slice(1);
	let demoLink;
	let sourceLink;
	let links = {
		birds: { demo: 'https://www.2birdswedding.com', source: 'https://github.com/RogyBear/2Birds' },
		jack: { demo: 'https://www.blackjackcontracting.com', source: 'https://github.com/RogyBear/Blackjack' },
		konin: { demo: 'http://evgeniykonin.ru/', source: 'https://github.com/RogyBear/Konin' }
	};
	const handleWaypointOne = () => {
		setStyle((prevState) => ({
			...prevState,
			sectionTwo: true
		}));
	};
	const handleWaypointTwo = () => {
		setStyle((prevState) => ({
			...prevState,
			sectionThree: true
		}));
	};

	if (newPath === '2birdswedding') {
		demoLink = links.birds.demo;
		sourceLink = links.birds.source;
	} else if (newPath === 'blackjack') {
		demoLink = links.jack.demo;
		sourceLink = links.jack.source;
	} else {
		demoLink = links.konin.demo;
		sourceLink = links.konin.source;
	}
	return (
		<Fragment>
			<ScrollToTop />
			<div className="details">
				<h2 className="details__title">{lang ? en[newPath].title : ru[newPath].title}</h2>
				<div className="details__btns">
					<a href={demoLink} className="details__btns__link">
						<svg width="25" height="25" viewBox="0 0 60 60" fill="none" style={{ marginRight: '7px' }}>
							<path
								d="M50 45C52.75 45 54.975 42.75 54.975 40L55 15C55 12.25 52.75 10 50 10H10C7.25 10 5 12.25 5 15V40C5 42.75 7.25 45 10 45H0V50H60V45H50ZM10 15H50V40H10V15Z"
								fill="#F0F0F0"
							/>
						</svg>
						{lang ? en.demo : ru.demo}
					</a>
					<a href={sourceLink} className="details__btns__link">
						<svg width="25" height="25" viewBox="0 0 60 60" fill="none" style={{ marginRight: '7px' }}>
							<path
								d="M23.5 41.5L12 30L23.5 18.5L20 15L5 30L20 45L23.5 41.5ZM36.5 41.5L48 30L36.5 18.5L40 15L55 30L40 45L36.5 41.5Z"
								fill="#F0F0F0"
							/>
						</svg>
						{lang ? en.code : ru.code}
					</a>
				</div>
				<div className="details__section section-one">
					<div className="details__section__text">
						<p className="details__section__text__paragraph">
							{' '}
							{lang ? en[newPath].sectionOne.description : ru[newPath].sectionOne.description}
						</p>
					</div>
					<div className="details__section__img sectionOne__img">
						<img
							src={require(`../static/${[ newPath ]}Iphone.png`)}
							className="details__section__img__content sectionOne__img__content"
						/>
					</div>
				</div>
				<div className="details__section sectionTwo">
					<div
						className={
							style.sectionTwo ? (
								'details__section__text sectionTwo__text fade-in-right'
							) : (
								'details__section__text'
							)
						}
					>
						<h3 className="details__section__title">
							{lang ? en[newPath].sectionTwo.title : ru[newPath].sectionTwo.title}
						</h3>
						<p className="details__section__text__tech">
							{lang ? en[newPath].sectionTwo.tech : ru[newPath].sectionTwo.tech}
						</p>
					</div>
					<Waypoint onEnter={handleWaypointOne}>
						<div
							className={
								style.sectionTwo ? (
									'details__section__img sectionTwo__img fade-in-left'
								) : (
									'details__section__img sectionTwo__img'
								)
							}
							style={style.sectionTwo === true ? { opacity: 1 } : {}}
						>
							<img
								src={require(`../static/${[ newPath ]}Tablet.png`)}
								className="details__section__img__content sectionTwo__img__content"
							/>
						</div>
					</Waypoint>
				</div>
				<div className="details__section section-three">
					<div
						className={
							style.sectionThree ? (
								'details__section__text sectionThree__text fade-in-left'
							) : (
								'details__section__text sectionThree__text'
							)
						}
					>
						<h3 className="details__section__title">
							{lang ? en[newPath].sectionThree.title : ru[newPath].sectionThree.title}
						</h3>

						<ul className="details__section__text__list">
							<li className="details__section__text__list__item">
								{lang ? en[newPath].sectionThree.featureOne : ru[newPath].sectionThree.featureOne}
							</li>
							<li className="details__section__text__list__item">
								{lang ? en[newPath].sectionThree.featureTwo : ru[newPath].sectionThree.featureTwo}
							</li>
							<li className="details__section__text__list__item">
								{lang ? en[newPath].sectionThree.featureThree : ru[newPath].sectionThree.featureThree}
							</li>
							<li className="details__section__text__list__item">
								{lang ? en[newPath].sectionThree.featureFour : ru[newPath].sectionThree.featureFour}
							</li>
							<li className="details__section__text__list__item">
								{lang ? en[newPath].sectionThree.featureFive : ru[newPath].sectionThree.featureFive}
							</li>
						</ul>
					</div>
					<Waypoint onEnter={handleWaypointTwo}>
						<div
							className={
								style.sectionThree ? (
									'details__section__img sectionThree__img fade-in-right'
								) : (
									'details__section__img sectionThree__img'
								)
							}
						>
							<img
								src={require(`../static/${[ newPath ]}Desktop.png`)}
								className="details__section__img__content sectionThree__img__content"
							/>
						</div>
					</Waypoint>
				</div>
			</div>

			<Contact />
		</Fragment>
	);
}
