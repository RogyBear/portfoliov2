import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../contexts/LanguageContext';
import { Waypoint } from 'react-waypoint';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
export default function Contact() {
	const { lang, english, russian } = useContext(LanguageContext);
	const en = english.contact;
	const ru = russian.contact;
	const [ loading, setLoading ] = useState(false);
	const [ msg, setMsg ] = useState(false);
	const [ disable, setDisable ] = useState(false);
	const [ animation, setAnimation ] = useState(false);
	const [ email, setEmail ] = useState({});
	let specialAnimation;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmail((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setDisable(true);
		axios
			.post(`https://young-retreat-20252.herokuapp.com/email`, email)
			.then((res) => {
				setLoading(false);
				setMsg(true);
			})
			.catch((err) => {});
	};

	const handleWaypointEnter = () => {
		setAnimation((prevState) => ({ ...prevState, fadeInLeft: true }));
	};

	//Nested Ternary Operator for bottom title
	if (animation) {
		//if ENG
		if (lang) {
			specialAnimation = 'contact__title__bottom-en fade-in-right';
		} else {
			specialAnimation = 'contact__title__bottom-ru fade-in-right ';
		}
	} else {
		// if RUS
		if (lang) {
			specialAnimation = 'contact__title__bottom-en ';
		} else {
			specialAnimation = 'contact__title__bottom-ru ';
		}
	}

	const override = css`
		display: block;
		margin-left: 10px;
		border-color: #f0f0f0;
	`;

	return (
		<div className="contact" id="contact">
			<div className="contact__wrapper">
				<div className="contact__title">
					<div
						className={animation ? 'contact__title__top fade-in-left' : 'contact__title__top '}
						style={animation ? {} : { opacity: 0 }}
					>
						<span className="contact__title__outline">{lang ? en.c : ru.c}</span>
						{lang ? en.on : ru.on}-
					</div>

					<Waypoint onEnter={handleWaypointEnter}>
						<div className={specialAnimation} style={animation ? {} : { opacity: 0 }}>
							{lang ? en.ta : ru.ta}
							<span className="contact__title__outline">{lang ? en.c : ru.c}</span>
							{lang ? en.t : ru.t}
						</div>
					</Waypoint>

					<div className={animation ? 'contact__line width-expand' : 'contact__line '} />
					<p className="contact__email">
						<a className="contact__email__link" href="mailto:hi@aaronrogers.io?subject=I'm Interested In Working With You">hi@aaronrogers.io</a>
					</p>
				</div>

				<form onSubmit={handleSubmit} className="contact__form">
					<input
						type="text"
						required
						className="contact__form__input"
						onChange={handleChange}
						name="name"
						autoComplete={'off'}
						autoComplete={'new-password'}
						disabled={!disable ? false : true}
						placeholder={lang ? en.name : ru.name}
					/>
					<input
						type="email"
						required
						className="contact__form__input"
						onChange={handleChange}
						name="to"
						autoComplete={'off'}
						autoComplete={'new-password'}
						disabled={!disable ? false : true}
						placeholder={lang ? en.email : ru.email}
					/>
					<input
						required
						type="text"
						className="contact__form__input"
						onChange={handleChange}
						name="subject"
						autoComplete={'off'}
						autoComplete={'new-password'}
						disabled={!disable ? false : true}
						placeholder={lang ? en.subject : ru.subject}
					/>
					<textarea
						required
						autoComplete={'off'}
						autoComplete={'new-password'}
						className="contact__form__textarea"
						onChange={handleChange}
						name="text"
						disabled={!disable ? false : true}
						placeholder={lang ? en.message : ru.message}
					/>
					{!msg ? (
						<button type="submit" className="contact__form__submit" style={{ transition: '300ms' }}>
							{lang ? en.submit : ru.submit} <ClipLoader css={override} size={30} loading={loading} />
						</button>
					) : (
						<div
							className="contact__form__submit fade-in"
							style={
								lang ? (
									{ cursor: 'default', transition: '300ms' }
								) : (
									{ cursor: 'default', transition: '300ms', textTransform: 'initial' }
								)
							}
						>
							{lang ? en.send : ru.send}
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
