import React, { useTransition } from "react";
import styles from "./menu.module.scss";
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

const Menu = () => {
    const student = true;
    const teacher = false;
    const admin = false;
    const { t } = useTranslation();
    return (
        <div className={styles['menu']}>
            {student && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('Feature')} </div> 
                <div className={styles['list_menu']}>
                    <Link to="/" >{t('projectRegistration')}</Link>
                    <Link to="/" >{t('projectList')}</Link>
                    <Link to="/" >{t('projectDefenseSchedule')}</Link>
                    <Link to="/" >{t('projectPoin')}</Link>
                </div>
            </div>}

            {teacher && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('Feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" >{t('projectRegistration')}</Link>
                    <Link to="/" >{t('studentList')}</Link>
                    <Link to="/" >{t('projectDefenseSchedule')}</Link>
                    <Link to="/" >{t('projectPoin')}</Link>
                </div>
            </div>}

            {admin && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('Feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" >{t('Quản lý đồ án cá nhân')}</Link>
                    <Link to="/" >{t('Quản lý sinh viên')}</Link>
                    <Link to="/" >{t('Lịch bảo vệ đồ án')}</Link>
                    <Link to="/" >{t('Điểm bảo vệ đồ án')}</Link>
                </div>
            </div>}
        </div>
    )
}

export default Menu