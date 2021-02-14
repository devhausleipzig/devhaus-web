import { DevhausLine } from "components/HorizontalLine";
import Picture from "components/Picture";
import "./PageHeader.scss";

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
}) {
  if (description) {
    content = <p>{description}</p>;
  }
  return (
    <section className="page-header">
      <div className="title">
        <div>
          <h1>
            {title}
            <DevhausLine color={color || "devhaus"} width={64} />
          </h1>
          {subtitle || null}
        </div>
        {content}
      </div>
      {image && <Picture src={image} alt={alt} width={width} height={height} />}
    </section>
  );
}
