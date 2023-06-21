import React from 'react';

import { BsCheckCircle } from 'react-icons/bs';
import './Hero.css';

function Hero(props) {
    return (
        <section className='hero-container' id='home'>
            <div className="hero_content_wrapper section_wrapper p-15">
                <h1 className="hero_title">Высыхание еще никогда не было таким приятным</h1>
                <p className="hero_subtitle">2 банных полотенца, 2 полотенца для рук, 2 мочалки, полотенца из 100% турецкого хлопка для ванной комнаты, 4 разных цвета.<br></br><br></br> Размеры есть;</p>
                <ul className="hero_list">
                    <li className="hero_list_item"><BsCheckCircle />Банное Полотенце:27” x 54</li>
                    <li className="hero_list_item"><BsCheckCircle />Полотенце для рук: 16” x 28”</li>
                    <li className="hero_list_item"><BsCheckCircle />Washclot: 13” x 13</li>
                </ul>
                <div className="hero_image"></div>
            </div>
        </section>
    );
}

export default Hero;