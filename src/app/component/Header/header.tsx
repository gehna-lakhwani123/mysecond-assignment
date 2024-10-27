import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My Website</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;