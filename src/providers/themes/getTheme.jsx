import { DARK, LIGHT, TOXIC } from './themes';
import THEMES  from "./themeList";

export const getTheme = (themeName) => {
	switch (themeName) {
		case THEMES.DARK: return DARK;
		case THEMES.LIGHT: return LIGHT;
		default: return TOXIC
	}
};
