import React from 'react';

function CartItem(props) {
    return (
        <>
            <tr>
                <td className="product-col">
                    <div className="product">
                        <figure className="product-media">
                            <a href="#">
                                <img src="/assets/images/products/table/product-1.jpg"
                                     alt="Product image" />
                            </a>
                        </figure>

                        <h3 className="product-title">
                            <a href="#">Beige knitted elastic runner shoes</a>
                        </h3>
                    </div>
                </td>
                <td className="price-col">$84.00</td>
                <td className="quantity-col">
                    <div className="cart-product-quantity">
                        <input type="number" className="form-control" value="1" min="1" max="10"
                               step="1" data-decimals="0"  />
                    </div>
                </td>
                <td className="total-col">$84.00</td>
                <td className="remove-col">
                    <button className="btn-remove"><i className="icon-close"></i></button>
                </td>
            </tr>
        </>
    );
}

export default CartItem;