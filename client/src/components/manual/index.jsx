import React, { useTransition } from "react";
import styles from "./manual.module.scss";
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

const Manual = () => {
    const{ t } = useTranslation();
    return (
        <div className={styles["manual"]}>
            <div className={styles["manual_style"]}>
                <div className={styles["manual_name"]}>Manual</div>
                <div className={styles["manual_list"]}>
                    <Link to="/" className={styles["manual_content"]}>Manual Content 1</Link>
                    <div className={styles["manual_time"]}>
                        <p>31/8/2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manual;