import React, { forwardRef } from 'react'
import MenuItem from './MenuItem/MenuItem'
import './styles.css'

const Menu = forwardRef(({ list }, ref) => (
    <main ref={ref}>
        {list.map((item) => (
            <MenuItem key={item.id} item={item} />
        ))}
    </main>
))

export default Menu