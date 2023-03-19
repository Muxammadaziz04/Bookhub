import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Buscket from '../Buscket';
import { HistoryIcon } from '../icons';

const Navbar = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const handleChange = (e) => {
        if (e.keyCode === 13) {
            router.push(`/?search=${e.target.value.trim()}`)
        }
    }
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__block">
                    <div className="nav__logo">
                        <Link href='/'>
                            <h2>Bookhub</h2>
                        </Link>
                    </div>
                    <label className="nav__search">
                        <input
                            type="search"
                            className="nav__input"
                            id="searchInput"
                            placeholder="Search books"
                            onKeyUp={handleChange}
                        />
                    </label>
                    <div style={{display: "flex"}}>
                        <div className="nav__logout">
                            <button id="logout" onClick={() => router.push('/history')}><HistoryIcon /></button>
                        </div>
                        <div className="nav__logout">
                            <button id="logout" onClick={() => setOpen(state => !state)}>Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Buscket setOpen={setOpen} />}
        </nav>
    );
}

export default Navbar;
