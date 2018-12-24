import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import useragent from 'useragent';

import 'bootstrap/dist/css/bootstrap.min.css';

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
    const ua = useragent.parse(req.headers['user-agent']);

    return { html, head, errorHtml, chunks, styles, isServer, useragent: ua };
  }

  render() {
    // SSR styles, avoid page to blink
    const { styles, useragent } = this.props;
    // console.log('styles', JSON.stringify(styles, null, 2))

    return (
      <html>
        <Head>
          <style>{styles}</style>
          <link rel="stylesheet" href={'https://storage.googleapis.com/unly/libs/animate.css'} />
          <script src="https://storage.googleapis.com/studylink/libs/fontawesome-pro-5.3.1-web/js/all.min.js" />

          { // XXX Add polyfill for IE, since it's lacking many basic features such as Array.find and won't work without them
            useragent.family === 'IE' && (
              <script
                src="https://storage.googleapis.com/studylink-loan-advisor/babel-polyfill-6.23.0.min.js"
              />
            )
          }
        </Head>
        <body className="loan-advisor">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
