import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import { Link } from "react-router-dom";

function ButtonAddInfo() {
  const { t } = useTranslation();
  return (
    <Link to="/hospitalForm">
      <button className="buttonAdministrator">{t("buttonAdminAddInfo")}</button>
    </Link>
  );
}

export default ButtonAddInfo;
