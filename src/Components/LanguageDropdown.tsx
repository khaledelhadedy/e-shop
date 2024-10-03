// components/LanguageDropdown.tsx

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Language {
  code: string;
  label: string;
  flag: string; // Path to flag or flag emoji
}

const languages: Language[] = [
  { code: "en-US", label: "United States", flag: "🇺🇸" },
  { code: "fr", label: "France", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🏴" }, // Flag for English
];

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Implement any logic for changing the language (e.g., using i18n libraries)
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
      >
        <span className="flex items-center">
          <span className="mr-2">{selectedLanguage.flag}</span>
          {selectedLanguage.label}
        </span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">{language.flag}</span>
                {language.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
