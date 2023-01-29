import React, { useState } from 'react';
import Buscket from '../Buscket';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__block">
                    <div className="nav__logo">
                        {/* <img src="./img/nav_logo1.svg" alt="navLogo" /> */}
                        <h2>Bookhub</h2>
                    </div>
                    <label className="nav__search">
                        <input
                            type="search"
                            className="nav__input"
                            id="searchInput"
                            placeholder="Search books"
                        />
                    </label>
                    <div className="nav__logout">
                        <button id="logout" onClick={() => setOpen(state => !state)}>Cart</button>
                    </div>
                </div>
            </div>
            {open && <Buscket setOpen={setOpen}/>}
        </nav>
    );
}

export default Navbar;
