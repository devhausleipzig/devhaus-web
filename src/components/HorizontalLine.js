import "./HorizontalLine.scss";

export default function HorizontalLine() {
  return (
    <div className="underline">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export function SmallLine({ color }) {
  return <div className={"line small " + color}></div>;
}

export function DevhausLine({ color, width, numSegments }) {
  if (!numSegments) numSegments = 5;
  return (
    <div className="devhaus-line">
      {new Array(numSegments).fill(0).map((_, index) => {
        const segmentWidth = Math.round(width * 2 ** -index);
        return (
          <div
            className={`line-${color}-${index}`}
            style={{ width: `${segmentWidth}px` }}
            key={index}
          />
        );
      })}
    </div>
  );
}

export function FullLine({ color, numSegments }) {
  if (!numSegments) numSegments = 5;
  return (
    <div className="devhaus-line full">
      {new Array(numSegments).fill(0).map((_, index) => {
        const segmentWidth = 2 ** -index * 100;
        return (
          <div
            className={`line-${color}-${index}`}
            style={{ width: `${segmentWidth}%` }}
            key={index}
          />
        );
      })}
    </div>
  );
}
