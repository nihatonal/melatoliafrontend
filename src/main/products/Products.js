import React, { useState } from 'react';

import { productsData } from '../../assets/productsData';
import line from '../../assets/images/line.png';

import Fancybox from '../../shared/UI/Fancybox';
import './Products.css'
function Products(props) {
    console.log(`${process.env.REACT_APP_ASSETS_URL}${require(`../../assets/images/${productsData[0].color}/${productsData[0].images[0]}.jpg`)}`)
    console.log(process.env.REACT_APP_ASSETS)

    return (
        <div className='section_container p-15' id='products'>
            <div className="section_wrapper">
                <h3 className="section_title">
                    Collection of The Melatolia
                </h3>
                <img className='section_line' src={line} alt='line' />
                <p className="section_desc">4 different colors Bright Whitee, Navy Blue, Dark Grey, Rockridge Gray</p>
                <div className="products_items_wrapper">
                    {productsData.map((product, index) =>
                        <div className="products_item" key={product.id}>
                            <h4 className="products_item_title">
                                {product.title}
                            </h4>
                            <Fancybox

                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                    Thumbs: {
                                        type: "modern",
                                        showOnStart: false

                                    },
                                }}
                            >
                                {product.images.map((el) =>
                                    <a
                                        key={product.color + el}
                                        id={el}
                                        data-fancybox={product.id}
                                        //${process.env.REACT_APP_ASSETS_URL}
                                        href={`${process.env.REACT_APP_ASSETS_URL}${require(`../../assets/images/${product.color}/${el}.jpg`)}`}
                                        style={el !== product.color + '002' ? { display: 'none' } : null}
                                    >
                                        <img src={require(`../../assets/images/${product.color}/${el}.jpg`)} width="200" height="150" alt='image' />
                                    </a>)}

                            </Fancybox>


                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Products;