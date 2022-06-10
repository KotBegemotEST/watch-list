import React, { useContext } from "react";
import THEMES from "../../providers/themes/themeList";
import { AppContext } from "../../providers/context";
import { saveToStorage } from "../../utils/localStorage";
import translate from '../../providers/i18n/translate'
export default ()=>{
    const {dispatch} = useContext(AppContext)

    const setTheme = themeName => {
        dispatch({type: 'setTheme',themeName})
        saveToStorage('themeName',themeName)
}

    return <div className="themes">
        <span className="themes__block-header">{translate("themes")}</span>
         {Object.keys(THEMES).map(theme => {
        return <button key={theme}  onClick={()=>setTheme(THEMES[theme])}>{theme}</button>
    })}</div>
    }