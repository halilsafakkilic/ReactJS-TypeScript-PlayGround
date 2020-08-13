import React, { useState, useEffect } from 'react';
import ThemeContext from '@contexts/themeContext';

export const User = (props: any) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function timeRefresh() {
        setTime(new Date().toLocaleTimeString());
    }

    useEffect(() => {
        const interval = setInterval(timeRefresh, 1000);

        return () => clearInterval(interval);
    }, []);

    return <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <main className={"theme-" + theme}>
                <h1>Environment: {props.config.env}</h1>
                <h2>Color Mode: {theme} <a onClick={toggleTheme} className="theme-toggle">[Toggle]</a></h2>
                <h3>Time: {time}</h3>
            </main>
        )}
    </ThemeContext.Consumer>
}