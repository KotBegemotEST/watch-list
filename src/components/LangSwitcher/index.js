import React, { useContext } from "react";
import { LOCALES } from "../../providers/i18n";
import { AppContext } from "../../providers/context";
import { saveToStorage } from "../../utils/localStorage";

export default () => {
    const { dispatch } = useContext(AppContext)
    const setLanguage = siteLang => {
        dispatch({ type: 'setLang', siteLang });
        saveToStorage("siteLang",siteLang)
    }

    return <div> {Object.keys(LOCALES).map(locale => {
        return <button key={locale} onClick={() => setLanguage(LOCALES[locale])}>{locale}</button>
    })}</div>
}