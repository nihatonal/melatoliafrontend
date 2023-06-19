import React from 'react';

import line from '../../assets/images/line.png';

import './AboutUs.css'
function AboutUs(props) {
    return (
        <section className="aboutus_container p-15" id='aboutus'>
            <div className="section_wrapper">
                <h3 className="section_title">
                    Wrap Yourself in Comfort and Style with Our Plush Terry Towels
                </h3>
                <img className='section_line' src={line} alt='line' />
                <div className="aboutus_content">
                    {/* <img src={towel} alt='towel' /> */}
                    <div className="aboutus_image"></div>
                    <p className="section_desc">
                        The towels are designed to be highly absorbent, meaning they quickly and efficiently dry off your skin after a shower or bath. The cotton fibers are designed to wick away moisture, ensuring that you're left feeling dry and comfortable after use. The ring spun premium cotton used in these towels allows for maximum softness and fluffiness. It creates an incredibly plush texture that feels gentle and cozy against your skin.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;