import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Get pathname and remove basename if exists
    const repoName = import.meta.env.VITE_REPO_NAME || "";
    let pathname = location.pathname;
    
    // Remove basename if it exists
    if (repoName && pathname.startsWith(`/${repoName}`)) {
      pathname = pathname.replace(`/${repoName}`, '');
    }
    
    // Extract language from path
    const pathParts = pathname.split('/').filter(Boolean);
    const pathLang = pathParts[0];
    
    if (pathLang === 'vi' || pathLang === 'en') {
      if (i18n.language !== pathLang) {
        i18n.changeLanguage(pathLang);
      }
    } else {
      // Default to Vietnamese if no language in path
      const storedLang = localStorage.getItem('i18nextLng');
      if (storedLang && (storedLang === 'vi' || storedLang === 'en')) {
        i18n.changeLanguage(storedLang);
      } else {
        i18n.changeLanguage('vi');
      }
    }
  }, [location.pathname, i18n]);

  return <>{children}</>;
};

export default LanguageWrapper;

