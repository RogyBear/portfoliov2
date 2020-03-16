import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/main.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import { LanguageProvider } from './contexts/LanguageContext';
import { LogoProvider } from './contexts/LogoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { NavProvider } from './contexts/NavContext';

function App() {
	return (
		<div className="App">
			<Router>
				<Route
					render={({ location }) => (
						<NavProvider>
							<LanguageProvider>
								<LogoProvider>
									<Layout>
										<TransitionGroup>
											<CSSTransition key={location.key} timeout={600} classNames="fade">
												<Switch location={location}>
													<Route exact={true} path="/about" component={About} />

													<Route exact={true} path="/:id" component={Details} />

													<Route exact={true} path="/" component={Home} />
												</Switch>
											</CSSTransition>
										</TransitionGroup>
									</Layout>
								</LogoProvider>
							</LanguageProvider>
						</NavProvider>
					)}
				/>
			</Router>
		</div>
	);
}

export default App;
