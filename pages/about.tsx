import React from "react";
import PageHeader from "../components/PageHeader";
import Profile from "../components/Profile";
import { useTranslation } from "react-i18next";
import Page from "../layout/page";
import Head from "next/head";

const taylorImage = "/images/profiles/taylor.png";
const gabrielImage = "/images/profiles/gabe.png";
const franzImage = "/images/profiles/franz.png";
const danImage = "/images/profiles/dan.png";
const valImage = "/images/profiles/val.png";
const natalieImage = "/images/profiles/natalie.png";
const svenImage = "/images/profiles/sven.png";
const veraImage = "/images/profiles/vera.png";
const moritzImage = "/images/profiles/moritz.png";
const felixImage = "/images/profiles/felix.png";

export default function About() {
  const { t } = useTranslation();

  const content = (
    <div>
      <p>{t("about:sectionPart1")}</p>
      <p>{t("about:sectionPart2")}</p>
    </div>
  );

  return (
    <Page>
      <Head>
        <title>About - Devhaus Leipzig</title>
      </Head>
      <PageHeader title={t("about:header")} content={content}></PageHeader>
      <section>
        {/* <h4 className="secondary-title button-text">Team</h4> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Profile
            name="Taylor Harvey"
            role={t("about:role.taylor")}
            image={taylorImage}
          />
          <Profile
            name="Gabriel Heinrich"
            role={t("about:role.gabriel")}
            image={gabrielImage}
          />
          <Profile
            name="Franz-Josef Wollang"
            role={t("about:role.franz")}
            image={franzImage}
          />
          <Profile
            name="Dan McAtee"
            role={t("about:role.dan")}
            image={danImage}
          />
          <Profile
            name="Valeria Koriatchenko"
            role={t("about:role.valeria")}
            image={valImage}
          />
          <Profile
            name="Sven Laschinski"
            role={t("about:role.sven")}
            image={svenImage}
          />
          <Profile
            name="Natalie Ramp"
            role={t("about:role.natalie")}
            image={natalieImage}
          />
          <Profile
            name="Vera Scheunert"
            role={t("about:role.vera")}
            image={veraImage}
          />
          <Profile
            name="Moritz Piehl"
            role={t("about:role.moritz")}
            image={moritzImage}
          />
          <Profile
            name="Felix Wippich"
            role={t("about:role.felix")}
            image={felixImage}
          />
        </div>
      </section>
    </Page>
  );
}
