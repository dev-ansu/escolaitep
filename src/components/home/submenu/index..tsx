"use client"
import Link from "next/link";
import styles from "./styles.module.scss";
import {X, Menu} from "lucide-react";
import { useEffect, useState } from "react";

const Submenu = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        
        const handleResize = ()=>{
            if(window.innerWidth > 768){
                setIsOpen(false);
            }
        }

        window.addEventListener("resize", handleResize)
        return window.removeEventListener("resize", handleResize);

    },[])

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    return(
        <section className={`${styles.submenu}`}>

            <div onClick={toggleMenu} className={styles.submenuIcon}>
                <Menu size={34} color="#121212" />
                Menu
            </div>

            <ul className={`${styles.ul} ${isOpen ? styles.open:""}`}>
                {isOpen && 
                    <button onClick={toggleMenu} className={styles.closeButton}>
                        <X size={54} color="#121212" />
                    </button>
                }
          
            </ul>

        </section>
    )
}

export default Submenu;