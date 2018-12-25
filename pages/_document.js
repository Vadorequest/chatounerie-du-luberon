import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

const GA_TRACKING_ID = 'UA-50488026-2';

export default class MyDocument extends Document {

  /**
   * TODO fetch settings there, add them to req
   * XXX This file is only rendered on the server side, not on the client side!
   *
   * @param props
   * @returns {{html: *, head: *, errorHtml: *, chunks: *, styles: *}}
   */
  static getInitialProps(props) {
    const { req, res, renderPage, isServer = false } = props;
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();

    return { html, head, errorHtml, chunks, styles, isServer };
  }

  render() {
    // SSR styles, avoid page to blink
    const { styles } = this.props;
    // console.log('styles', JSON.stringify(styles, null, 2))

    return (
      <html>
        <Head>
          <title>La Chatounerie du Luberon</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Vous partez en week end ou en vacances, laissez nous votre chat, nous nous en occupons ! La Chatounerie, notre petite pension féline est située à 30 Km d'Avignon, 37 Km de Salon de Provence et 27 Km d'Apt."
          />
          <meta
            name="keywords"
            content="Chat, Garde de chats, Chatounerie, Pension, Féline, Pension féline, Avignon, Aix-en-Provence, Apt, Luberon, Provence, Gordes, Lacoste, Roussillon, Lourmarin, Vaucluse, France, Pension, pension féline, pension Vaucluse, pension paca, pension 84, pension sud France, garde d'animaux, garde de chat, pensionneur, chatounerie, pet sitter"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="La Chatounerie du Luberon" />
          <meta
            property="og:description"
            content="Vous partez en week end ou en vacances, laissez nous votre chat, nous nous en occupons ! La Chatounerie, notre petite pension féline est située à 30 Km d'Avignon, 37 Km de Salon de Provence et 27 Km d'Apt."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://chatounerie-du-luberon.com/" />
          <meta property="og:image" content="http://chatounerie-du-luberon.com/images/seo/cover.jpg" />
          <meta property="og:locale" content="fr" />
          <meta property="og:site_name" content="La Chatounerie du Luberon" />

          <link rel="shortcut icon" href="/static/images/favicon.ico" />

          <style>{styles}</style>
          {/*<link rel="stylesheet" href={'https://storage.googleapis.com/unly/libs/animate.css'} />*/}
          <script src="https://storage.googleapis.com/studylink/libs/fontawesome-pro-5.3.1-web/js/all.min.js" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-50488026-2', 'auto');
                ga('send', 'pageview');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
