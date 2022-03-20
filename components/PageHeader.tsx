import { DevhausLine } from "./HorizontalLine";
import Picture from "./Picture";

interface Props {
  title: string;
  description?: string;
  content?: React.ReactElement;
  subtitle?: React.ReactElement;
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  color?: string;
}

export default function PageHeader({
  title,
  description,
  content,
  subtitle,
  image,
  alt,
  width,
  height,
  color,
}: Props) {
  if (description) {
    content = <>{description}</>;
  }
  return (
    <section className="">
      <div className="mb-12 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="mb-8 font-serif text-5xl font-light">
            {title}
            <DevhausLine active color={color} width={64} />
          </h1>
          {subtitle && <p className="text-lg">{subtitle}</p>}
        </div>
        <div className="text-justify text-xl leading-relaxed">{content}</div>
      </div>
      {image && <Picture src={image} alt={alt} width={width} height={height} />}
    </section>
  );
}
