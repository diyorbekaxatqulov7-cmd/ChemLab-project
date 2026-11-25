import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { LanguageProvider } from "./context/LanguageContext.jsx"
import { ThemeProvider } from "./context/ThemeContext.jsx"
import { LabProvider } from "./context/LabContext.jsx"

import "./styles/base.css"
import "./styles/app.css"
import "./styles/lab.css"
import "./styles/pages.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <LabProvider>
          <App />
        </LabProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
