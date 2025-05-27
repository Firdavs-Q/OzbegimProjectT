import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MenuBar = ()=>{
      const { t, i18n } = useTranslation();
//   const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };


    return (
        <div>
         <ul>
              <li><a href="/turist">{t("Maskanlar")}</a></li>
              <li><a href="/turist/xarita">{t('xarita')}</a></li>
              <li><a href="/Tkumakchi">{t('kumakchi')}</a></li>
              
            </ul>
        </div>
    )
}
export default MenuBar;