import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFHead from './PDFHead';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ language }) => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const pdf = `/products/${language}.pdf`; // Construir la URL del PDF basada en el idioma

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  return (
    <div>

      <PDFHead></PDFHead>
      <div className="w-screen flex flex-col gap-5 justify-center items-center bg-gradient-to-b from-green-900 to-green-500 overflow-y-auto min-h-screen">

        {loading ? (
          <div className="loader">Cargando...</div>
        ) : (

          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {[...Array(numPages).keys()].map((pNum) => (
              <div key={pNum} className="w-full flex justify-center">
                <Page
                  pageNumber={pNum + 1}
                  width={Math.min(window.innerWidth * 0.9, 900)}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            ))}
          </Document>
        )}
      </div>
    </div>

  );

};

PDFViewer.propTypes = {
  language: PropTypes.string.isRequired // Definir que language es requerido y debe ser de tipo string
};
export default PDFViewer;
