import React from "react";
import HeroVideo from "components/home/HeroVideo";
import "./Home.scss";
import { DevhausLine } from "components/HorizontalLine";
import { Link } from "react-router-dom";
import Picture from "components/Picture";
import { useTranslation } from 'react-i18next';

import academyImage from "images/home/academy.jpg";
import studioImage from "images/home/chat.jpg";
import eventsImage from "images/home/ccl-1-kickoff.jpg";
import storiesImage from "images/home/fire.jpg";

export default function Home() {
  const {t} = useTranslation()

  const sectionLineWidth = 48;
  return (
    <div className="home">
      <header>
        <div className="content hero-container">
          <HeroVideo></HeroVideo>
        </div>
      </header>

      <div className="content">
        <section className="manifesto">
          <div className="intro content-narrow">
            <h1 className="secondary-title">{t('home:manifesto.header')}</h1>
            <h2>
              {t('home:manifesto.subheader')}
              <DevhausLine color="devhaus" numSegments={5} width={64} />
            </h2>
            <p>
              {t('home:manifesto.part1')}
            </p>
            <p>
              {t('home:manifesto.part2')}
            </p>

            <div className="center">
              <div className="flex-center mt-4">
                <DevhausLine color="devhaus" numSegments={5} width={128} />
              </div>
            </div>
          </div>

          <div className="sitemap content-narrow">
            <div className="link">
              <Link to="/academy">
                <div>
                  <h2 className="secondary-title">{t('home:academy.header')}</h2>
                  <h3>
                    {t('home:academy.subheader')}
                    <DevhausLine
                      color="blue"
                      numSegments={5}
                      width={sectionLineWidth}
                    />
                  </h3>
                </div>
                <Picture
                  src={academyImage}
                  alt="Academy"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>
            <div className="link">
              <Link to="/studio">
                <h2 className="secondary-title">{t('home:studio.header')}</h2>
                <h3>
                  {t('home:studio.subheader')}
                  <DevhausLine
                    color="green"
                    numSegments={5}
                    width={sectionLineWidth}
                  />
                </h3>
                <Picture
                  src={studioImage}
                  alt="Studio"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>
            <div className="link">
              <Link to="/events">
                <h2 className="secondary-title">{t('home:events.header')}</h2>
                <h3>
                  {t('home:events.subheader')}
                  <DevhausLine
                    color="yellow"
                    numSegments={5}
                    width={sectionLineWidth}
                  />
                </h3>
                <Picture
                  src={eventsImage}
                  alt="Events"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>
            <div className="link">
              <Link to="/stories">
                <h2 className="secondary-title">{t('home:stories.header')}</h2>
                <h3>
                  {t('home:stories.subheader')}
                  <DevhausLine
                    color="red"
                    numSegments={5}
                    width={sectionLineWidth}
                  />
                </h3>
                <Picture
                  src={storiesImage}
                  alt="Stories"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>

            <div>
              <div className="center about">
                <Link to="/about">
                  <h2 className="secondary-title">{t('home:about.header')}</h2>
                  <h3>
                    {t('home:about.subheader')}
                    <div className="flex-center">
                      <DevhausLine color="devhaus" numSegments={5} width={64} />
                    </div>
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
