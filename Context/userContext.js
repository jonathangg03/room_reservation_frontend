import { createContext } from "react";

const context = createContext({})

const contextProvider = ({ children }) => {
  return (
    <context.Provider value={{}}>
      {children}
    </context.Provider>
  )
}