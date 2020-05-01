import React from 'react';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import pdf from '../static/resume.pdf';
export default function Resume() {
	// All of the duties when doing the 2 Birds Wedding Project
	let arrFreelance2BW = [
		'Developed functional interfaces using SCSS, HTML5 and JavaScript (along with frameworks such as  React, Next.js)',
		'Created a responsive website using SCSS and media queries',
		'Communicated with graphic designers concerning the UI/UX mockups',
		'Developed mockup using Figma using mobile first principles',
		'Utilized Context.js to create the multilingual functionality on the website',
		'Utilized React.js and JavaScript to create dynamic shopping cart',
		'Customized the Strapi backend to create admin panel that displays order information'
	];

	// All of the duties when doing the BlackJack Contracting Project

	let arrFreelanceBJC = [
		'Utilized Next.js, React, SCSS and HTML to create small business website for BlackJack Contracting',
		'Created design using Figma and Adobe Photoshop',
		'Modified Strapi code to implement Nodemailer, and create the email functionality',
		'Utilized Context.js to globally control certain animations on the webpage',
		'Used my knowledge of SCSS and media queries to create a fully responsive website'
	];

	// All of the duties when doing Frontend Dev at Kolibri

	let arrFrontdev = [
		'Utilized HTML, SASS, and JavaScript to transform mockups into fully developed websites',
		'Developed websites from designer mockups from Figma',
		'Utilized React in frontend web development projects',
		'Debugged and refactored old code from prior company projects',
		'Created custom calendar component using the Google Calendar API'
	];

	// All of the duties when doing Audio Visual at PSU

	let arrAVT = [
		'Programmed digital computer systems for use at Portland State University',
		'Repaired both analogue and digital classroom computer systems',
		'Utilized various networking tools to diagnose and repair classroom computer systems',
		'Utilized a ticketing system to plan and prioritize repair projects'
	];

	// All of the technologies I'm proficient in

	let tech = [
		'Javascript',
		'React',
		'Next.js',
		'Context API',
		'SASS',
		'HTML5',
		'CSS3',
		'Bootstrap',
		'MongoDB',
		'Node.js',
		'Express.js',
		'Figma',
		'Adobe\nPhotoshop'
	];

	// All of the technologies I'm proficient in

	let contact = [
		[ 'Website', 'www.aaronrogers.io' ],
		[ 'Email', 'hi@aaronrogers.io' ],
		[ 'Github', 'github.com/RogyBear' ],
		[ 'Nationality', 'American' ],
		[ 'Phone', '+79221248896' ]
	];

	// Get the local time plus my time

	// let tz = new Date().getTimezoneOffset() / 60;
	// let time = new Date().setHours();
	// console.log(tz);
	// console.log(time);

	return (
		<div className="resume">
			<div className="resume__wrapper">
				<div className="resume__wrapper__title">
					AARON<span>ROGERS</span>
				</div>
				<div className="resume__wrapper__sub-title">FRONTEND DEVELOPER</div>
				<div className="resume__wrapper__download-btn">
					<a download href={pdf}>
						Download
					</a>
				</div>
				<div className="resume__wrapper__col">
					<div className="resume__wrapper__col__left">
						<div className="resume__wrapper__col__left__title">Professional Experience</div>
						<div className="resume__wrapper__col__left__job">Freelance Web Developer</div>
						<div className="resume__wrapper__col__left__dates">
							Contract Work | Remote | 09 / 2019 - Present
						</div>
						<div className="resume__wrapper__col__left__project">Project: 2 Birds Wedding Co</div>
						<div className="resume__wrapper__col__left__duties">
							{arrFreelance2BW.map((e) => {
								return <li className="resume__wrapper__col__left__duties__items">{e}</li>;
							})}
						</div>
						<div className="resume__wrapper__col__left__project">Project: BlackJack Contracting </div>
						<div className="resume__wrapper__col__left__duties">
							{arrFreelanceBJC.map((e) => {
								return <li className="resume__wrapper__col__left__duties__items">{e}</li>;
							})}
						</div>
						<div className="resume__wrapper__col__left__job">Frontend Developer</div>
						<div className="resume__wrapper__col__left__dates">
							Kolibri | Yekaterinburg, Russia | 05 / 2019 - 09 / 2019
						</div>
						<div className="resume__wrapper__col__left__duties">
							{arrFrontdev.map((e) => {
								return <li className="resume__wrapper__col__left__duties__items">{e}</li>;
							})}
						</div>
						<div className="resume__wrapper__col__left__job">Audio Visual Technician</div>
						<div className="resume__wrapper__col__left__dates">
							Portland State University | Portland, Oregon | 02 / 2012 - 08 / 2015
						</div>
						<div className="resume__wrapper__col__left__duties">
							{arrAVT.map((e) => {
								return <li className="resume__wrapper__col__left__duties__items">{e}</li>;
							})}
						</div>

						<div className="resume__wrapper__col__left__title">Education</div>
						<div className="resume__wrapper__col__left__job">Portland State University</div>
						<div className="resume__wrapper__col__left__dates">
							Portland State University | Portland, Oregon | 09 / 2011 - 08 / 2015
						</div>
					</div>
					<div className="resume__wrapper__col__right">
						<div className="resume__wrapper__col__right__title">Technologies</div>
						<div className="resume__wrapper__col__right__tech">
							{tech.map((e) => {
								return <li className="resume__wrapper__col__right__tech__item">{e}</li>;
							})}
						</div>
						<div className="resume__wrapper__col__right__title">Contacts</div>
						<div className="resume__wrapper__col__right__duties-con">
							{contact.map((e) => {
								return (
									<li className="resume__wrapper__col__right__duties-con__items-contact">
										{e.map((el) => {
											return (
												<li className="resume__wrapper__col__right__duties-con__items-contact__list-item">
													{el}
												</li>
											);
										})}
									</li>
								);
							})}
						</div>
						<div className="resume__wrapper__col__right__title">Languages</div>
						<div className="resume__wrapper__col__left__language">
							English<span> (Native)</span>
						</div>
						<div className="resume__wrapper__col__left__language">
							Russian<span> (Fluent)</span>
						</div>
					</div>
				</div>
			</div>
			<Contact />
			<ScrollToTop />
		</div>
	);
}
