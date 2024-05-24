import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import PDFViewer from './components/PDFViewer';
import { updateMetaTags } from './utils/updateMetaTags';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    const lang = path.substring(1);
    setLanguage(lang);
    updateMetaTags(lang);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="h-screen w-screen">
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/adzuky_beans_en" element={<PDFViewer language={language} />} />
            <Route path="/green_coffee_beans_en" element={<PDFViewer language={language} />} />
            <Route path="/green_mung_beans_en" element={<PDFViewer language={language} />} />
            <Route path="/peeled_black_eyed_en" element={<PDFViewer language={language} />} />
            <Route path="/peeled_mung_beans_en" element={<PDFViewer language={language} />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
