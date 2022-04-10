import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../Redux/Cart/cart.selector';
import './styles.css'

const Cartcount = ({ cartCount }) => {
    const history = useHistory();
    return (
        <div className="btnCartCount" onClick={() => history.push('/cart')}>
            <div className="count">
                {cartCount >= 100 ? '99+' : cartCount}
            </div>
            <i className="fas fa-shoppping-cart"></i>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(Cartcount)