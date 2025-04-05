import React from "react";
import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import styles from './styles.module.css';

export default function HomePage() {
    return (
        <div className={styles.hero}>

            <div className={styles.grid}>
                <div className={styles.grid}>
                    <a href="https://twoja-org.github.io/kurs-web" className={styles.card}>
                        <FaLaptopCode size={40} />
                        <h2>Programowanie Webowe</h2>
                        <p>HTML, CSS, JS, React... Cały świat w przeglądarce.</p>
                    </a>

                    <a href="https://twoja-org.github.io/kurs-mobile" className={styles.card}>
                        <FaMobileAlt size={40} />
                        <h2>Aplikacje Mobilne</h2>
                        <p>Flutter, Kotlin, Android – koduj do kieszeni!</p>
                    </a>

                    <a href="https://twoja-org.github.io/kurs-desktop" className={styles.card}>
                        <FaDesktop size={40} />
                        <h2>Aplikacje Desktopowe</h2>
                        <p>C++, C#, JavaFX – klasyka interfejsu lokalnego.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}