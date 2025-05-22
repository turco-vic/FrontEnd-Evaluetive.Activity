"use client";
import Header from "../../components/Header";
import styles from "../../styles/Header.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Pagination, Modal, Card, Skeleton } from "antd";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Sala() {
    return (
        <div className={styles.container}>
            <Header />
            <h1>Oi</h1>
            <p>sei lá</p>
        </div>
    );
}
