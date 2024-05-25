// LanguageDropdown.js
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(window.location.pathname.startsWith('/ko') ? '한국어' : 'English');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getKoreanLink = () => {
    const currentPath = window.location.pathname; // Obtiene la URL actual
    const newPath = currentPath.startsWith('/ko') ? currentPath : '/ko'; // Reemplaza cualquier segmento de idioma existente con '/ko'
    return newPath;
  };
  const languages = [
    { name: 'English', flag: '🇬🇧', href: '/' },
    { name: '한국어', flag: '🇰🇷', href: getKoreanLink() },
  ];



  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedLanguage}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <Link
                key={language.name}
                to={language.href}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setSelectedLanguage(language.name);
                  setIsOpen(false);
                }}
              >
                <span className="mr-3">{language.flag}</span>
                {language.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
