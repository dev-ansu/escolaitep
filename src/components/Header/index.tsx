"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Header = ()=>{
    const [top, setTop] = useState(true);

    const scrollHandler = ()=>{
        window.scrollY > 10 ? setTop(false):setTop(true);
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler);
        return window.removeEventListener("scroll", scrollHandler);
    },[top])

    return(
        <header className={`${styles.header} ${!top ? styles.fixed:styles.background}`}>
            
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            ITEP
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <Link href="/#escola">Escola</Link>
                        <Link href="/">Cursos</Link>
                        <Link href="/vagas">Vagas</Link>
                        <Link href="/contatos">Contatos</Link>
                    </nav>

                </div>

            </div>

        </header>
    )
}

export default Header;