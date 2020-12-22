import React from "react";

export default function About() {
  return (
    <div className="content about">
      <h1 className="navbar-padding site-header ">About</h1>
      <div className="about-main">
        <div className="about-group-pic">
          <img src="/heybubble.png" alt="heybubble"></img>
        </div>
        <p className="content-section">
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
        </p>
      </div>
      <div className="bio-section">
        <h2>Founders</h2>
        <div className="about-grid">
          <div className="bio1">
            <img src="/biogabe.jpg" alt="biogabe"></img>
            <a href="https://www.linkedin.com/in/gabriel-heinrich-60147b187/">
              <p>Gabriel Heinrich, Co-founder</p>
            </a>
          </div>
          <div className="bio2">
            <img src="/biotaylor.jpg" alt="biotaylor"></img>
            <a href="https://www.linkedin.com/in/tharve/">
              <p>Taylor Harvey, Co-founder</p>
            </a>
          </div>
          <div className="bio3">
            <img src="/biofranz.jpg" alt="biofranz"></img>
            <p>Franz-Josef Wollang, Co-founder</p>
          </div>
          <div className="bio4">
            <img src="/biodan.jpg" alt="biodan"></img>
            <p>Dan Mcatee, Instructor</p>
          </div>
        </div>
        <h2>Project Managers</h2>
        <h2>Developers</h2>
        <h2>Instructors</h2>
        <h2>Instructors</h2>
      </div>
    </div>
  );
}
