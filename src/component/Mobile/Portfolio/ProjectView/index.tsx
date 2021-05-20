import React, { useState, useMemo, useRef } from 'react';

import './styles.scss';
import { ProjectData } from '../../../../context/ProjectData';
import { ProjectDataEN } from '../../../../context/ProjectDataEN';
import { useProjectState } from '../../../../context/ProjectContext';
import { useDeviceState } from '../../../../context/DeviceContext';
import { useSwipeable } from 'react-swipeable';
import '@polymer/iron-image/iron-image.js';
import SmallImage from '../../../Portfolio/ProjectView/PLACEHOLDER.jpg.png';
import '../../../Portfolio/ProjectView/iron.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Slider from 'infinite-react-carousel';
export const View = (props) => {
	return (
		<div className="MobileProjectView">
			<div className="contant">
				<DeviceView lang={props.lang} />
			</div>
		</div>
	);
};

const DeviceView = (props) => {
	let device = useDeviceState().device;
	let number = useProjectState().number;
	const [info, setInfo] = useState(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	const [design, setDesign] = useState<string[] | null>(null);
	useMemo(() => {
		setInfo(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	}, [number, props.lang]);
	useMemo(() => {
		switch (device) {
			case 'IPhone':
				setDesign(info.iphone);
				break;
			case 'Tablet':
				setDesign(info.tablet);
				break;
			case 'COMPUTER':
				setDesign(info.computer);
				break;
		}
	}, [device, info]);
	const slider: any = useRef(null);
	const ImgView = (props) => {
		const [idx, setIdx] = useState(0);
		const handlers = useSwipeable({
			trackMouse: true,
			trackTouch: true,
			preventDefaultTouchmoveEvent: true,
			onSwipedRight: () => {
				slider.current.slickPrev();
			},
			onSwipedLeft: (e) => {
				slider.current.slickNext();
			},
		});
		return (
			<>
				<p className="title views ProjectTitle">{info.title}</p>
				<p className="subTitle views2">{idx + 1 + '/' + props.design.length}</p>
				<div className={`view ${'view' + device}`}>
					<div className="DeviceView" {...handlers} />
					<div className="imgView">
						<Slider
							ref={slider}
							beforeChange={(old, index: any) => {
								setIdx(index);
							}}
							afterChange={(index: any) => {
								setIdx(index);
							}}
							duration={100}
							autoplay={true}
							prevArrow={<button id="leftBtn"></button>}
							nextArrow={<button id="rightBtn"></button>}
							className="MapView"
						>
							{props.design.map((item, i) => {
								return (
									<div className="mapView" key={i}>
										<LazyLoadImage alt={SmallImage} width={'100%'} height={'100%'} effect="blur" src={item} />
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="deviceView MobileDeviceView">
			{design !== null ? <ImgView design={design} device={device} number={number} /> : null}
		</div>
	);
};
