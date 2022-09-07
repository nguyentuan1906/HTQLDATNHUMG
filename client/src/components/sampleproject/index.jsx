
import React from 'react';
import styles from "./SampleProject.module.scss";
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

const SampleProject = () => {
    const { t } = useTranslation();
    const sampleProjectList = [
        {
            Stt: 1,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: 'a.p',

        },
        {
            Stt: 2,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',

        },
        {
            Stt: 3,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',

        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },

        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '1921050649',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },

    ]

    return (
        <div className={styles['sampleProject']}>
            <div className={styles['s_ProjectStyle']}>
                <div className={styles['s_ProjectName']}>
                    <div className={styles['sp_Stt']}> {t('Stt')} </div>
                    <div className={styles['sp_Msv']}> {t('Mã sinh viên')} </div>
                    <div className={styles['sp_Author']}> {t('SV thực hiện')} </div>
                    <div className={styles['sp_Name']}> {t('Tên đồ án')} </div>
                    <div className={styles['sp_Instructor']}> {t('GV hướng dẫn')} </div>
                    <div className={styles['sp_ReviewerTeacher']}> {t('Giáo viên phản biện')} </div>
                    <div className={styles['sp_Preview']}> {t('Xem')} </div>
                    <div className={styles['sp_Download']}> {t('Download')} </div>
                </div>
                <div className={styles['s_ProjectList']}>{sampleProjectList.map((item) => (
                    <div className={styles['s_ProjectItem']}>
                        <div className={styles['sp_Stt']}>{item.Stt}</div>
                        <div className={styles['sp_Msv']}>{item.Msv}</div>
                        <div className={styles['sp_Author']}>{item.Author}</div>
                        <div className={styles['sp_Name']}>{item.Name}</div>
                        <div className={styles['sp_Instructor']}>{item.Instructor}</div>
                        <div className={styles['sp_ReviewerTeacher']}>{item.ReviewerTeacher}</div>
                        <Link to={item.Preview} className={styles['sp_Preview']}> Xem </Link>
                        <Link to={item.Download} className={styles['sp_Download']}> Download </Link>
                    </div>
                ))}</div>

            </div>
        </div>
    )
};

export default SampleProject;