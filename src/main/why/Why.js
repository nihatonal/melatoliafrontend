import React from 'react';
import line from '../../assets/images/line.png';


import { BsCheckCircle } from 'react-icons/bs';
import './Why.css';
function Why(props) {
    return (
        <section className="why_container">
            <div className="section-wrapper why_wrapper">
                <div className="why_top_banner">
                    <h4 className="why_top_banner_title">Highly Absorbent</h4><span>-</span>
                    <h4 className="why_top_banner_title">Quick Dry</h4><span>-</span>
                    <h4 className="why_top_banner_title">Double Stitched Hem</h4><span>-</span>
                    <h4 className="why_top_banner_title">Fluffy Towels</h4>
                </div>

                <div className="why_content p-15">
                    <div className="why_image_wrapper"></div>
                    <h3 className="section_title">
                        Why Melatolia?
                    </h3>
                    <img className='section_line' src={line} alt='line' />
                    <p className="section_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <ul className="why_list">
                        <li className="why_list_item"><BsCheckCircle />Highly Absorbent</li>
                        <li className="why_list_item"><BsCheckCircle />Quick Dry</li>
                        <li className="why_list_item"><BsCheckCircle />Double Stitched Hem</li>
                        <li className="why_list_item"><BsCheckCircle />Fluffy Towels</li>
                        {/* <li className="why_list_item"><FaRegCheckCircle /></li> */}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Why;