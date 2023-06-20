import React from 'react';

import line from '../../assets/images/line.png';

import './AboutUs.css'
function AboutUs() {
    return (
        <section className="aboutus_container p-15" id='aboutus'>
            <div className="section_wrapper">
                <h3 className="section_title">
                    Окутайте себя комфортом и стилем с нашими плюшевыми махровыми полотенцами
                </h3>
                <img className='section_line' src={line} alt='line' />
                <div className="aboutus_content">
                    {/* <img src={towel} alt='towel' /> */}
                    <div className="aboutus_image"></div>
                    <p className="section_desc">
                        Полотенца обладают высокой впитывающей способностью, что означает, что они быстро и
                        эффективно высушите кожу после душа или ванны.
                        Хлопковые волокна предназначены для отвода влаги.
                        гарантируя, что после использования вы будете чувствовать себя сухо и комфортно.
                        Высококачественный хлопок кольцевого прядения, используемый в этих полотенцах, позволяет
                        максимальная мягкость и пушистость. Это создает невероятно плюшевый
                        Текстура, которая ощущается нежной и уютной на вашей коже.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;