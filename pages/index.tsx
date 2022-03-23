import React from "react";
import HeroVideo from "../components/HeroVideo";
import Link from "next/link";
import { DevhausLine } from "../components/HorizontalLine";
import Picture from "../components/Picture";
import { useTranslation } from "react-i18next";
import { CenteredHeading } from "../components/Headings";
import Page from "../layout/page";
import Head from "next/head";

const academyImage = "../images/home/academy.jpg";
const studioImage = "../images/home/chat.jpg";
const eventsImage = "../images/home/ccl-1-kickoff.jpg";
const storiesImage = "../images/home/fire.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Page>
      <Head>
        <title>Devhaus Leipzig </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1"/>
        <meta name="author" content="Devhaus Leizpig — A learning community for tech professionals"/>
        <meta name="description"
          content="Devhaus Leipzig grew out of the need for a place where developers could learn and contribute to meaningful projects. Our mission is to support the members of our community to reach their creative and professional goals. Aspiring developers can take part in our Academy to learn the fundamentals of software development. Once graduated, they join our community of residents in the Studio, where their personal and professional projects find the support they need to thrive."
        />
        <meta name="keywords" content="leipzig learning community programming progammer software development developer studio professional project code coding"/>
      </Head>
      <header className="">
        <div className="flex h-full w-full items-center justify-center">
          <HeroVideo></HeroVideo>
        </div>
      </header>

      <div className="content">
        <section>
          <div className="mx-auto max-w-3xl px-0 pt-24 pb-32">
            <h1 className="text-xl font-medium uppercase leading-relaxed tracking-widest">
              {t("home:manifesto.header")}
            </h1>
            <h2 className=" mb-10 font-serif text-4xl font-light leading-normal">
              {t("home:manifesto.subheader")}
              <DevhausLine active numSegments={5} width={64} />
            </h2>
            <p className="mb-8 text-xl leading-relaxed">
              {t("home:manifesto.part1")}
            </p>
            <p className="text-xl leading-relaxed">
              {t("home:manifesto.part2")}
            </p>

            <div className="text-center">
              <div className="mt-6 flex justify-center">
                <DevhausLine active numSegments={5} width={128} />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl space-y-32">
            <LinkSection
              href="/academy"
              heading={t("home:academy.header")}
              subHeading={t("home:academy.subheader")}
              lineColor="blue"
              imgSrc={academyImage}
            />
            <LinkSection
              href="/studio"
              heading={t("home:studio.header")}
              subHeading={t("home:studio.subheader")}
              lineColor="green"
              imgSrc={studioImage}
            />
            <LinkSection
              href="/events"
              heading={t("home:events.header")}
              subHeading={t("home:events.subheader")}
              lineColor="yellow"
              imgSrc={eventsImage}
            />
            <LinkSection
              href="/stories"
              heading={t("home:stories.header")}
              subHeading={t("home:stories.subheader")}
              lineColor="red"
              imgSrc={storiesImage}
            />

            <div>
              <Link href="/about">
                <a>
                  <CenteredHeading
                    heading={t("home:about.header")}
                    subHeading={t("home:about.subheader")}
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}

type Props = {
  href: string;
  heading: string;
  subHeading: string;
  sectionLineWidth?: number;
  imgSrc: string;
  lineColor: string;
};

function LinkSection({
  href,
  heading,
  subHeading,
  sectionLineWidth = 48,
  imgSrc,
  lineColor,
}: Props) {
  return (
    <div>
      <Link href={href}>
        <a>
          <div>
            <h2 className="text-lg uppercase tracking-widest">{heading}</h2>
            <h3 className="mb-8 font-serif text-3xl font-light leading-relaxed">
              {subHeading}
              <DevhausLine
                active
                color={lineColor}
                numSegments={5}
                width={sectionLineWidth}
              />
            </h3>
          </div>
          <Picture src={imgSrc} alt="Academy" width={1152} height={763} />
        </a>
      </Link>
    </div>
  );
}
