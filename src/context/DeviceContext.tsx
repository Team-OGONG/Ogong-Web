import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

const DeviceStateContext = createContext(undefined);
const DeviceDispatchContext: any = createContext(undefined);

const getInitialState = () => ({
  device: "IPhone",
});
function DisplayReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_TABLET":
      return {
        ...state,
        device: "Tablet",
      };
    case "CHANGE_IPHONE":
      return {
        ...state,
        device: "IPhone",
      };
    case "CHANGE_COMPUTER":
      return {
        ...state,
        device: "COMPUTER",
      };
    case "RESET":
      return getInitialState();
    case "ALERT":
      return alert("Test");
  }
}

export const DeviceProvider = ({ children }: any) => {
  const [state, dispath] = useReducer(DisplayReducer, getInitialState());
  return (
    <DeviceDispatchContext.Provider value={dispath}>
      <DeviceStateContext.Provider value={state}>
        {children}
      </DeviceStateContext.Provider>
    </DeviceDispatchContext.Provider>
  );
};
export const useDeviceState = (selector: any = undefined) => {
  const state = useContext(DeviceStateContext);
  if (!state) throw new Error("MemberStateContext cannot be provided.");

  if (selector) {
    return selector(state);
  }
  return state;
};
export const useDeviceDispatch = () => {
  const dispatch = useContext(DeviceDispatchContext);
  if (!dispatch) throw new Error("MemberDispatchContext cannot be provided.");
  return dispatch;
};
