import React from "react";
import PageHeader from "components/PageHeader";
import Profile from "components/about/Profile";
import "./About.scss";
import { useTranslation } from 'react-i18next';

import taylorImage from "images/profiles/taylor.png";
import gabrielImage from "images/profiles/gabe.png";
import franzImage from "images/profiles/franz.png";
import danImage from "images/profiles/dan.png";
import valImage from "images/profiles/val.png";
import hannahImage from "images/profiles/hannah.jpg";
import svenImage from "images/profiles/sven.png";
import veraImage from "images/profiles/vera.png";
import moritzImage from "images/profiles/moritz.png";
import felixImage from "images/profiles/felix.png";

export default function About() {
  const { t } = useTranslation()
  
  const content = (
    <div>
      <p>
        {t('about:sectionPart1')}
      </p>
      <p>
        {t('about:sectionPart2')}
      </p>
    </div>
  );

  return (
    <div className="about content navbar-padding">
      <PageHeader title={t('about:header')} content={content}></PageHeader>
      <section>
        {/* <h4 className="secondary-title button-text">Team</h4> */}
        <div className="grid-narrow">
          <Profile name="Taylor Harvey" role={t('about:role.taylor')} image={taylorImage} />
          <Profile name="Gabriel Heinrich" role={t('about:role.gabriel')} image={gabrielImage} />
          <Profile name="Franz-Josef Wollang" role={t('about:role.franz')} image={franzImage} />
          <Profile name="Dan McAtee" role={t('about:role.dan')} image={danImage} />
          <Profile name="Valeria Koriatchenko" role={t('about:role.valeria')} image={valImage} />
          <Profile name="Sven Laschinski" role={t('about:role.sven')} image={svenImage} />
          <Profile name="Hannah Mühlfeldner" role={t('about:role.hannah')} image={hannahImage} />
          <Profile name="Vera Scheunert" role={t('about:role.vera')} image={veraImage} />
          <Profile name="Moritz Piehl" role={t('about:role.moritz')} image={moritzImage} />
          <Profile name="Felix Wippich" role={t('about:role.felix')} image={felixImage} />
        </div>
      </section>
    </div>
  );
}
