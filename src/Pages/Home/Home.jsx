import React, { useRef } from 'react'
import Cartcount from '../../Components/Common/CartcountButton/Cartcount'
import Footer from '../../Components/Common/Footer/Footer'
import Menu from '../../Components/Common/Menu/Menu'
import Banner from '../../Components/Home/Banner/Banner'
import './styles.css'
import { menuItemsData } from '../../Components/Common/Menu/data'

const Home = () => {
    const menuRef = useRef();

    const handleScrollMenu = () =>
        menuRef.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <>
            {/* Banner */}
            <Banner handleScrollMenu={handleScrollMenu} />
            {/* Menu */}
            <Menu list={menuItemsData} ref={menuRef} />
            {/* Footer */}
            <Footer />
            {/* Cart Count Button */}
            <Cartcount />
        </>
    )
}

export default Home