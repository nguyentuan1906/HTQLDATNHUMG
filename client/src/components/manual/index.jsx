import React, { useCallback, useTransition } from "react";
import styles from "./manual.module.scss";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Manual = () => {
    const { t } = useTranslation();
    const listManual = [
        {
            id: 1,
            name: 'Hướng dẫn sử dụng',
            time: '31/8/2022',
            link: '/',
        },
        {
            id: 2,
            name: 'manual2',
            time: '31/8/2022',
            link: '/',
        },
        {
            id: 3,
            name: 'manual3',
            time: '31/8/2022',
            link: '/',
        },
        {
            id: 4,
            name: 'manual4',
            time: '31/8/2022',
            link: '/',
        }
    ]
    return (
        <div className={styles['manual']}>
            <div className={styles['manual_name']}>{t('userManual')}</div>
            <div className={styles['manual_list']}>
                <div className={styles["manual_map"]}>{listManual.map((item) => (
                    <div className={styles["manual_list"]}>
                        <div className={styles["manual_content"]}>{item.name}</div>
                        <div className={styles["manual_time"]}>{item.time}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Manual;