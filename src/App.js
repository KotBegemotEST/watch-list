import logo from './logo.svg';
import { ThemeProvider } from 'styled-components'
import './App.css';
import React, { useState, useEffect, useContext } from "react";
// import {Helmet,HelmetProvider} from "react-helmet-async"
import DarkMode from "./components/DarkMode"
import { I18nProvider } from './providers/i18n'
import translate from './providers/i18n/translate'
import LangSwitcher from './components/LangSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import { AppContext } from './providers/context'
import {getTheme} from './providers/themes/getTheme';
import THEMES from './providers/themes/themeList';
import { Header } from './styles';
import Main from './components/Main';
import './components/style.css';

// const useLocalState = (key, defaultValue) =>{
//   const [value,setValue] = useState(

//     ()=>{
//       const storedValue = localStorage.getItem(key)
//       return storedValue === null ? defaultValue : JSON.parse(storedValue);
//     });

//     useEffect(()=>{
//       const listener = (e) =>{
//         console.log(e)
//         if(e.storageArea == localStorage && e.key == key){
//           setValue(JSON.parse(e.newValue))

//         }
//       }
//         window.addEventListener("storage", listener)

//       return () => {
//         window.removeEventListener("storage",listener)
//       }

//     },[key]) 

//   const setValueInLocalStorage = (newValue)=>{
//     setValue((curentValue)=>{

//         const result = typeof newValue === "function" ? newValue(curentValue):newValue
//       localStorage.setItem(key,JSON.stringify(result))
//         console.log(result)
//         return result
//     })
//   }

//    return [ value, setValueInLocalStorage ]

// }



function App() {
  // const [username,setUsername] = useLocalState("username","")
  // const [theme,setTheme] = useLocalState("theme","light")

  const { state } = useContext(AppContext);
  return (
    <ThemeProvider theme={getTheme(state.themeName)} >
      <I18nProvider locale={state.siteLang}>
        <div className="App">
          <Header>
            <LangSwitcher />
            {translate("hello", { name: 'Anton' })}
              <Main/>
            <ThemeSwitcher/>
          </Header>
          <DarkMode />
          {/* <input value={username} onChange={(e)=>setUsername(e.target.value)} /> */}

        </div>
      </I18nProvider>

    </ThemeProvider>



  );
}

export default App;
