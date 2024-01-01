import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import App from './App.jsx';
import './styles/index.css';
import Loading from './components/Loading.jsx';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr', 'ar'],
        fallbackLng: 'en',
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    });

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading />}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>
);
