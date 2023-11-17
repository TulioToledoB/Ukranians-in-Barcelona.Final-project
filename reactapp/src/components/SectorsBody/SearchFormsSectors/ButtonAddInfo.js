import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

function ButtonAddInfo() {
  const { t } = useTranslation();
  return <button>{t("buttonAdminAddInfo")}</button>;
}

export default ButtonAddInfo;
