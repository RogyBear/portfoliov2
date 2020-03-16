import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
export default function Footer() {
	const { lang, english, russian } = useContext(LanguageContext);
	const en = english.main;
	const ru = russian.main;
	return (
		<footer className="footer">
			<div className="footer__translation">
				<svg
					className="footer__translation__arrow"
					width="44"
					height="78"
					viewBox="0 0 44 78"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M23.0392 72.1697L22.3915 72.9317L22.3915 72.9317L23.0392 72.1697ZM23.8522 73.7888C24.4027 73.7442 24.8128 73.2618 24.7681 72.7113L24.0407 63.7407C23.996 63.1902 23.5136 62.7802 22.9631 62.8248C22.4126 62.8695 22.0026 63.3519 22.0472 63.9024L22.6938 71.8762L14.72 72.5228C14.1695 72.5675 13.7595 73.0499 13.8041 73.6004C13.8487 74.1508 14.3312 74.5609 14.8817 74.5163L23.8522 73.7888ZM22.3915 72.9317L23.1238 73.554L24.419 72.0302L23.6868 71.4078L22.3915 72.9317ZM42.1255 7.06173C9.66619 11.0522 -2.52686 51.7514 22.3915 72.9317L23.6868 71.4078C0.0958386 51.3558 11.6394 12.8246 42.3695 9.04679L42.1255 7.06173Z"
						fill="#F0F0F0"
					/>
				</svg>
				<p className="footer__translation__text">{lang ? en.resume : ru.resume}</p>
			</div>
			<div className="footer__circle">
				<div className="footer__circle__square">
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
					<div className="footer__circle__dot" />
				</div>
			</div>
		</footer>
	);
}
