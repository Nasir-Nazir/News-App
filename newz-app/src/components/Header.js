import React, { useState } from 'react'
import Head from './Head'
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <>
            <marquee>Connect with your Community</marquee>
            <Head />
            <header>
                <div className="container paddingSm">
                    <nav>
                        <ul>
                            <li ><Link to='/home'>Home</Link></li>
                            <li ><Link to='/business'>Business</Link></li>
                            <li ><Link to='/entertainment'>Entertainment</Link></li>
                            <li ><Link to='/general'>General</Link></li>
                            <li ><Link to='/health'>Health</Link></li>
                            <li ><Link to='/sports'>Sports</Link></li>
                            <li ><Link to='/science'>Science</Link></li>
                            <li ><Link to='/technology'>Technology</Link></li>
                            <Link to="/search"> <span class="material-symbols-outlined">
                                search
                            </span></Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header