import React from 'react';
import './styles.scss';
export const MobileResume = (props) => {
	return (
		<div className="Resume ResumeMobile">
			<div className="innerPdf">
				{/* <h1>2020. 6. 20. 예정</h1> */}
				{props.lang === "EN" ? (
				<iframe
					title="resume"
					src="https://drive.google.com/uc?export=view&id=1mYphs4FeDk-QCooh5qqIDtFpHxhl2Jpa"
				></iframe>
				) : (
				<iframe
					title="resume"
					//https://drive.google.com/file/d/1mYphs4FeDk-QCooh5qqIDtFpHxhl2Jpa/view?usp=sharing
					src="https://drive.google.com/uc?export=view&id=1rYZkAseAxW85FTDbyGaSdPuCqLVWzIFl"
				></iframe>
       		 )}
			</div>
		</div>
	);
};
