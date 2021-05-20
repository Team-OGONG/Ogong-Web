import React, { useState, useMemo } from "react";

import "./style.scss";
import { ProjectData } from "../../../context/ProjectData";
import { ProjectDataEN } from "../../../context/ProjectDataEN";
import { useProjectState } from "../../../context/ProjectContext";
import { useDeviceState } from "../../../context/DeviceContext";
import { useSwipeable } from "react-swipeable";
import "@polymer/iron-image/iron-image.js";
import SmallImage from "./PLACEHOLDER.jpg.png";
import "./iron.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Slider from "infinite-react-carousel";
export const View = (props: any) => {
  return (
    <div className="projectView">
      <div className="contant">
        <DeviceView lang={props.lang} />
      </div>
    </div>
  );
};

const DeviceView = (props: any) => {
  let device = useDeviceState().device;
  let number = useProjectState().number;
  const [info, setInfo] = useState(
    props.lang === "EN" ? ProjectDataEN[number] : ProjectData[number]
  );
  const [design, setDesign] = useState<string[] | null>(null);
  useMemo(() => {
    setInfo(props.lang === "EN" ? ProjectDataEN[number] : ProjectData[number]);
  }, [number, props.lang]);
  useMemo(() => {
    switch (device) {
      case "IPhone":
        setDesign(info.iphone);
        break;
      case "Tablet":
        setDesign(info.tablet);
        break;
      case "COMPUTER":
        setDesign(info.computer);
        break;
    }
  }, [device, info]);
  const handlers = useSwipeable({
    trackMouse: true,
    trackTouch: true,
    onSwipedRight: () => {
      let left = document.getElementById("leftBtn");
      if (left) left.click();
    },
    onSwipedLeft: () => {
      let right = document.getElementById("rightBtn");
      if (right) right.click();
    },
  });
  const ImgView = (props) => {
    const [idx, setIdx] = useState(0);
    return (
      <>
        <p className="title views ProjectTitle">{info.title}</p>
        <p className="subTitle views2">{idx + 1 + "/" + props.design.length}</p>
        <div className={`view ${"view" + device}`}>
          <div className="DeviceView" {...handlers} />
          <div className="imgView">
            <Slider
              beforeChange={(old, index) => {
                if (index !== undefined) setIdx(index);
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
                    <LazyLoadImage
                      alt={SmallImage}
                      width={"100%"}
                      height={"100%"}
                      effect="blur"
                      src={item}
                    />
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
    <div className="deviceView">
      {design !== null ? (
        <ImgView design={design} device={device} number={number} />
      ) : null}
    </div>
  );
};
