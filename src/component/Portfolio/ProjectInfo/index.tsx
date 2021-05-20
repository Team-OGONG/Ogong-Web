import React, { useState, useMemo } from "react";
import "./style.scss";

import { ProjectData } from "../../../context/ProjectData";
import { ProjectDataEN } from "../../../context/ProjectDataEN";
import { useDeviceDispatch } from "../../../context/DeviceContext";
import {
  useProjectState,
  useProjectDispatch,
} from "../../../context/ProjectContext";

import web from "../../../assets/www.svg";
import git from "../../../assets/github.svg";
import playstore from "../../../assets/playstore.svg";

export const ProjectInfo = (props) => {
  let state = useProjectState();
  let number = state.number;
  const [info, setInfo] = useState(
    props.lang === "EN" ? ProjectDataEN[number] : ProjectData[number]
  );
  useMemo(() => {
    setInfo(props.lang === "EN" ? ProjectDataEN[number] : ProjectData[number]);
  }, [number, props.lang]);
  return (
    <div className="projectInfo">
      <p className="title alignRight">{props.language.device}</p>
      <p className="subTitle alignRight">{props.language.deviceDescription}</p>
      <>
        <div>
          <DeviceSelector info={info} />
        </div>
      </>
      <p className="title alignRight"> {props.language.description}</p>
      <p className="subTitle alignRight">
        {props.language.descriptionDescription}
      </p>
      <hr className="line" />
      <>
        <div>
          <Info language={props.language} lang={props.lang} />
        </div>
      </>
    </div>
  );
};

const DeviceSelector = (info: any) => {
  const dispatch: any = useDeviceDispatch();
  const projectDevice: any = useProjectDispatch();
  return (
    <div className="deviceSelector">
      {info.info.iphone.length !== 0 ? (
        <>
          <div style={{ flex: 1 }} />
          <div
            className="Iphone"
            onClick={() => {
              projectDevice({ type: "RESET_PROJECTIMG" });
              dispatch({ type: "CHANGE_IPHONE" });
            }}
          >
            <div className="img" />
            <p className="DeviceTitle">IPhone</p>
          </div>
          <div style={{ flex: 1 }} />
        </>
      ) : null}
      {info.info.tablet.length !== 0 ? (
        <>
          <div style={{ flex: 1 }} />
          <div
            className="Tablet"
            onClick={() => {
              projectDevice({ type: "RESET_PROJECTIMG" });
              dispatch({ type: "CHANGE_TABLET" });
            }}
          >
            <div className="img" />
            <p className="DeviceTitle">Tablet</p>
          </div>
          <div style={{ flex: 1 }} />
        </>
      ) : null}
      {info.info.computer.length !== 0 ? (
        <>
          <div style={{ flex: 1 }} />

          <div
            className="Computer"
            onClick={() => {
              projectDevice({ type: "RESET_PROJECTIMG" });
              dispatch({ type: "CHANGE_COMPUTER" });
            }}
          >
            <div className="img" />
            <p className="DeviceTitle">Computer</p>
          </div>
          <div style={{ flex: 1 }} />
        </>
      ) : null}
    </div>
  );
};

const Info = (props) => {
  let number = useProjectState().number;
  const [info, setInfo] = useState(
    props.lang === "EN" ? ProjectDataEN[number] : ProjectData[number]
  );
  useMemo(() => {
    setInfo(props.lang === "EN" ? ProjectDataEN[number] : ProjectData[number]);
  }, [number, props.lang]);
  return (
    <div>
      <>
        <div className="info">
          <div>
            <p className="title infoText">{props.language.projectName}</p>
            <p className="subTitle infoBText">{info.title}</p>
          </div>
          <div>
            <p className="title infoText">
              {props.language.projectDescription}
            </p>
            <p className="subTitle infoBText">{info.description}</p>
          </div>
          <div>
            <p className="title infoText">{props.language.projectTech}</p>
            <p className="subTitle infoBText">{info.technology}</p>
          </div>
          <div>
            <p className="title infoText">{props.language.projectRole}</p>
            <p className="subTitle infoBText">{info.role}</p>
          </div>
          <div>
            <p className="title infoText">{props.language.projectPersonnel}</p>
            <p className="subTitle infoBText">{info.personnel}</p>
          </div>
          <div>
            <p className="title infoText">{props.language.projectContents}</p>
            <p className="subTitle infoBText">{info.contents}</p>
          </div>
          <div className="projectInfoLocation">
            {info.github !== "" ? (
              <>
                <div style={{ flex: 1 }} />
                <img
                  src={git}
                  className="git"
                  onClick={() => {
                    window.location.href = info.github;
                  }}
                  alt="github"
                />
                <div style={{ flex: 1 }} />
              </>
            ) : null}
            {info.playStore !== "" ? (
              <>
                <div style={{ flex: 1 }} />
                <img
                  src={playstore}
                  className="play"
                  onClick={() => {
                    window.location.href = info.playStore;
                  }}
                  alt="playstore"
                />

                <div style={{ flex: 1 }} />
              </>
            ) : null}{" "}
            {info.webSite !== "" ? (
              <>
                <div style={{ flex: 1 }} />
                <img
                  src={web}
                  className="web"
                  onClick={() => {
                    window.location.href = info.webSite;
                  }}
                  alt="web"
                />
                <div style={{ flex: 1 }} />
              </>
            ) : null}
          </div>
        </div>
      </>
    </div>
  );
};
