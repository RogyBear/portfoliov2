import React, { useContext, useState, createContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const NavContext = createContext();

export const NavProvider = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);
    const handleNav = () => {
        setIsOpen()
    }
	return <NavContext.Provider value={{ isOpen, setIsOpen }}>{props.children}</NavContext.Provider>;
};
