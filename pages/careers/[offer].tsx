import { GetStaticPaths, GetStaticProps } from "next";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { Offer } from "../../utilities/offers";
import { DevhausLine } from "../../components/HorizontalLine";

interface Props {
  offer: Offer;
}

export default function JobOffer({ offer }: Props) {
  return (
    <div className="mx-auto max-w-7xl p-8 py-16">
      <div className="flex justify-between">
        <div className="flex space-x-1 pt-16">
          <span className="text-blue">We are hiring!</span>
          <span className="text-green">We are hiring!</span>
          <span className="text-yellow">We are hiring!</span>
          <span className="text-red">We are hiring!</span>
          <span className="text-violet">We are hiring!</span>
        </div>
        <img
          className="h-64 w-64"
          src="/images/logo-alternate.svg"
          alt="Devhaus logo"
        />
      </div>
      <h1 className="font-serif text-5xl font-light">{offer.heading}</h1>
      <DevhausLine active width={290} className="mb-16" />
      <a
        href={offer.url}
        target="_blank"
        className="mb-8 inline-block text-2xl uppercase tracking-widest"
      >
        Apply
        <div className="h-1 bg-blue" />
      </a>
      {offer.about.map((paragraph, idx) => (
        <p className="leading-relaxed" key={idx}>
          {paragraph}
        </p>
      ))}
      <p className="mt-6 mb-8">{offer.jobDescription}</p>
      <h2 className="font-serif text-2xl font-light">Requirements</h2>
      <DevhausLine active color="blue" width={64} className="mb-4" />
      <ul className="mb-8 list-inside list-disc">
        {offer.requirements.map((req, idx) => (
          <li className="leading-relaxed" key={idx}>
            {req}
          </li>
        ))}
      </ul>
      <h2 className="font-serif text-2xl font-light">Specific Knowledge</h2>
      <DevhausLine active color="green" width={64} className="mb-4" />
      <div className="mb-8 space-y-2">
        {Object.keys(offer.specificKnowledge).map((sk, idx) => (
          <div key={idx}>
            <h3 className="font-semibold">
              {sk === "minimum" ? "Minumum requisites" : "Nice to have"}
            </h3>
            <p>{offer.specificKnowledge[sk]}</p>
          </div>
        ))}
      </div>
      <h2 className="font-serif text-2xl font-light">What we offer</h2>
      <DevhausLine active color="yellow" width={64} className="mb-4" />
      <ul className="mb-8 list-inside list-disc">
        {offer.whatWeOffer.map((w, idx) => (
          <li className="leading-relaxed" key={idx}>
            {w}
          </li>
        ))}
      </ul>
      <a
        href={offer.url}
        target="_blank"
        className="inline-block text-2xl uppercase tracking-widest"
      >
        Apply
        <div className="h-1 bg-blue" />
      </a>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const offer = context.params?.offer;
  const file = await readFile(`_jobOffers/${offer}.json`, "utf8");
  const offerJSON = JSON.parse(file);
  return {
    props: {
      offer: offerJSON,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = await readdir(path.join("_jobOffers"));
  const offers = dir.map((file) => file.replace(".json", ""));
  const paths = offers.map((offer) => ({
    params: { offer },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
