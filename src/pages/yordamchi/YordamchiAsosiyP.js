import React from 'react';
import './YordamchiAsosiyP.css'; // Importing the CSS file for styling

const YordamchiAsosiyP = () => {
    return (
        <div className='YordamchiAsosiyP'>
            <div className='YordamchiHEader'>
                <h1>Yordamchi Asosiy Sahifa</h1>
                <select className='YordamchiSelect' >
                    <option value="" disabled selected>Viloyatni tanlang</option>
                    <option value="Toshkent">Toshkent</option>
                    <option value="Samarqand">Samarqand</option>
                    <option value="Buxoro">Buxoro</option>
                    <option value="Fargona">Fargona</option>
                    <option value="Andijon">Andijon</option>
                    <option value="Namangan">Namangan</option>
                    <option value="Qashqadaryo">Qashqadaryo</option>
                    <option value="Surxondaryo">Surxondaryo</option>
                    <option value="Xorazm">Xorazm</option>
                    <option value="Navoiy">Navoiy</option>
                </select>
            </div>
        </div>
    );
}
export default YordamchiAsosiyP;