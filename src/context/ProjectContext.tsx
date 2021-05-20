import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

const ProjectStateContext = createContext(undefined);
const ProjectDispatchContext: any = createContext(undefined);

const getInitialState = () => ({
  number: 0,
  projectImgIdx: 1,
});
function ProjectReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return {
        ...state,
        number: action.number,
      };
    case "CHANGE_PROJECTIMGIDX":
      return {
        ...state,
        projectImgIdx: action.idx,
      };
    case "RESET":
      return getInitialState();
    case "RESET_PROJECTIMG":
      return {
        ...state,
        projectImgIdx: 1,
      };
    case "ALERT":
      return alert("Test");
  }
}

export const ProjectProvider = ({ children }: any) => {
  const [state, dispath] = useReducer(ProjectReducer, getInitialState());
  return (
    <ProjectDispatchContext.Provider value={dispath}>
      <ProjectStateContext.Provider value={state}>
        {children}
      </ProjectStateContext.Provider>
    </ProjectDispatchContext.Provider>
  );
};
export const useProjectState = (selector: any = undefined) => {
  const state = useContext(ProjectStateContext);
  if (!state) throw new Error("MemberStateContext cannot be provided.");

  if (selector) {
    return selector(state);
  }
  return state;
};
export const useProjectDispatch = () => {
  const dispatch = useContext(ProjectDispatchContext);
  if (!dispatch) throw new Error("MemberDispatchContext cannot be provided.");
  return dispatch;
};
