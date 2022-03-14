export default function TextSection({ title, subtitle }) {
  return (
    <div className="text-section">
      <div className="title-section">
        <div className="sticky-title">
          <h2>{title}</h2>
          <div className="date-subtitle">{subtitle}</div>
        </div>
      </div>
      <div className="content-section">
        <p>
          Pentagram Design, Inc. (“Pentagram”) provides this website,
          Pentagram.com, and a newsletter currently titled, “Designed by
          Pentagram” and delivered by email to subscribers on a monthly basis
          (the “Newsletter”) (together, the website and the Newsletter may be
          referred to as the “Website”) for informational purposes.
        </p>
        <p>
          By accessing the website, you accept these Terms and Conditions of use
          and Privacy Policy, as may be amended from time to time, without
          limitation or qualification. If you do not wish to be bound by these
          Terms and Conditions, please refrain from further use of the website.
        </p>
      </div>
    </div>
  );
}
