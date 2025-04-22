import React from "react";
import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import styles from './styles.module.css';

export default function HomePage() {
    return (
        <div className={styles.hero}>

            <div className={styles.grid}>
                <div className={styles.grid}>
                    <a href="https://tie9-olsztyn-programmers.github.io/web/" className={styles.card}>
                        <FaLaptopCode size={40} />
                        <h2>Aplikacje Webowe</h2>
                        <p>JS,TS, MERN, Webstorm ... Cały świat w przeglądarce.</p>
                    </a>

                    <a href="https://tie9-olsztyn-programmers.github.io/mobile/" className={styles.card}>
                        <FaMobileAlt size={40} />
                        <h2>Aplikacje Mobilne</h2>
                        <p> Kotlin,  Android, Android Studio – koduj do kieszeni!</p>
                    </a>

                    <a href="https://tie9-olsztyn-programmers.github.io/desktop/" className={styles.card}>
                        <FaDesktop size={40} />
                        <h2>Aplikacje Desktopowe</h2>
                        <p>C#, Avalonia, Rider – klasyka interfejsu lokalnego.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}