import React from 'react';

import { ProjectData } from '../../../context/ProjectData';
import { useProjectDispatch } from '../../../context/ProjectContext';
import { useDeviceDispatch } from '../../../context/DeviceContext';
import './style.scss';

export const ProjectSelector = (props) => {
	return (
		<div className="SelectorMain">
			<p className="title">{props.language.project}</p>
			<p className="subTitle">{props.language.projectDescription}</p>
			<>
				<hr style={{ marginTop: '30px' }} />
				<div className="projectList">
					<Selector />
				</div>
				<hr />
			</>
		</div>
	);
};

const Selector = () => {
	return (
		<div>
			<>
				<div className="innerList">
					{ProjectData.map((item, i) => (
						<Item key={`option_${i}`} num={i} />
					))}
				</div>
			</>
		</div>
	);
};

const Item = (props: any) => {
	const dispatch: any = useProjectDispatch();
	let deviceDispatch: any = useDeviceDispatch();
	return (
		<div
			className={`item ${'projectIcon'}`}
			style={{ backgroundImage: `url(${ProjectData[props.num].icon})` }}
			onClick={() => {
				dispatch({ type: 'CHANGE_NUMBER', number: props.num });
				if (ProjectData[props.num].iphone.length !== 0) deviceDispatch({ type: 'CHANGE_IPHONE' });
				else if (ProjectData[props.num].tablet.length !== 0) deviceDispatch({ type: 'CHANGE_TABLET' });
				else if (ProjectData[props.num].computer.length !== 0) deviceDispatch({ type: 'CHANGE_COMPUTER' });
			}}
		/>
	);
};
