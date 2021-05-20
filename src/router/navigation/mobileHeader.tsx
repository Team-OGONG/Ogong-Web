import React, { useState } from 'react';
import './mobile.scss';
import { NavLink } from 'react-router-dom';
export const MobileHeader = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	function backcolor() {
		return window.location.pathname === '/' ? 'backNone' : 'backBlack';
	}
	return (
		<div className={`mobileHeader ${backcolor()}`}>
			<p className="userName">Team.OGONG(50!)</p>
			<div className="dump" />
			<div className="openBtn" onClick={() => setIsOpen((isOpen) => !isOpen)} />
			{isOpen ? <div className="headerBack" onClick={() => setIsOpen(false)} /> : null}
			<Menu lang={props.lang} setLang={props.setLang} setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
		</div>
	);
};
const Menu = (props) => {
	return (
		<div className="mobileHeaderMenu" style={{ right: props.isOpen ? 0 : '-100vw' }}>
			<div className="innerMenu">
				{/* <li
					className="langBox"
					onClick={() => {
						props.setLang((lang) => (lang === 'KR' ? 'EN' : 'KR'));
					}}
				>
					<div className="globalImg" />
					<div className="nowLang">{props.lang}</div>
				</li> */}
				<li className="innerLink">
					<NavLink
						exact
						to="/"
						activeClassName="activeMenu"
						onClick={() => {
							props.setIsOpen();
						}}
					>
						Home
					</NavLink>
				</li>
				<li className="innerLink">
					<NavLink
						exact
						to="/Portfolio"
						activeClassName="activeMenu"
						onClick={() => {
							props.setIsOpen();
						}}
					>
						Portfolio
					</NavLink>
				</li>
			</div>
		</div>
	);
};
