import React, { useState } from 'react';
import './styles.scss';

import { ResumeData } from '../../../context/ResumeData';
import { ResumeDataEN } from '../../../context/ResumeDataEN';
export const MobileHome = (props: any) => {
	const [data] = useState(props.lang === 'EN' ? ResumeDataEN : ResumeData);
	return (
		<div id="mobileHome">
			<div className="backBlur" />
			<p className="madeText">{props.language.madeText}</p>
			<div className="resumeBox">
				<div className="educationBox">
					<p className="boxTitle">{props.language.education}</p>
					{data.education.map((item, i) => {
						return (
							<div className="educationItem resumeItem" key={i}>
								<div className="inner_box">
									<div className="inner_info_box">
										<img alt="커리어 아이콘" src={item.icon} className="carrerIcon" />
										<div className="educationInfo info_info">
											<div className="info_DesBox">
												<p className="info_title">{item.school}</p>
												<div className="dump" />
												<p className="info_sub">{item.department}</p>
											</div>
											<div className="dump" />
											<p className="info_date" style={{ color: i === 0 ? '#6c69ff' : '#a5a5a5' }}>
												<span>{item.startAt}</span> ~ <span>{item.endAt !== '' ? item.endAt : '현재'}</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="careerBox">
					<p className="boxTitle">{props.language.career}</p>
					{data.career.map((item, i) => {
						return (
							<div className="careerItem resumeItem" key={i}>
								<div className="inner_box">
									<div className="inner_info_box">
										<img alt="커리어 아이콘" src={item.icon} className="carrerIcon" />
										<div className="carrerInfo info_info">
											<div className="info_DesBox">
												<p className="info_title">{item.company}</p>
												<div className="dump" />
												<p className="info_sub">{item.job}</p>
											</div>
											<div className="dump" />
										</div>
									</div>
									<p className="info_date" style={{ color: i === 0 ? '#6c69ff' : '#a5a5a5' }}>
										<span>{item.startAt}</span> ~ <span>{item.endAt !== '' ? item.endAt : '현재'}</span>
									</p>
									<p className="info_des">{item.description}</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="awardsBox">
					<p className="boxTitle">{props.language.awards}</p>
					{data.awards.map((item, i) => {
						return (
							<div className="awardsItem resumeItem" key={i}>
								<div className="inner_box">
									<div className="inner_info_box">
										<div className="awardsInfo info_info">
											<p className="info_title">{item.title}</p>
											<p className="info_sub">{item.host}</p>
											<p className="info_date">{item.date}</p>
										</div>
									</div>
								</div>
								<p className="info_des">{item.description}</p>
							</div>
						);
					})}
				</div>

				<div className="certificateBox">
					<p className="boxTitle">{props.language.certificate}</p>
					{data.certificate.map((item, i) => {
						return (
							<div className="certificateItem resumeItem" key={i}>
								<div className="inner_box">
									<div className="inner_info_box">
										<div className="awardsInfo info_info">
											<p className="info_title">{item.title}</p>
											<p className="info_sub">{item.host}</p>
											<p className="info_date">{item.date}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
