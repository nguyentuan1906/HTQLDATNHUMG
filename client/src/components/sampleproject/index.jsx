
import React, { useState, useEffect } from 'react';
import styles from "./SampleProject.module.scss";
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

const SampleProject = () => {
    const { t } = useTranslation();
    const items = [
        {
            Stt: 1,
            Msv: '1',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: 'a.p',

        },
        {
            Stt: 2,
            Msv: '2',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',

        },
        {
            Stt: 3,
            Msv: '3',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',

        },
        {
            Stt: 4,
            Msv: '4',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '5',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '6',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },

        {
            Stt: 4,
            Msv: '7',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '8',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '9',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '0',
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
            Msv: '5',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '5',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '5',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },
        {
            Stt: 4,
            Msv: '5',
            Author: 'Nguyễn Anh Tuấn',
            Name: 'Công nghệ phần mềm',
            Instructor: ' Lê Minh Phươg',
            ReviewerTeacher: 'Trang',
            Preview: '/',
            Download: '/',
        },

    ]

    const [sampleProjectList, setSampleProjectList] = useState([]);
    useEffect(() => {
        setSampleProjectList(items);
        setSearchResults(items);
    }, [])

    const [searchResults, setSearchResults] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(sampleProjectList)
        const resultsArray = sampleProjectList.filter(sampleProjectList => sampleProjectList.Msv.includes(e.target.value) || sampleProjectList.Author.includes(e.target.value) || sampleProjectList.Name.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <div className={styles['sampleProject']}>
            <form className={styles['search']} onSubmit={handleSubmit}>
                <div className={styles['name']}> Đồ án mẫu</div>
                <input
                    className={styles['search__input']}
                    placeholder={t("Tìm theo MSV, tên sinh viên, tên đề tài")}
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
            </form>
            <div className={styles['s_ProjectStyle']}>
                <div className={styles['s_ProjectName']}>
                    <div className={styles['sp_Stt']}> {t('Stt')} </div>
                    <div className={styles['sp_Msv']}> {t('Mã sinh viên')} </div>
                    <div className={styles['sp_Author']}> {t('Sv thực hiện')} </div>
                    <div className={styles['sp_Name']}> {t('Tên đồ án')} </div>
                    <div className={styles['sp_Instructor']}> {t('Gv hướng dẫn')} </div>
                    <div className={styles['sp_ReviewerTeacher']}> {t('Gv phản biện')} </div>
                    <div className={styles['sp_Preview']}> {t('Xem')} </div>
                    <div className={styles['sp_Download']}> {t('Download')} </div>
                </div>
                <div className={styles['s_ProjectList']}>{searchResults.map((item,index) => (
                    <div className={styles['s_ProjectItem']}>
                        <div className={styles['sp_Stt']}>{index+1}</div>
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