import React, { createContext, useState } from 'react'
import { backendHost, backendPort } from '../config'
console.log('asdasdasd',backendHost,backendPort)
export const MainContext = createContext()

const MainContextProvider = (props) => {
    const [language, setLanguage] = useState('en')
    const Url = 'http://' + backendHost + ':' + backendPort
    return (
         <MainContext.Provider
            value={{
                language,
                Url
             }}>
               {props.children}
         </MainContext.Provider>
    )
}
export default MainContextProvider