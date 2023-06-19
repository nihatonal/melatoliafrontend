import React from 'react';


import line from '../../assets/images/line.png';
import { HiOutlineLifebuoy } from "react-icons/hi2";
import { LuFileHeart } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { WiStrongWind } from "react-icons/wi";
import './Features.css';
function Features(props) {

    const data = [
        {
            id: "feature_1",
            title: "Productivity",
            text: 'Most important feature of these Turkish bath towels is that they do not contain any chemical or synthetic materials and they are all made from natural substances. You can use it safely for yourself and your loved ones.',
            icon: 'HiOutlineLifebuoy',
        },
        {
            id: "feature_2",
            title: "Softness",
            text: 'It is one of the essential details for a towel. 600 GSM 100% Turkish Cotton used in our towels makes them softer than other normal towels. Feel the softness of these towels while drying your hands, face or body.',
            icon: 'LuFileHeart',
        },
        {
            id: "feature_3",
            title: "Water absorption",
            text: 'If the absorbency of a towel is not enough, it will not work at all. Therefore, luxury bath towels should always have high absorbency.',
            icon: 'LuGlassWater',
        },
        {
            id: "feature_4",
            title: "Durability",
            text: 'Turkish towels produced as double stitches are much durable than other towels. These products can be used for many years without wearing out.',
            icon: 'WiStrongWind',
        },
    ]
    return (
        <section className='feature_container p-15' id='features'>
            <h3 className="section_title">
                Melatolia - Soft Linen
            </h3>
            <img className='section_line' src={line} alt='line' />
            <p className="section_desc">We have considered 4 different criteria in order to offer maximum quality Turkish towels for people looking for towels.</p>
            <div className="features_items_wrapper">
                {data.map((item) =>
                    <div className="features_item" key={item.id}>

                        <h3 className="features_item-title">{item.title}:</h3>
                        <p className="features_item_desc">{item.text}</p>
                        <div className="features_item_icon_wrapper">
                            {item.icon === 'HiOutlineLifebuoy' ? <HiOutlineLifebuoy /> :
                                item.icon === 'LuFileHeart' ? <LuFileHeart /> :
                                    item.icon === 'LuGlassWater' ? <LuGlassWater /> :
                                        item.icon === 'WiStrongWind' ? <WiStrongWind /> : null
                            }

                        </div>

                    </div>
                )}

            </div>
        </section>
    );
}

export default Features;