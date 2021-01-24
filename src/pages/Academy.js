import React from "react";
import PageHeader from "components/PageHeader";
import titleImage from "images/graduates1.jpg";

export default function Academy() {
  return (
    <div className="academy navbar-padding content">
      <PageHeader
        title="Academy"
        description="The Devhaus Academy is more than just a classroom; it’s an ongoing
          support system, the sole purpose of which is to help you become the best programmer you can be."
        image={titleImage}
        alt="Graduates of Code Camp #1"
        color="blue"
      ></PageHeader>
    </div>
  );
}
