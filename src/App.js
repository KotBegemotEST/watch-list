import logo from './logo.svg';
import { ThemeProvider } from 'styled-components'
import './App.css';
import React, { useState, useEffect, useContext } from "react";
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

function App() {

  const { state } = useContext(AppContext);
  return (
    <ThemeProvider theme={getTheme(state.themeName)} >
      <I18nProvider locale={state.siteLang}>
        <div className="App">
          <Header>
            <div className='top'>
              <LangSwitcher />
              <ThemeSwitcher/>
            </div>

            {/* {translate("hello", { name: 'Anton' })} */}
              <Main/>

          </Header>
        </div>
      </I18nProvider>

    </ThemeProvider>



  );
}

export default App;
