import React from "react";
import PageHeader from "../components/PageHeader";
import Picture from "../components/Picture";
import { useTranslation } from "react-i18next";
import Page from "../layout/page";
import Head from "next/head";

const collage = "/images/contact/devhaus-collage.jpg";

export default function Contact() {
  const { t } = useTranslation();

  const subtitle = <p>{t("contact:subheader")}</p>;

  const content = (
    <div className="measure-narrow">
      <p>
        info@devhausleipzig.de
        <br />
        +49 151 21675615
      </p>
      <p>
        Floßplatz 6 <br />
        04109 Leipzig <br />
        {t("contact:germany")}
      </p>
    </div>
  );

  return (
    <Page>
      <Head>
        <title>Contact — Devhaus Leipzig</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1; maximum-scale=1"
        />
        <meta
          name="author"
          content="Devhaus Leizpig — A learning community for tech professionals"
        />
      </Head>
      <PageHeader
        title={t("contact:header")}
        subtitle={subtitle}
        content={content}
      ></PageHeader>
      <Picture
        src={collage}
        alt="Devhaus Leipzig"
        width={1536}
        height={1536}
      ></Picture>
    </Page>
  );
}
