import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../contexts/LanguageContext';
import { Waypoint } from 'react-waypoint';
export default function Contact() {
	const { lang, english, russian } = useContext(LanguageContext);
	const en = english.contact;
	const ru = russian.contact;
	const [ placeholder, setPlaceholder ] = useState();
	const [ animation, setAnimation ] = useState(false);
	const [ email, setEmail ] = useState({});
	let specialAnimation;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmail((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:1337/email', email).then((res) => {}).catch((err) => {});
	};

	const handleWaypointEnter = () => {
		console.log('Hit waypoint');
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
					<p className="contact__email">hi@aaronrogers.io</p>
				</div>

				<form onSubmit={handleSubmit} className="contact__form">
					<input
						type="text"
						required
						className="contact__form__input"
						onChange={handleChange}
						name="name"
						placeholder={lang ? en.name : ru.name}
					/>
					<input
						type="email"
						required
						className="contact__form__input"
						onChange={handleChange}
						name="to"
						placeholder={lang ? en.email : ru.email}
					/>
					<input
						required
						type="text"
						className="contact__form__input"
						onChange={handleChange}
						name="subject"
						placeholder={lang ? en.subject : ru.subject}
					/>
					<textarea
						required
						className="contact__form__textarea"
						onChange={handleChange}
						name="text"
						placeholder={lang ? en.message : ru.message}
					/>

					<button type="submit" className="contact__form__submit">
						{lang ? en.submit : ru.submit}
					</button>
				</form>
			</div>
		</div>
	);
}
