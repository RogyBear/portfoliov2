import React, { createContext, useState } from 'react';

export const LogoContext = createContext();

export function LogoProvider(props) {
	const [ load, setLoad ] = useState(false);
	return <LogoContext.Provider value={{ load, setLoad }}>{props.children}</LogoContext.Provider>;
}
