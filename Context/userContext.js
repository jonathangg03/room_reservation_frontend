import { createContext, useState } from "react";

const context = createContext([])

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  )
}

export { context, ContextProvider }