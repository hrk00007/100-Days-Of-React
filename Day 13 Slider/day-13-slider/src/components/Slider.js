import React, { useState } from 'react';
import items from '../Data/data'
import Carousel from "react-elastic-carousel"
const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },
]
let Slider = () => {
    const [products, setProducts] = useState(items)
    return (
        <section>
            <div className="row">
                <Carousel breakPoints={breakPoints} itemsToShow={3}>
                    {
                        products.map((product) => {
                            return (

                                <div className="product" key={product.id}>
                                    <div className="product-head">
                                        <a href="/">
                                            <img src={product.img} alt="" /></a>
                                    </div>
                                    <div className="product-body">
                                        <div className="title">
                                            <h5>{product.title}</h5>
                                        </div>
                                        <div className="price">
                                            <span>{product.start}</span>
                                        </div>
                                        <div className="rating">
                                            <div className="star">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-footer">
                                            <div className="btn">
                                                <a href="/" className='btn-custom primary'>Add to Cart</a>
                                                <a href="/" className='btn-custom second'>Quick View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </Carousel>
            </div>
        </section>
    )
}
export default Slider;