import React from "react";
import styles from "./contact.module.scss";
import { useTranslation } from "react-i18next";

const tb =() => {alert(" cám on đã liên hệ với chung tôi")};
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className={styles["font2"]}>{t("contact")}</h1>
      <div className={styles["contact"]}>
        <div className={styles["contact__left"]}>
          {" "}
          <div className={styles["font3_2"]}> Liên hệ trực tiếp</div>
          <div className={styles["font1"]}>
            Bạn đang gặp khó khăn cần được hỗ trợ hay cần đóng góp ý kiến cho bộ
            phận chăm sóc khách hàng? Hãy liên hệ qua bộ phận chăm sóc khách
            hàng. Chúng tôi sẽ giải quyết vấn đề của bạn nhanh nhất có thể!{" "}
          </div>
          <div className={styles["font1_2"]}> số điện thoại:0244554</div>
          <div className={styles["font1_2"]}> Địa Chỉ: Truong dại học</div>
        </div>

        <div className={styles["contact__right"]}>
          <div className={styles["font3"]}> Liên hệ với chúng tôi</div>
          <form className={styles["box"]}>
            <input
              className={styles["Name"]}
              type="text"
              placeholder={t("name")}
            />
            <input
              className={styles["Phone"]}
              type="password"
              placeholder={t("phone")}
            />
            <input
              className={styles["Email"]}
              type="password"
              placeholder={t("email")}
            />
            <input
              className={styles["Address"]}
              type="password"
              placeholder={t("address")}
            />
            <textarea
              type="string"
              className={styles[" "]}
              placeholder={t("import content")}
              rows="10"
              col="40"
            />
            <button className={styles["button2"]} onClick={"tb"}>{t("give")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
