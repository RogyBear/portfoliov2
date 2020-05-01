import React, { useEffect, useContext } from 'react';
import Contact from './Contact';
import Project from './Project';
import { useScroll } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import { LanguageContext } from '../contexts/LanguageContext';
import ScrollToTop from './ScrollToTop';
export default function Home(props) {
	const { lang, english, russian } = useContext(LanguageContext);
	const en = english.home;
	const ru = russian.home;
	const [ style, set ] = useSpring(() => ({
		transform: 'matrix(1, 0, 0, 1 , 0 , 0)',
		perspective: 500,
		transformOrigin: 'center'
	}));

	const clamp = (value, clampAt = 0.04) => {
		if (value > 0) {
			return value > clampAt ? clampAt : value;
		} else {
			return value < -clampAt ? -clampAt : value;
		}
	};

	// Tracking the scroll on window
	const scroll = useScroll(
		(state) => {
			set(
				state.scrolling
					? {
							transform: `matrix(1, ${clamp(state.delta[1])}, 0, 1, 0 , 0)`,
							perspective: 500,
							transformOrigin: 'center'
						}
					: { transform: 'matrix(1, 0, 0, 1 , 0 , 0)', perspective: 500, transformOrigin: 'center' }
			);
		},
		{
			domTarget: window
		}
	);

	useEffect(scroll, [ scroll ]);
	return (
		<main className="home">
			<section className="home__section-one">
				<div className="home__section-one__text">
					<p className="home__section-one__text__hello">{lang ? en.lineOne : ru.lineOne}</p>
					<animated.p className="home__section-one__text__front-end" style={style}>
						{lang ? en.lineTwo : ru.lineTwo}
					</animated.p>
					<animated.p className="home__section-one__text__web-developer" style={style}>
						{lang ? en.lineThree : ru.lineThree}
					</animated.p>
					<p className="home__section-one__text__portfolio-text">{lang ? en.lineFour : ru.lineFour}</p>
				</div>
			</section>

			<Project />
			<Contact />

			<ScrollToTop />
		</main>
	);
}
