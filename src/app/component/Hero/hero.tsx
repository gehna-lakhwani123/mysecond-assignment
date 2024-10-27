import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h2 className={styles.heading}><b>Welcome to My Website</b></h2>

            <br></br>

            <br></br>

            <p className={styles.paragraph}>Your journey starts here!</p>
        </section>
    );
};

export default Hero;