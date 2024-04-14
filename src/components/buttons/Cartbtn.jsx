import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Cartbtn() {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </Link>
        </>
    )
}

export default Cartbtn

