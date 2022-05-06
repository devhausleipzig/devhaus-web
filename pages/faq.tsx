import React from "react";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import Page from "../layout/page";
import Head from "next/head";

function Question({ question, answer }) {
  return (
    <div key={question} className="mb-16 space-y-4">
      <h3 className="mb-8 font-serif text-3xl">{question}</h3>
      {answer.map((piece, index) => (
        <p
          className="text-justify text-2xl font-light leading-relaxed"
          key={index}
        >
          {piece}
        </p>
      ))}
    </div>
  );
}

type Question = {
  question: string;
  answer: Array<string>;
};

export default function Questions() {
  const { t } = useTranslation();

  const faqProcessor = function (value, key, options, translator) {
    return ReactHtmlParser(value);
  };

  let questions = t("faq:content", { returnObjects: true }) as Array<Question>;

  questions.map((entry) => {
    entry.answer = entry.answer.map((fragment) => {
      return ReactHtmlParser(fragment);
    });
    return entry;
  });

  const oddHalf = questions.filter((_, i) => i % 2 !== 0);
  const evenHalf = questions.filter((_, i) => i % 2 === 0);

  const newQuestions = [...evenHalf, ...oddHalf];

  return (
    <Page>
      <Head>
        <title>FAQ — Devhaus Leipzig</title>
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
      <PageHeader title="FAQ"></PageHeader>
      <div className="gap-12 md:columns-2">
        {newQuestions.map((question) => (
          <div className="break-inside-avoid">
            <Question {...question} />
          </div>
        ))}
      </div>
    </Page>
  );
}
