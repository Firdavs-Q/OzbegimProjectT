import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function PageCenter() {
  const { t, i18n } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");

  // useEffect(() => {
  //   const width = window.innerWidth;
  //   if (width <= 768) {
  //     setDeviceType("mobile");
  //   } else if (width <= 1024) {
  //     setDeviceType("tablet");
  //   } else {
  //     setDeviceType("desktop");
  //   }
  // }, []);

  useEffect(() => {
  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setDeviceType("mobile");
    } else if (width <= 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  updateDeviceType(); // boshlab aniqlash
  window.addEventListener('resize', updateDeviceType);

  return () => {
    window.removeEventListener('resize', updateDeviceType);
  };
}, []);


  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const getVideoSrc = () => {
    if (deviceType === "mobile") {
      return "https://www.dropbox.com/scl/fi/onfa3sjqjjwub4da90rr3/video_2025-05-24_14-18-19.mp4?rlkey=txbo8nh3hlnp2zsghfzm1sqit&st=dds20ort&dl=1"; // ⬅️ Telefon uchun video
    } else if (deviceType === "tablet") {
      return "https://www.dropbox.com/scl/fi/ho4q4hydxigtrg28yt7nw/video_2025-05-24_14-18-12.mp4?rlkey=vj2fv8psflohttc6veojr0bw0&st=00y6ej73&dl=1"; // ⬅️ Planshet uchun video
    } else {
      return "https://www.dropbox.com/scl/fi/xu5i943hfshkm67mdtbna/Tarixiy-Obida.mp4?rlkey=f3ypkqpnvj4tj2npl63qmsvv0&st=5fdfqz6l&dl=1"; // ⬅️ Kompyuter uchun video
    }
  };

  const getBackgroundImage = () => {
    if (deviceType === "mobile") {
      return './assets/suratM.jpg'; // ⬅️ Telefon uchun fon
    } else if (deviceType === "tablet") {
      return './assets/suratP.jpg'; // ⬅️ Planshet uchun fon
    } else {
      return './assets/suratK.jpg'; // ⬅️ Kompyuter uchun fon
    // return './assets/suratM.jpg';
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='menu'>
            <ul>
              <li><a href="/turist">{t("Mehmon")}</a></li>
              <li><a href="/yordamchi">{t('Yordamchi')}</a></li>
              <li><a href="/reklama">{t('Reklama')}</a></li>
            </ul>
          </div>
          <div className='language'>
            <select id="language-select" onChange={handleLanguageChange} value={i18n.language}>
              <option value="uz">O‘zbekcha</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div className='content'>
          <div className="video-container" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <video
            key={deviceType} // ⬅️ Video manzilini o'zgartirish uchun
              autoPlay
              muted
              loop
              playsInline
              className={`background-video ${videoLoaded ? 'loaded' : ''}`}
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src={getVideoSrc()} type="video/mp4" />
            </video>
            <div className="text-container video-text">
            <h1 style={{fontSize:35,}}>{t('welcome')}</h1>
            {/* <p>{t('description')}</p>
            <button>{t('learn_more')}</button> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageCenter;
