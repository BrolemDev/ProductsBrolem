import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import PDFViewer from './components/PDFViewer';
import { updateMetaTags } from './utils/updateMetaTags';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    const lang = path.substring(1);
    updateMetaTags(lang);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="h-screen w-screen overflow-x-hidden">
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/adzuki_beans_en" element={<PDFViewer language="adzuki_beans_en" />} />
            <Route path="/green_coffee_beans_en" element={<PDFViewer language="green_coffee_beans_en" />} />
            <Route path="/green_mung_beans_en" element={<PDFViewer language="green_mung_beans_en" />} />
            <Route path="/peeled_black_eyed_en" element={<PDFViewer language="peeled_black_eyed_en" />} />
            <Route path="/peeled_mung_beans_en" element={<PDFViewer language="peeled_mung_beans_en" />} />

            <Route path="ko/adzuki_beans_ko" element={<PDFViewer language="adzuki_beans_ko" />} />
            <Route path="ko/green_coffee_beans_ko" element={<PDFViewer language="green_coffee_beans_ko" />} />
            <Route path="ko/green_mung_beans_ko" element={<PDFViewer language="green_mung_beans_ko" />} />
            <Route path="ko/peeled_black_eyed_ko" element={<PDFViewer language="peeled_black_eyed_ko" />} />
            <Route path="ko/peeled_mung_beans_ko" element={<PDFViewer language="peeled_mung_beans_ko" />} />

            <Route path="/en" element={<ItemListContainer language="en" />} />
            <Route path="/ko" element={<ItemListContainer language="ko" />} />
            <Route path="*" element={<ItemListContainer language="en" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
