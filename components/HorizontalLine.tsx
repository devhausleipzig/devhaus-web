// import styles from "./HorizontalLine.module.scss";

import clsx from "clsx";

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

interface SmallLineProps {
  color: string;
}

export function SmallLine({ color }: SmallLineProps) {
  return <div className={`line small ${color}`}></div>;
}

interface DevhausLineProps {
  active?: boolean;
  color?: string;
  width: number;
  numSegments?: number;
}

const devhausColors = ["blue", "green", "yellow", "red", "violet"];

export function DevhausLine({
  active,
  color,
  width,
  numSegments,
}: DevhausLineProps) {
  const getBackgroundStyles = (index: number) => ({
    backgroundColor: color
      ? `var(--${color})`
      : `var(--${devhausColors[index]})`,
    ...(color && { opacity: (100 - index * 20) * 0.01 }),
  });

  if (!numSegments) numSegments = 5;
  return (
    <div
      className={clsx(
        "mt-1 flex h-[2px] transition-opacity delay-200",
        active ? "opacity-100" : "opacity-0"
      )}
    >
      {new Array(numSegments).fill(0).map((_, index) => {
        const segmentWidth = Math.round(width * 2 ** -index);
        return (
          // (100 - index * 20) * 0.01
          <div
            style={{
              width: `${segmentWidth}px`,
              ...getBackgroundStyles(index),
            }}
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
    <div className={`devhausLine full`}>
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
