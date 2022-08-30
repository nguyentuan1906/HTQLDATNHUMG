import React, { useTransition } from "react";
import styles from "./menu.module.scss";
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

const Menu = () => {
    const student = false;
    const teacher = false;
    const admin = false;
    const subject = false;
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

            {/* subject - Bộ môn */}
            {subject && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" >{t('teacherList')}</Link>
                    <Link to="/" >{t('studentList')}</Link>
                    <Link to="/" >{t('setUpACouncil')}</Link>
                    <Link to='/'> {t('makeNews')}</Link>
                    <Link to="/" >{t('projectDefenseSchedule')}</Link>
                    <Link to="/" >{t('projectPoin')}</Link>
                </div>
            </div>}

            {/* admin-Khoa */}
            {admin && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" >{t('subjectList')}</Link>
                    <Link to="/" >{t('studentStatistics')}</Link>
                    <Link to="/" >{t('teacherStatistics')}</Link>
                    <Link to="/" >{t('setUpACouncil')}</Link>
                </div>
            </div>}
        </div>
    )
}

export default Menu