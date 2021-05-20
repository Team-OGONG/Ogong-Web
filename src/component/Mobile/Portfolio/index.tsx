import React, { useState } from 'react';

import './style.scss';

import { ProjectSelector } from './ProjectSelector';
import { View } from './ProjectView';
import { ProjectInfo } from './ProjectInfo';
export const MobilePortfolio = (props) => {
	const [selectorOpen, setSelectorOpen] = useState(false);
	return (
		<div className="mobileProject">
			<div
				className="selectorOpen"
				onClick={() => {
					setSelectorOpen((selectorOpen) => !selectorOpen);
				}}
			>
				{props.language.mobileSelector.projectSetting}
			</div>
			<ProjectSelector
				setSelectorOpen={() => setSelectorOpen(false)}
				selectorOpen={selectorOpen}
				language={props.language.mobileSelector}
				lang={props.lang}
			/>
			<div className="mobileContant">
				<View lang={props.lang} />
				<ProjectInfo language={props.language.info} lang={props.lang} />
			</div>
		</div>
	);
};
