import React from "react";
import Link from "next/link";
import styles from './styles.module.css'


function Footer(){
    return (

        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank">
            Sena Akyüz
            </Link>
                        
        </footer>
    ) 
}

export default Footer;