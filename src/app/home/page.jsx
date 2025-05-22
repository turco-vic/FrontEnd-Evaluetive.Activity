import styles from "./Home.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            < Header />
            <div className={styles.content}>
                <Image src="/images/profile.png" alt="Foto de Perfil" width={200} height={200} className={styles.profile} />
                <h1 className={styles.titleContent}>Enzo Alves Turcovic | 1TDS1</h1>
                <h2 className={styles.subTitleContent}>Instrutores: Marcelo Carboni & Thiago Ferreira</h2>
                <h2 className={styles.subTitleContent}>Disciplina: Front-End | Projeto Avaliativo</h2>
                <p className={styles.descriptionContent}>O objetivo deste projeto é desenvolver uma aplicação Front-End com Next.js, consumindo uma API criada por mim anteriormente, utilizando as melhores práticas de desenvolvimento Web, foco em performance, modularidade, responsividae e UX/UI!</p>
                <p className={styles.descriptioncontent}>A API consiste em um sistema de gerenciamento de alunos, onde é possível visualizar, adicionar, editar e remover alunos. Ela será integrada a esta aplicação Front-End mostrando os dados da Entidade 1. </p>
                <button className={styles.button}>
                    <Link href="/sala">
                        <span className={styles.buttonText}>Ver Alunos</span>
                    </Link>
                </button>
            </div>
        </div>
    );
}
