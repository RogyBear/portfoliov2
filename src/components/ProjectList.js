// import React, { Fragment } from 'react';
// import { useSpring, animated } from 'react-spring';
// export default function ProjectList() {
// 	const [ style, set ] = useSpring(() => ({
// 		transform: 'matrix(1, 0, 0, 1 , 0 , 0)',
// 		perspective: 500,
// 		transformOrigin: 'left'
// 	}));

// 	const clamp = (value: number, clampAt: number = 0.05) => {
// 		if (value > 0) {
// 			return value > clampAt ? clampAt : value;
// 		} else {
// 			return value < -clampAt ? -clampAt : value;
// 		}
// 	};

// 	const scroll = useScroll(
// 		(state) => {
// 			// console.log('scrolling', state.scrolling, state.delta[1]);
// 			set(
// 				state.scrolling
// 					? {
// 							transform: `matrix(1, ${clamp(state.delta[1])}, 0, 1 , 0 , 0)`,
// 							perspective: 500,
// 							transformOrigin: 'left'
// 						}
// 					: { transform: 'matrix(1, 0, 0, 1 , 0 , 0)', perspective: 500, transformOrigin: 'left' }
// 			);
// 		},
// 		{
// 			domTarget: window
// 		}
// 	);
// 	useEffect(scroll, [ scroll ]);
// 	return (
// 		<Fragment>
// 			<animated.ul className="project__list" style={style}>
// 				<animated.li className="project__list__item" value="1" onMouseEnter={handleHover}>
// 					2 Birds{' '}
// 					<span
// 						className={
// 							hovItem === 1 ? `project__list__item__outline--mask` : `project__list__item__outline`
// 						}
// 						data-text="Wedding"
// 					>
// 						Wedding
// 					</span>
// 				</animated.li>
// 				<animated.li className="project__list__item" value="2" onMouseEnter={handleHover}>
// 					Black{' '}
// 					<span
// 						className={
// 							hovItem === 2 ? `project__list__item__outline--mask` : `project__list__item__outline`
// 						}
// 						data-text="Jack"
// 					>
// 						Jack
// 					</span>
// 				</animated.li>
// 				<animated.li className="project__list__item" value="3" onMouseEnter={handleHover}>
// 					Evgeniy {' '}
// 					<span
// 						className={
// 							hovItem === 3 ? `project__list__item__outline--mask` : `project__list__item__outline`
// 						}
// 						data-text="Konin"
// 					>
// 						Konin
// 					</span>
// 				</animated.li>
// 			</animated.ul>
// 		</Fragment>
// 	);
// }
