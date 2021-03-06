import { Config } from './config.model';
import { DEFAULT_ENVIRONMENT, DEFAULT_LANGUAGE } from './constants';

const APP_ENV = process.env.APP_ENV === undefined ? DEFAULT_ENVIRONMENT : process.env.APP_ENV;

export const config: Config = {
    env: APP_ENV,
    language: DEFAULT_LANGUAGE,
    languages: [
        { "code": "en", "name": "English" },
        { "code": "tr", "name": "Türkçe" }
    ]
};