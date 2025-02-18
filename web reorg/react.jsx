/**
 * 	1.	App Component:
	•	Use a ThemeProvider and LanguageProvider to manage global theme and language states.
	•	Display the current theme and language in the header.
	•	Include buttons to toggle the theme and change the language.
	2.	ThemeContext:
	•	Manage the current theme (light or dark) and a function to toggle it.
	3.	LanguageContext:
	•	Manage the current language from a predefined list of languages (English, German, Japanese).
	•	Provide a function to change the language.
	4.	ThemedComponent:
	•	Consume the ThemeContext and display some content with styles based on the current theme.
	5.	LanguageSwitcher:
	•	Consume the LanguageContext and provide a dropdown to change the current language.
	6.	Dynamic Greeting:
	•	Display a greeting message in the selected language.
 */
import React, { useState, useContext, createContext } from 'react';

const LocalThemeState = createContext();
const LocalLanguageState = createContext();

const Themes = { 
    LIGHT: {label: 'Light', value: 'light', color: 'yellow'},
    DARK: {label: 'Dark', value: 'dark', color: 'blue'},
};

const Languages = { 
    en: {label: 'English', value: 'en' },
    de: {label: 'German', value: 'de' },
    ch: {label: 'Chinese', value: 'ch' },
};

const ShowTheme = () => {
    const { theme, setTheme } = useContext(LocalThemeState);
    const handleThemeChange = () => {
        let newTheme = theme.value === Themes.LIGHT.value ? Themes.DARK : Themes.LIGHT;
        setTheme(newTheme);
    }

    return (
        <>
            <h1 style={{ color: theme.color }}>This is a title showing the current theme: {theme.label}</h1>
            <button style={{ color: theme.color }} onClick={handleThemeChange}>click to change theme</button>
        </>
    );
};

const ShowLanguage = () => {
    const { lang, setLang } = useContext(LocalLanguageState);
    const { theme } = useContext(LocalThemeState);
    const style = { color: theme.color };
    const greetings = {
        [Languages.ch.value]: '你好吗',
        [Languages.en.value]: 'Hello there',
        [Languages.de.value]: 'Guten Tag',
    }

    const langOptions = Object.values(Languages);

    return (
        <>
            <h1 style={style}>{greetings[lang.value]}</h1>
            <select style={style} onChange={(e) => {
                console.log(e.target.value);
                setLang(Languages[e.target.value]);
            }}>
                {langOptions.map((lang, index) => {
                    return (
                        <option value={lang.value} key={lang.value + index} style={style}>
                            {lang.label}
                        </option>
                    )
                })}
            </select>
        </>
    );
};

export default App = ({children}) => {
    const [theme, setTheme] = useState(Themes.LIGHT);
    const themeState = { theme, setTheme, };

    const [lang, setLang] = useState(Languages.ENG);
    const languageState = { lang, setLang }
    return (
        <LocalThemeState.Provider value={themeState}>
            <LocalLanguageState.Provider value={languageState}>
                <>
                    <ShowTheme />
                    <ShowLanguage />
                </>
            </LocalLanguageState.Provider>
        </LocalThemeState.Provider>
    );
};