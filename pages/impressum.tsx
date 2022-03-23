import React from "react";
import Article from "../components/Article";
import Page from "../layout/page";
import Head from "next/head";

export default function Impressum() {
  const content = (
    <div>
      <p>Angaben gemäß § 5 TMG</p>
      <h2>Verantwortlich für den Inhalt nach § 55 Abs.2 RStV</h2>
      <div>
        <p>
          Code Camp Leipzig UG (haftungsbeschränkt) <br />
          Peterssteinweg 14 <br />
          04107 Leipzig
        </p>
        <p>
          HRB 36447, Amtsgericht Leipzig <br />
          DE325664551
        </p>
        <p>
          Geschäftsführer: Taylor Harvey <br />
          E-Mail Adresse: info@codecampleipzig.de
        </p>
      </div>
      <p style={{ marginTop: "1rem" }}>
        Video &amp; Photographie: Hannah Mühlfeldner
      </p>
      <h2>Haftungsausschluss</h2>
      <h4 className="button-text">Haftung für Inhalte</h4>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <h4 className="button-text">Haftung für Links</h4>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt derVerlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <h4 className="button-text">Urheberrecht</h4>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
  );
  return  (
      <Page>
        <Head>
          <title>FAQ — Devhaus Leipzig</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1"/>
        <meta name="author" content="Devhaus Leizpig — A learning community for tech professionals"/>
        </Head>
        <Article title="Impressum" content={content} />
      </Page>
  )
}
