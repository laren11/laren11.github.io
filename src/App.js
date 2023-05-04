import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Quality from "./components/quality/Quality";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import { IntlProvider } from "react-intl"; //for translations
import slovenian from "./translations/slo.json";
import english from "./translations/en.json";
import deutsch from "./translations/de.json";
import italian from "./translations/it.json";
import { useState, useEffect, createContext } from "react";
import LocalizationContext from "./context/LocalizationContext";
import Footer from "./components/footer/Footer";
import "animate.css/animate.min.css";

//fonts
import "./fonts/RobotoSlab-Bold.ttf";

const messages = {
  si: slovenian,
  en: english,
  de: deutsch,
  it: italian,
};

function App() {
  const [language, setLanguage] = useState(
    navigator.language.split(/[-_]/)[0] in messages
      ? navigator.language.split(/[-_]/)[0]
      : "si"
  );

  return (
    <div className="App">
      <LocalizationContext.Provider value={{ language, setLanguage }}>
        <IntlProvider
          locale={navigator.language}
          messages={messages[language]}
          defaultLocale="en"
        >
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
          </Router>
        </IntlProvider>
      </LocalizationContext.Provider>
    </div>
  );
}

export default App;
