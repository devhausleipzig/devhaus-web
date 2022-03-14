import { DevhausLine } from "./HorizontalLine";

type CenteredHeadingProps = {
  heading: string;
  subHeading: string;
};

export function CenteredHeading({ heading, subHeading }: CenteredHeadingProps) {
  return (
    <div className="text-center">
      <h3 className="text-lg uppercase tracking-widest">{heading}</h3>

      <h2 className="mb-8 font-serif text-3xl font-light leading-relaxed">
        {subHeading}
        <div className="flex justify-center" style={{ marginTop: "0.5rem" }}>
          <DevhausLine active numSegments={5} width={64} />
        </div>
      </h2>
    </div>
  );
}
