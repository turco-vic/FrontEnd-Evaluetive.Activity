"use client";
import Header from "../../components/Header";
import styles from "./Sala.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Pagination, Modal, Card, Skeleton } from "antd";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Alunos() {
    const [data, setData] = useState({
        alunos: [],
        loading: true,
        current: 1,
        pageSize: 0,
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        aluno: null,
        salas: null,
        loading: false,
    });

    useEffect(() => {
        const fetchAlunos = async () => {

            try {
                const { data: alunos } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/alunos`,
                    {
                        headers: HEADERS,
                    }
                );
                setData({ alunos, loading: false, current: 1, pageSize: 5 });
            } catch {
                toast.error("Erro ao carregar alunos!");
                setData((d) => ({ ...d, loading: false }));
            }
        };

        fetchAlunos();
    }, []);

    const openModal = async (aluno) => {
        setModalInfo({ visible: true, aluno, salas: null, loading: true });

        try {
            const { data: salas } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/salas/${aluno.id}`,
                {
                    headers: HEADERS,
                }
            );
            setModalInfo((m) => ({ ...m, salas, loading: false }));
        } catch {
            toast.error("Erro ao carregar aluno!");
            setModalInfo((m) => ({ ...m, loading: false }));
        }
    };

    const paginatedAlunos = () => {
        const start = (data.current - 1) * data.pageSize;
        return data.alunos.slice(start, start + data.pageSize);
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1>Lista de Alunos</h1>

            {data.loading ? (
                <Image
                    src="/images/loading.gif"
                    width={75}
                    height={75}
                    alt="Loading"
                />
            ) : (
                <div className={styles.cardsContainer}>
                    {paginatedAlunos().map((aluno) => (
                        <Card
                            key={aluno.id}
                            className={styles.card}
                            hoverable
                            onClick={() => openModal(aluno)}
                            cover={
                                <Image
                                    alt={aluno.name}
                                    src={aluno.photo ? aluno.photo : "/images/220.svg"}
                                    width={220}
                                    height={220}
                                />
                            }
                        >
                            <Card.Meta
                                title={aluno.nome}
                            />
                        </Card>
                    ))}
                </div>
            )}

            <Modal
                title={`Informações de ${modalInfo.aluno?.name}`}
                open={modalInfo.visible}
                onCancel={() =>
                    setModalInfo({
                        visible: false,
                        aluno: null,
                        salas: null,
                        loading: false,
                    })
                }
                onOk={() =>
                    setModalInfo({
                        visible: false,
                        aluno: null,
                        salas: null,
                        loading: false,
                    })
                }
                width={600}
            >
                {modalInfo.loading ? (
                    <Skeleton active />
                ) : modalInfo.salas ? (
                    <div className={styles.salasInfo}>
                        <p>
                            <span className={styles.label}>Nome:</span>{" "}
                            {modalInfo.salas.nome}
                        </p>
                        <p>
                            <span className={styles.label}>Idade:</span>{" "}
                            {modalInfo.salas.idade}
                        </p>
                        <p>
                            <span className={styles.label}>Sala:</span>{" "}
                            {modalInfo.salas.salas}
                        </p>
                    </div>
                ) : (
                    <p style={{ textAlign: "center" }}>Aluno não encontrado!</p>
                )}
            </Modal>
            
            <Pagination
                current={data.current}
                pageSize={data.pageSize}
                total={data.alunos.length}
                onChange={(page, size) =>
                    setData((d) => ({ ...d, current: page, pageSize: size }))
                }
                showSizeChanger
                pageSizeOptions={["5", "10", "100"]}
            />

            <ToastContainer position="top-right" autoClose={2500} />
        </div>
    );
}
