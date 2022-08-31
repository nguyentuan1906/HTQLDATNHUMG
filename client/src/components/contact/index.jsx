import React from "react";
import styles from "./contact.module.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["contact"]}>
      <div className={styles["contact__left"]}>
        {" "}
        <h1 className={styles["font2"]}>{t("contact")}</h1>
        <div className={styles["font1"]}>Bạn đang gặp khó khăn cần được hỗ trợ hay cần đóng góp ý kiến cho bộ phận chăm sóc khách hàng? Hãy liên hệ qua bộ phận chăm sóc khách hàng. Chúng tôi sẽ giải quyết vấn đề của bạn nhanh nhất có thể! </div>
<button className="button-28" role="button">Button 28</button>
        
      
      
      </div>

      <div className={styles["contact__right"]}>
        <tr>
          <td>
          {t("name")}</td>
          <input
            type="text"
            className={styles["Name"]}
            placeholder={"Họ tên"}
          />
        </tr>
        <tr> <td>
          {t("phone")}</td>
          <button
            className={styles["Phone"]}>
            
          </button>
        </tr>
        <tr><td>
          {t("email")}</td>
          <input
            type="text"
            className={styles["Email"]}
            placeholder={"Email"}
          />
        </tr>
        <tr>
          {t("Nd")}
          <textarea type="string" className={styles["Nd"]} rows="7" col="50" />
        </tr>
        <button> lien he </button>
      </div>
    </div>
  );
};

export default Contact;
