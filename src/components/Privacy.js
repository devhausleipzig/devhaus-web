import React from "react";
import { useState } from "react";

function TextSection({ title }) {
  return (
    <div className="text-section">
      <div className="title-section">
        <div className="sticky-title">
          <h2>{title}</h2>
          <div className="date-subtitle">Updated on July 23, 2018</div>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, doloremque! Dolores maiores ipsum officia esse aliquam!
          A dicta dolore excepturi quos voluptatem ipsum consequatur voluptates
          odit perferendis pariatur dolorum, aliquid dolor possimus itaque quia
          explicabo, dignissimos rem ex. Est molestias iste laudantium
          voluptatum ut similique illo laborum, dolorem accusantium quos magni
          modi porro ad. A, ipsum? Nostrum, suscipit quasi! Delectus modi
          laboriosam officia in provident. Ab totam blanditiis quos provident ea
          perspiciatis, nobis, dolorum fugit rem, ipsa cum sed quod quis vitae
          exercitationem officiis adipisci doloribus saepe error dignissimos
          minus nihil ut possimus. Excepturi perferendis, numquam repellat
          exercitationem cupiditate architecto sequi mollitia inventore quos
          rerum nisi assumenda voluptatem delectus officia tempora ea? Alias
          enim, adipisci earum sit dolores quod tempora consequuntur voluptates
          nulla hic autem quae eligendi velit repellendus officia nihil numquam
          culpa magnam expedita nostrum perferendis voluptatem modi accusamus.
          Mollitia vero error corporis id quis odio nulla perferendis quas ea
          modi! Suscipit animi eius dolores libero. Tempora, sequi possimus.
          Inventore illo voluptates sapiente dolores ipsam sed, perferendis
          totam. Rerum obcaecati maiores qui mollitia similique, doloremque
          nobis perspiciatis aspernatur harum, recusandae distinctio
          reprehenderit possimus dolorem repudiandae numquam molestias. Atque
          sed voluptates voluptatum totam nesciunt id earum! Officia
          reprehenderit, aliquam facilis optio iure quia magni perferendis
          molestiae ipsam veniam vitae excepturi blanditiis libero, possimus
          odit maiores quae nisi labore ab quod ducimus consequatur nam! Nam
          quisquam, dolor saepe veniam laudantium repellat exercitationem
          suscipit inventore dolore deleniti quidem et tempora, iure mollitia.
          Corrupti aut reiciendis quasi repellat optio possimus aspernatur eius
          dicta quia ut maiores exercitationem molestias, esse tempora
          necessitatibus minima recusandae illo doloribus similique obcaecati.
          Praesentium distinctio mollitia, tempore ex vitae sint aperiam
          voluptatibus! Quod corrupti ab ullam facilis alias assumenda
          blanditiis a reprehenderit esse adipisci, quos quia quam ducimus quae
          quis enim sint expedita eos? Dignissimos accusamus commodi autem harum
          ex eius saepe adipisci id fugiat, sit officiis aut omnis incidunt quos
          consectetur magni esse sint suscipit impedit. Possimus cupiditate
          tempora quia illo neque similique laudantium dolor. Dolorem ea
          recusandae dolorum, facilis sit quaerat unde corporis, voluptatum
          inventore omnis saepe, quibusdam tempora in fuga obcaecati repellat
          tempore. Beatae molestias culpa ex, in sit corporis dolore ducimus,
          dolorum earum adipisci fuga voluptatum quo qui tenetur voluptates
          nihil repudiandae vel temporibus laudantium facere, deleniti possimus.
          Perspiciatis ad in optio eaque porro veniam fugiat voluptatibus dicta
          numquam officiis atque neque culpa dolorum dolor, voluptate eius
          deserunt error cupiditate velit tempore, nemo accusantium facere
          reprehenderit. Quidem eum sequi quia qui, beatae culpa nostrum
          eligendi commodi quod perspiciatis dolorem fugiat ratione placeat
          nobis odio numquam eius quam officiis. Nulla vel optio pariatur dicta
          maiores aspernatur qui ipsam ad asperiores. Laboriosam aut, optio
          doloremque doloribus quod ratione quam eum quos pariatur beatae natus
          officia dolores provident neque nostrum, eligendi veritatis nulla.
          Iusto autem iste sed aliquam ex impedit recusandae soluta earum non
          assumenda. Est sint, veniam dolor adipisci inventore aperiam, natus
          quibusdam repudiandae nostrum nemo asperiores mollitia voluptatem vel.
          Dolorem amet sit aut voluptatibus, perspiciatis mollitia alias, et
          accusantium nisi fuga qui delectus reiciendis maxime minus.
        </p>
      </div>
    </div>
  );
}

export default function Privacy() {
  const [showPicture, setShowPicture] = useState(true);
  return (
    <div>
      <div
        onClick={() => {
          setShowPicture(!showPicture);
        }}
        className="site-header navbar-padding"
      >
        <div className="content site-heading">
          <h1>Privacy Policy</h1>
        </div>
        <div className="">
          {showPicture && (
            <img
              src="https://images.unsplash.com/photo-1579532537902-1e50099867b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
              alt=""
            ></img>
          )}
        </div>
      </div>
      <div className="content">
        {TextSection({ title: "Code of Conduct" })}
        <img
          className="image-section"
          src="https://images.unsplash.com/photo-1579532537902-1e50099867b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
          alt=""
        ></img>
        {TextSection({ title: "Terms of Use" })}
      </div>
    </div>
  );
}
