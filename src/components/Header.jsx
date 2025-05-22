import styles from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image src="/icons/favicon.ico" alt="Logo" width={50} height={50} />
                <h1>STUDENTS!</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li><a href="/home" className={styles.navA}>Home</a ></li>
                    <li className={styles.navLi}><a href="/sala" className={styles.navA}>Alunos!</a></li>
                </ul>
            </nav>
        </header>
    );
}