import { createContext, useState } from "react";

const context = createContext([])

const contextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  )
}

export { context, contextProvider }