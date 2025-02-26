
import React from "react";
import Link from "next/link";
const Header = () =>(
        <header >
            <nav className="flex nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
export default Header;

