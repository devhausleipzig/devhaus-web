import React from "react";
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import PageHeader from "components/PageHeader";
import { DevhausLine } from "components/HorizontalLine";
import Picture from "components/Picture";
import "./Academy.scss";

import franzImage from "images/profiles/franz.png";
import valImage from "images/profiles/val.png";
import danImage from "images/profiles/dan.png";
import svenImage from "images/profiles/sven.png";

import pic1 from "images/academy/dan-classroom.jpg";
import titleImage from "images/academy/academy.jpg";
import pic2 from "images/academy/gabe-val-prisma.jpg";
import pic3 from "images/academy/val-christina.jpg";
import pic4 from "images/academy/class-1.jpg";

import actaportLogo from "images/logos/actaport.png";
import check24Logo from "images/logos/check24-logo.png";
import compl3teLogo from "images/logos/compl3te-logo.png";
import devhausLogo from "images/devhaus-logo.svg";
import ecommeleonLogo from "images/logos/ecommeleon-logo.png";
import edoxLogo from "images/logos/edox-logo.png";
import idivLogo from "images/logos/idiv.png";
import prismaLogo from "images/logos/prisma-logo.png";
import sciendisLogo from "images/logos/sciendis.png";
import spreadshirtLogo from "images/logos/spreadshirt-logo.png";
import eexLogo from "images/logos/eex.png";
import micoboLogo from "images/logos/micobo.png";
import infaiLogo from "images/logos/infai.jpg";

// these must be written in a way that is language agnostic
const currentCampStart = "21-04-2022";
const currentCampEnd = "19-09-2022";
const campPrice = "€15,110 + VAT";
const financialContact = "info@devhausleipzig.de"

const logos = [
  {
    logo: actaportLogo,
    name: "actaport",
  },
  {
    logo: check24Logo,
    name: "check24",
  },
  {
    logo: compl3teLogo,
    name: "compl3te",
  },
  {
    logo: ecommeleonLogo,
    name: "ecommeleon",
  },
  {
    logo: edoxLogo,
    name: "e-dox",
  },
  {
    logo: idivLogo,
    name: "idiv",
  },
  {
    logo: prismaLogo,
    name: "Prisma",
  },
  {
    logo: eexLogo,
    name: "eex",
  },
  {
    logo: micoboLogo,
    name: "micobo",
  },
  {
    logo: sciendisLogo,
    name: "sciendis",
  },
  {
    logo: spreadshirtLogo,
    name: "spreadshirt",
  },
  {
    logo: infaiLogo,
    name: "InfAI",
  },
  {
    logo: devhausLogo,
    name: "Devhaus",
  }
];

export default function Academy() {
  const {t} = useTranslation()

  return (
    <div className="academy navbar-padding content">
      <PageHeader
        title={t('academy:block1.title')}
        description={t('academy:block1.description')}
        image={titleImage}
        width={1536}
        height={1024}
        alt={t('academy:block1.picAltText')}
        color="blue"
      ></PageHeader>
      <section>
        <div className="center content-narrow">
          <h3 className="secondary-title">{t('academy:block2.header3')}</h3>

          <h2>
          {t('academy:block2.header2')}
            <div class="flex-center" style={{ marginTop: "0.5rem" }}>
              <DevhausLine color="devhaus" numSegments={5} width={64} />
            </div>
          </h2>
        </div>
        <div className="specs">
          <div className="short-specs button-text">
            <span>{t('academy:block2.courseLength')}</span>
            <span>{t('academy:block2.classDays')}</span>
            <span>{t('academy:block2.classTimes')}</span>
            <span>{t('academy:block2.courseLanguage')}</span>
            <span>{t('academy:block2.classHeadCount')}</span>
            <span>{t('academy:block2.classFormat')}</span>
          </div>
          <div className="text-2 next-camp">
            {ReactHtmlParser(
              `${t('academy:block2.courseDates')}`.replace('#', `<strong>${currentCampStart}</strong>`).replace('@', `<strong>${currentCampEnd}</strong>`)
            )}
          </div>
          <div>
            <span class="flex-center" style={{ marginTop: "0.5rem" }}>
              {t('academy:block2.applicationType')}
            </span>
            <a
              href="https://devhausleipzig.typeform.com/to/oKd3gzOr"
              target="_blank"
              rel="noreferrer"
            >
              <button className="plain button-text">{t('academy:block2.applyLink')}</button>
            </a>
          </div>
        </div>
        <div className="intro content-narrow">
          <p>
            {t('academy:block2.paragraph1')}
          </p>
          <p>
          {t('academy:block2.paragraph2')}
          </p>
          <p>
          {t('academy:block2.paragraph3')}
          </p>
        </div>
        <div className="skills content-narrow">
          <h2 className="button-text text-1">{t('academy:block2.keyFeatures')}</h2>

          <div className="skill">
            <h3>{t('academy:block2.keyFeature1')}</h3>
          </div>
          <div className="skill">
            <h3>{t('academy:block2.keyFeature2')}</h3>
          </div>
          <div className="skill">
            <h3>{t('academy:block2.keyFeature3')}</h3>
          </div>
          <div className="skill">
            <h3>{t('academy:block2.keyFeature4')}</h3>
          </div>
          <div className="skill">
            <h3>{t('academy:block2.keyFeature5')}</h3>
          </div>
          <div className="skill">
            <h3>{t('academy:block2.keyFeature6')}</h3>
          </div>
          <div className="skill">
            <h3>{t('academy:block2.keyFeature7')}</h3>
          </div>
        </div>
      </section>

      <section className="approach">
        <h2>{t('academy:block3.header')}</h2>
        <div className="approaches">
          <div>
            <h3>{t('academy:block3.sectionHeader1')}</h3>
            <p>
              {t('academy:block3.section1')}
            </p>
          </div>
          <div>
            <h3>{t('academy:block3.sectionHeader2')}</h3>
            <p>
              {t('academy:block3.section2')}
            </p>
          </div>
          <div>
            <h3>{t('academy:block3.sectionHeader3')}</h3>
            <div>
              {t('academy:block3.section3')}
            </div>
            <ul>
              <li>
                {t('academy:block3.section3bullet1')}
              </li>
              <li>
                {t('academy:block3.section3bullet2')}
              </li>
              <li>
                {t('academy:block3.section3bullet3')}
              </li>
            </ul>
          </div>
          <div>
            <h3>{t('academy:block3.sectionHeader4')}</h3>
            <p>
              {t('academy:block3.section4')}
            </p>
          </div>
          <div>
            <h3>{t('academy:block3.sectionHeader5')}</h3>
            <p>
              {t('academy:block3.section5')}
            </p>
          </div>
          <div>
            <h3>{t('academy:block3.sectionHeader6')}</h3>
            <p>
              {t('academy:block3.section6')}
            </p>
          </div>
        </div>
      </section>
      <section className="instructors">
        <h2>{t('academy:block4.header')}</h2>
        <div className="instructor-grid">
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={franzImage}
                alt="Franz"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Franz</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={valImage}
                alt="Valeria"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Valeria</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={danImage}
                alt="Dan"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Dan</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={svenImage}
                alt="Sven"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Sven</h3>
          </div>
        </div>
        <div className="classroom-gallery">
          <Picture
            src={pic1}
            alt={t('academy:block4.picAlt1')}
            width={752}
            height={500}
          ></Picture>
          <Picture
            src={pic2}
            alt={t('academy:block4.picAlt2')}
            width={752}
            height={500}
          ></Picture>
          <Picture
            src={pic3}
            alt={t('academy:block4.picAlt3')}
            width={752}
            height={500}
          ></Picture>
          <Picture
            src={pic4}
            alt={t('academy:block4.picAlt4')}
            width={752}
            height={500}
          ></Picture>
        </div>
      </section>
      <section className="learning-path content-narrow">
        <h2>{t('academy:block5.header')}</h2>
        <div className="path">
          <div className="path-mark">1-2</div>
          <h3>{t('academy:block5.sectionHeader1')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section1Part1')}
              <br />
              {t('academy:block5.section1Part2')}
            </p>
          </div>
          <div className="path-mark">3-4</div>
          <h3>{t('academy:block5.sectionHeader2')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section2')}
            </p>
          </div>
          <div className="path-mark">5-6</div>
          <h3>{t('academy:block5.sectionHeader3')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section3')}
            </p>
          </div>
          <div className="path-mark">7-8</div>
          <h3>{t('academy:block5.sectionHeader4')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section4')}
            </p>
          </div>
          <div className="path-mark">9</div>
          <h3>{t('academy:block5.sectionHeader5')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section5')}
            </p>
          </div>
          <div className="path-mark">10-15</div>
          <h3>{t('academy:block5.sectionHeader6')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section6')}
            </p>
          </div>
          <div className="path-mark">16-17</div>
          <h3>{t('academy:block5.sectionHeader7')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section7')}
            </p>
          </div>
          <div className="path-mark">18-19</div>
          <h3>{t('academy:block5.sectionHeader8')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section8')}
            </p>
          </div>
          <div className="path-mark">18-23</div>
          <h3>{t('academy:block5.sectionHeader9')}</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              {t('academy:block5.section9')}
            </p>
          </div>
        <div className="path-mark">{t('academy:block5.sectionHeader10')}</div>
          <h3>{t('academy:block5.section10')}</h3>
        </div>
      </section>
      <section className="outcomes">
        <h2>{t('academy:block6.header')}</h2>
        <div className="company-logos">
          {logos.map(({ logo, name }) => {
            return (
              <div key={name} className="company-logo">
                <img src={logo} alt={name}></img>
              </div>
            );
          })}
        </div>
      </section>
      <section className="financing content-narrow">
        <h2>{t('academy:block7.header')}</h2>
        <p>
          {t('academy:block7.part1')}
        </p>
        <div className="price">
          {ReactHtmlParser(
            `${t('academy:block7.part2')}`.replace('#', `<strong>${campPrice}</strong>`)
          )}
        </div>
        <p>
          {t('academy:block7.part3')}
        </p>
        <p>
          {t('academy:block7.part4')}
        </p>
        <p>
          {ReactHtmlParser(
            `${t('academy:block7.part5')}`.replace('#', `<strong><a href="mailto:${financialContact}">${financialContact}</a></strong>`)
          )}
        </p>
        <a href='/faq' key='/faq' target="_blank" rel="noreferrer" style={{display: 'block'}}>
          <button className="plain button-text">Read our FAQ</button>
        </a>
        <a
          href="https://calendly.com/devhaus-leipzig/devhaus-1-on-1?month=2021-02"
          target="_blank"
          rel="noreferrer"
          style={{display: 'block'}}
        >
          <button className="plain button-text">{t('academy:block7.callLink')}</button>
        </a>
      </section>
      <section className="application content-narrow">
        <h2>{t('academy:block8.header')}</h2>
        <div className="button-text text-2">{t('academy:block8.sectionHeader1')}</div>
        <p>
          {t('academy:block8.section1')}
        </p>
        <div className="button-text text-2">{t('academy:block8.sectionHeader2')}</div>
        <p>
          {t('academy:block8.section2Part1')}
        </p>
        <p>
          {t('academy:block8.section2Part2')}
        </p>
        {/*<span class="flex-center" style={{ marginTop: "0.5rem" }}><strong>Applications open November 10</strong></span>
        */}
        <a
          href="https://devhausleipzig.typeform.com/to/oKd3gzOr"
          target="_blank"
          rel="noreferrer"
        >
          <button className="plain button-text">{t('academy:block8.applyLink')}</button>
        </a>
      </section>
    </div>
  );
}
