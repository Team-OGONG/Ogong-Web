import React, { useState, useMemo } from 'react';
import { ProjectData } from '../../../../context/ProjectData';
import { ProjectDataEN } from '../../../../context/ProjectDataEN';
import { useDeviceState, useDeviceDispatch } from '../../../../context/DeviceContext';
import { useProjectState, useProjectDispatch } from '../../../../context/ProjectContext';
import './styles.scss';
export const ProjectSelector = (props) => {
	let state = useProjectState();
	let number = state.number;
	const [info, setInfo] = useState(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	useMemo(() => {
		setInfo(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	}, [number, props.lang]);
	return (
		<div className="MobileProjectSelector">
			{props.selectorOpen ? <div className="backBlur" onClick={() => props.setSelectorOpen()} /> : null}
			<div className="selectorMenu" style={{ bottom: props.selectorOpen ? 0 : '-100vh' }}>
				<div className="titleLine">
					<p className="title">{props.language.DeviceSelect}</p>
					<div className="dump" />
					<p className="close" onClick={() => props.setSelectorOpen()}>
						{props.language.close}
					</p>
				</div>
				<DeviceSelector info={info} />
				<div className="titleLine">
					<p className="title">{props.language.ProjectSelect}</p>
				</div>
				<Selector info={info} />
			</div>
		</div>
	);
};

const DeviceSelector = (info: any) => {
	const state: any = useDeviceState();
	const dispatch: any = useDeviceDispatch();
	const projectDevice: any = useProjectDispatch();
	return (
		<div className="MobileDeviceSelector">
			{info.info.iphone.length !== 0 ? (
				<>
					<div
						className={`Iphone ${state.device === 'IPhone' ? 'selectedDevice' : ''}`}
						onClick={() => {
							projectDevice({ type: 'RESET_PROJECTIMG' });
							dispatch({ type: 'CHANGE_IPHONE' });
						}}
					>
						<div className="img" />
					</div>
				</>
			) : null}
			{info.info.tablet.length !== 0 ? (
				<>
					<div
						className={`Tablet ${state.device === 'Tablet' ? 'selectedDevice' : ''}`}
						onClick={() => {
							projectDevice({ type: 'RESET_PROJECTIMG' });
							dispatch({ type: 'CHANGE_TABLET' });
						}}
					>
						<div className="img" />
					</div>
				</>
			) : null}
			{info.info.computer.length !== 0 ? (
				<>
					<div
						className={`Computer ${state.device === 'COMPUTER' ? 'selectedDevice' : ''}`}
						onClick={() => {
							projectDevice({ type: 'RESET_PROJECTIMG' });
							dispatch({ type: 'CHANGE_COMPUTER' });
						}}
					>
						<div className="img" />
					</div>
				</>
			) : null}
		</div>
	);
};

const Selector = (info: any) => {
	return (
		<div className="mobileProjectList">
			<div className="innerList">
				{ProjectData.map((item, i) => (
					<Item key={`option_${i}`} num={i} />
				))}
			</div>
		</div>
	);
};

const Item = (props: any) => {
	let state = useProjectState();
	let number = state.number;
	const dispatch: any = useProjectDispatch();
	let deviceDispatch: any = useDeviceDispatch();
	return (
		<img
			alt="Item"
			className={`mobileItem mobileProjectIcon`}
			src={ProjectData[props.num].icon}
			style={{ boxShadow: props.num === number ? '0px -1px 8px 1px rgba(31,31,31,1)' : '' }}
			onClick={() => {
				dispatch({ type: 'CHANGE_NUMBER', number: props.num });
				if (ProjectData[props.num].iphone.length !== 0) deviceDispatch({ type: 'CHANGE_IPHONE' });
				else if (ProjectData[props.num].tablet.length !== 0) deviceDispatch({ type: 'CHANGE_TABLET' });
				else if (ProjectData[props.num].computer.length !== 0) deviceDispatch({ type: 'CHANGE_COMPUTER' });
			}}
		/>
	);
};
