import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../contexts/LanguageContext';
import Tilt from 'react-tilt';
export default function Project(props) {
	//Contexts
	const { lang, english, russian } = useContext(LanguageContext);
	const en = english.projects;
	const ru = russian.projects;
	// State
	const [ hovItem, sethovItem ] = useState(' ');
	const [ picSelect, setpicSelect ] = useState(0);
	const [ project, setProject ] = useState({});

	// Picture Arrays
	let deviceType = [ 'mobile', 'tablet', 'laptop' ];
	let device = [ 'Iphone', 'Tablet', 'Desktop' ];
	let category = [ '2birdswedding', 'blackjack', 'konin' ];
	//Functions for setting state

	const handlePic = (e) => {
		const { value } = e.target;
		if (value === 0) {
			setpicSelect(0);
		} else if (value === 1) {
			setpicSelect(1);
		} else if (value === 2) {
			setpicSelect(2);
		}
	};

	const handleHover = (e) => {
		const { value } = e.target;
		if (value === 1) {
			sethovItem('2birdswedding');
		} else if (value === 2) {
			sethovItem('blackjack');
		} else if (value === 3) {
			sethovItem('konin');
		}
	};

	return (
		<div className="project">
			<div className="project__wrapper">
				<ul className="project__list">
					<li className="project__list__item" value="1" onMouseOver={handleHover} onTouchStart={handleHover}>
						{lang ? en['2birds'] : ru['2birds']}{' '}
						<span
							className={
								hovItem === '2birdswedding' ? (
									`project__list__item__outline--mask`
								) : (
									`project__list__item__outline`
								)
							}
							data-text={lang ? en.wedding : ru.wedding}
						>
							{lang ? en.wedding : ru.wedding}
						</span>
						<div
							className="project__list__item__btn"
							style={
								hovItem === '2birdswedding' ? (
									{ opacity: 1, visibility: 'visible', transition: '300ms' }
								) : (
									{ opacity: 0, visibility: 'hidden', transition: '300ms' }
								)
							}
						>
							<a href="https://www.2birdswedding.com/" className="project__list__item__btn__link">
								Demo
							</a>
							<a href="https://github.com/RogyBear/2Birds" className="project__list__item__btn__link">
								Code
							</a>
							<Link to="/2birdswedding" style={{ textDecoration: 'none', color: '#f0f0f0' }}>
								<span className="project__list__item__btn__link">Details</span>
							</Link>
						</div>
					</li>

					<li
						className="project__list__item"
						value="2"
						onMouseEnter={handleHover}
						onTouchStart={handleHover}
						onClick={handleHover}
					>
						{lang ? en.black : ru.black}
						<span
							className={
								hovItem === 'blackjack' ? (
									`project__list__item__outline--mask`
								) : (
									`project__list__item__outline`
								)
							}
							data-text={lang ? en.jack : ru.jack}
						>
							{lang ? en.jack : ru.jack}
						</span>
						<div
							className="project__list__item__btn"
							style={
								hovItem === 'blackjack' ? (
									{ opacity: 1, visibility: 'visible', transition: '300ms' }
								) : (
									{ opacity: 0, visibility: 'hidden', transition: '300ms' }
								)
							}
						>
							<a href="https://www.blackjackcontracting.com/" className="project__list__item__btn__link">
								Demo
							</a>
							<a href="https://github.com/RogyBear/Blackjack" className="project__list__item__btn__link">
								Code
							</a>
							<Link to="/blackjack" style={{ textDecoration: 'none', color: '#f0f0f0' }}>
								<span className="project__list__item__btn__link">Details</span>
							</Link>
						</div>
					</li>

					<li
						className="project__list__item"
						value="3"
						onMouseEnter={handleHover}
						onTouchStart={handleHover}
						onClick={handleHover}
					>
						{lang ? en.evgeniy : ru.evgeniy} {' '}
						<span
							className={
								hovItem === 'konin' ? (
									`project__list__item__outline--mask`
								) : (
									`project__list__item__outline`
								)
							}
							data-text={lang ? en.konin : ru.konin}
						>
							{lang ? en.konin : ru.konin}
						</span>
						<div
							className="project__list__item__btn"
							style={
								hovItem === 'konin' ? (
									{ opacity: 1, visibility: 'visible', transition: '300ms' }
								) : (
									{ opacity: 0, visibility: 'hidden', transition: '300ms' }
								)
							}
						>
							<a href="http://evgeniykonin.ru/" className="project__list__item__btn__link">
								Demo
							</a>
							<a href="https://github.com/RogyBear/Konin" className="project__list__item__btn__link">
								Code
							</a>
							<Link to="/konin" style={{ textDecoration: 'none', color: '#f0f0f0' }}>
								<span className="project__list__item__btn__link">Details</span>
							</Link>
						</div>
					</li>
				</ul>

				<div className="project__showcase">
					<Tilt reverse={true}>
						{category.map((e, i, a) => (
							<div className={hovItem === e ? 'project__showcase__picture fadeIn' : 'fadeOut '}>
								{device.map((el, i, a) => {
									let classStyle;
									if (picSelect === i && hovItem === e) {
										classStyle = { display: 'block' };
									} else {
										classStyle = { display: 'none' };
									}
									return (
										<img
											className={`project__showcase__picture__${el}`}
											src={require(`../static/${e}${device[i]}.png`)}
											style={classStyle}
										/>
									);
								})}
							</div>
						))}
					</Tilt>
					<ul className="project__showcase__nav">
						{deviceType.map((e, i, a) => (
							<li className="project__showcase__nav__item" value={i} onClick={handlePic}>
								{lang ? en[e] : ru[e]}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
