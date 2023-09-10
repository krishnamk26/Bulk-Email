import { createContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
// import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let { width } = useWindowSize();
  return (
    <DataContext.Provider value={{ width }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
