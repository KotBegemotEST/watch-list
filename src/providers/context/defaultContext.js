import { LOCALES } from "../i18n";
import THEMES from "../themes/themeList";
import { getFromStorage } from "../../utils/localStorage";

export default{
    themeName:getFromStorage('themeName') || THEMES.LIGHT,
    siteLang: getFromStorage('siteLang') || LOCALES.ENGLISH,
    name:'anton',
}