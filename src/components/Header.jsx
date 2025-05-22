import styles from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image src="/icons/favicon.ico" alt="Logo" width={50} height={50} />
                <h1>CLASSES!</h1>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/sala">Salas!</a></li>
                    <li><a href="/home">Home</a></li>
                </ul>
            </nav>
        </header>
    );
}