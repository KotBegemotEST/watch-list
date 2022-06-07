import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
// import {Helmet,HelmetProvider} from "react-helmet-async"
import DarkMode from "./components/DarkMode"

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


  return (
    <div className="App">
      <DarkMode/>
    {/* <input value={username} onChange={(e)=>setUsername(e.target.value)} /> */}
    </div>
  );
}

export default App;
