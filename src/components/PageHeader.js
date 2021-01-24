import { DevhausLine } from "components/HorizontalLine";
import "./PageHeader.scss";

export default function PageHeader({
  title,
  description,
  content,
  subtitle,
  image,
  alt,
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
      {image && <img src={image} alt={alt} />}
    </section>
  );
}
