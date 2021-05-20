import React, { useState, useMemo } from "react";
import "./style.scss";
import { ResumeData } from "../../context/ResumeData";
import { ResumeDataEN } from "../../context/ResumeDataEN";
export const Home = (props) => {
  const [data, setData] = useState(
    props.lang === "EN" ? ResumeDataEN : ResumeData
  );
  useMemo(() => {
    setData(props.lang === "EN" ? ResumeDataEN : ResumeData);
  }, [props.lang]);
  return (
    <div className="home">
      <div className="home_back">
        <div className="resumeBox">
          <div className="careerBox">
            {props.language.career}
            <hr />
            {data.career.map((item, i) => {
              return (
                <div className="careerItem resumeItem" key={i}>
                  <div className="inner_box">
                    <div className="inner_info_box">
                      <img
                        alt="커리어 아이콘"
                        src={item.icon}
                        className="carrerIcon"
                      />
                      <div className="carrerInfo info_info">
                        <p className="info_title">{item.company}</p>
                        <p className="info_sub">{item.job}</p>
                        <p className="info_date">
                          <span>{item.startAt}</span><br/>{" "}
                          <span>{item.endAt !== "" ? item.endAt : ""}</span>
                        </p>
                      </div>
                    </div>
                    <p className="info_des">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="educationBox">
            {props.language.education}
            <hr />
            {data.education.map((item, i) => {
              return (
                <div className="educationItem resumeItem" key={i}>
                  <div className="inner_box">
                    <div className="inner_info_box">
                      <img
                        alt="커리어 아이콘"
                        src={item.icon}
                        className="carrerIcon"
                      />
                      <div className="educationInfo info_info">
                        <p className="info_title">{item.school}</p>
                        <p className="info_sub">{item.department}</p>
                        <p className="info_date">
                          <span>{item.startAt}</span> {" "}
                          <span>{item.endAt !== "" ? item.endAt : ""}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="awardsBox">
            {props.language.awards}
            <hr />
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
            {props.language.certificate}
            <hr />
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
    </div>
  );
};
