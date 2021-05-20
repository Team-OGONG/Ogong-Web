import React, { useState, useMemo } from 'react';
import './styles.scss';

import { ProjectData } from '../../../../context/ProjectData';
import { ProjectDataEN } from '../../../../context/ProjectDataEN';
import { useProjectState } from '../../../../context/ProjectContext';

// import web from '../../../assets/www.svg';
// import git from '../../../assets/github.svg';
// import playstore from '../../../assets/playstore.svg';

export const ProjectInfo = (props) => {
	let number = useProjectState().number;
	const [info, setInfo] = useState(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	useMemo(() => {
		setInfo(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	}, [number, props.lang]);
	return (
		<div className="MobileProjectInfo">
			<div className="info">
				<div className="infoBox">
					<div className="double">
						<div className="innerInfo">
							<p className="infoTitle">{props.language.projectName}</p>
							<div className="infoDes">{info.title}</div>
						</div>
						<div className="innerInfo">
							<p className="infoTitle">{props.language.projectPersonnel}</p>
							<div className="infoDes">{info.personnel}</div>
						</div>
					</div>
					<div className="innerInfo">
						<p className="infoTitle">{props.language.description}</p>
						<div className="infoDes">{info.description}</div>
					</div>
					<div className="innerInfo">
						<p className="infoTitle">{props.language.projectTech}</p>
						<div className="infoDes">{info.technology}</div>
					</div>
					<div className="innerInfo">
						<p className="infoTitle">{props.language.projectRole}</p>
						<div className="infoDes">{info.role}</div>
					</div>
					<div className="innerInfo">
						<p className="infoTitle">{props.language.projectContents}</p>
						<div className="infoDes">{info.contents}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
