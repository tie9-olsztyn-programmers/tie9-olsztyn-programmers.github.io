import React from "react";
import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import styles from './styles.module.css';

export default function HomePage() {
    return (
        <div className={styles.hero}>

            <div className={styles.grid}>
                <div className={styles.grid}>
                    <a href="https://tie9-olsztyn-programmers.github.io/web/" className={styles.card}>
                        <FaLaptopCode size={40}/>
                        <h2>Aplikacje Webowe</h2>
                        <p>JS,TS, MERN, Webstorm ... Cały świat w przeglądarce.</p>
                    </a>

                    <a href="https://tie9-olsztyn-programmers.github.io/mobile/" className={styles.card}>
                        <FaMobileAlt size={40}/>
                        <h2>Aplikacje Mobilne</h2>
                        <p> Kotlin, Android, Android Studio – koduj do kieszeni!</p>
                    </a>

                    <a href="https://tie9-olsztyn-programmers.github.io/desktop/" className={styles.card}>
                        <FaDesktop size={40}/>
                        <h2>Aplikacje Desktopowe</h2>
                        <p>C#, Avalonia, Rider – klasyka interfejsu lokalnego.</p>
                    </a>
                </div>
                <h3> Kalendarz z zadaniami </h3>
               <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&showPrint=0&showTz=0&showCalendars=0&showTabs=0&src=anMuZHlkYWt0eWthQGdtYWlsLmNvbQ&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23E4C441"
                        style={{borderWidth: 0}}
                        width="800"
                        height="600"
                        scrolling="no"></iframe>

            </div>
        </div>
    );
}