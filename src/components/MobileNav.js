import React, { useContext } from 'react';

import { NavContext } from '../contexts/NavContext';

export default function MobileNav() {
	const { isOpen, setIsOpen } = useContext(NavContext);
	return (
		<div
			className="mobile"
			onClick={() => {
				setIsOpen(!isOpen);
			}}
		>
			<span className={isOpen ? 'mobile__btn grey ' : 'mobile__btn'} />
		</div>
	);
}
