import { useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Laboratory from "./pages/Laboratory.jsx"
import Elements from "./pages/Elements.jsx"
import Experiments from "./pages/Experiments.jsx"
import Learn from "./pages/Learn.jsx"
import { ROUTES, useRoute } from "./hooks/useRoute.js"
import { useLanguage } from "./context/LanguageContext.jsx"

export default function App() {
  const { path, navigate } = useRoute()
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  let page = <Home navigate={navigate} />
  if (path === ROUTES.laboratory) page = <Laboratory navigate={navigate} />
  else if (path === ROUTES.elements) page = <Elements navigate={navigate} />
  else if (path === ROUTES.experiments) page = <Experiments navigate={navigate} />
  else if (path === ROUTES.learn) page = <Learn navigate={navigate} />

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {t("common.skipToContent")}
      </a>
      <Navbar path={path} navigate={navigate} />
      <main id="main-content" className="app-main">
        {page}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
