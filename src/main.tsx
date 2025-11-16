import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './init';

createRoot(document.querySelector('.app-root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
