import React from 'react';

import Amazon from '../../assets/images/amazon.png'
import './Partners.css'
function Partners(props) {
    return (
        <div className="partners_container">

            <div className="partners_wrapper">
                <ul className="partners_list">
                    <li className="partners_list_item">
                        <a href='https://www.amazon.com/s?k=turkish+towel&i=garden&rh=n%3A1063244%2Cp_36%3A1253524011%2Cp_n_feature_sixteen_browse-bin%3A41943695011&dc&ds=v1%3AUcZySSf0HzkyPnJUXDDIyUZrXe48MwCpoLGH330Tm1g&crid=135VMUG96O6CZ&qid=1686910264&rnid=41942080011&sprefix=turkish+towel%2Caps%2C179&ref=sr_nr_p_n_feature_sixteen_browse-bin_3' target='_blank' rel='noopener noreferrer'><img src={Amazon} alt='amazon' /></a>
                    </li>
                </ul>
            </div>


        </div>
    );
}

export default Partners;