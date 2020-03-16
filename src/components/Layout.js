import React, { Fragment } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Logo from './Logo';

import MobileNavScreen from './MobileNavScreen';
import MobileNav from './MobileNav';
export default function Layout(props) {
	return (
		<Fragment>
			<Nav />
			<Logo />
			<MobileNav />
			<MobileNavScreen />
			{props.children}
			{/* <MobileNav /> */}
			<Footer />
		</Fragment>
	);
}
