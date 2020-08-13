import React, { createContext, useState } from 'react';
import { IntlProvider } from "react-intl";

import locale_tr from '@locale/tr/tr.json';
import locale_en from '@locale/en/en.json';

const messages = {
    en: locale_en,
    tr: locale_tr
};

const LocaleContext = createContext({
    locale: "",
    setLocale: (_locale: string) => { }
});

export const LocaleProvider = (props: any) => {
    const [locale, changeLocale] = useState<string>(props.locale);

    const setLocale = (locale: string) => {
        changeLocale(locale)
    }

    const value = {
        locale,
        setLocale
    }

    return <IntlProvider locale={locale} messages={messages[locale]}>
        <LocaleContext.Provider value={value}>
            {props.children}
        </LocaleContext.Provider>
    </IntlProvider>

}

export default LocaleContext;