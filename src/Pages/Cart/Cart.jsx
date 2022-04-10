import React from 'react'
import { createStructuredSelector } from 'reselect'
import EmptyCart from '../../Components/Cart/EmptyCart/EmptyCart'
import Footer from '../../Components/Common/Footer/Footer'
import Logo from '../../Components/Common/Logo/Logo'
import Menu from '../../Components/Common/Menu/Menu'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/Cart/cart.selector'
import './styles.css'
import { connect } from 'react-redux';

const Cart = ({ cartCount, cartList, cartTotal }) => {

    return (
        <>
            <div className="cart-header">
                <Logo />
            </div>
            {cartCount === 0 ? (
                <EmptyCart />
            ) : (
                <div className="orders">
                    <h1 className='orders-heading'> Your Orders</h1>
                    <div className="orders-menu">
                        <Menu list={cartList} />
                    </div>
                    <h3 className='orders-total'>Your Total ${cartTotal}</h3>
                </div>
            )}
            <Footer />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Cart);