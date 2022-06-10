import React, { useContext } from "react";
import { LOCALES } from "../../providers/i18n";
import { AppContext } from "../../providers/context";
import { saveToStorage } from "../../utils/localStorage";
import translate from '../../providers/i18n/translate'

export default () => {
    const { dispatch } = useContext(AppContext)
    const setLanguage = siteLang => {
        dispatch({ type: 'setLang', siteLang });
        saveToStorage("siteLang",siteLang)
    }

    return <div className="lang"> 
        <span className="lang__block-header"> {translate("language")}: </span>
        {Object.keys(LOCALES).map(locale => {
        return <button key={locale} onClick={() => setLanguage(LOCALES[locale])}>{locale}</button>
    })}</div>
}