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
            title: "Производительность",
            text: 'Самая важная особенность этих турецких банных полотенец заключается в том, что они не содержат никаких химических или синтетических материалов, и все они сделаны из натуральных веществ. Вы можете безопасно использовать его для себя и своих близких.',
            icon: 'HiOutlineLifebuoy',
        },
        {
            id: "feature_2",
            title: "Мягкость",
            text: 'Это одна из основных деталей полотенца. 600 GSM 100% турецкий хлопок, используемый в наших полотенцах, делает их мягче, чем другие обычные полотенца. Почувствуйте мягкость этих полотенец, вытирая руки, лицо или тело.',
            icon: 'LuFileHeart',
        },
        {
            id: "feature_3",
            title: "Водопоглощение",
            text: 'Если впитывающей способности полотенца недостаточно, оно вообще не сработает. Поэтому роскошные банные полотенца всегда должны иметь высокую впитывающую способность.',
            icon: 'LuGlassWater',
        },
        {
            id: "feature_4",
            title: "Долговечность",
            text: 'Турецкие полотенца, изготовленные двойным стежком, намного прочнее других полотенец. Эти продукты могут использоваться в течение многих лет без износа.',
            icon: 'WiStrongWind',
        },
    ]
    return (
        <section className='feature_container p-15' id='features'>
            <h3 className="section_title">
                Melatolia - Soft Linen
            </h3>
            <img className='section_line' src={line} alt='line' />
            <p className="section_desc">Мы рассмотрели 4 различных критерия, чтобы предложить турецкие полотенца максимального качества для людей, которые ищут полотенца.</p>
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