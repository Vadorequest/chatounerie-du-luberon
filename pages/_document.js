import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

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
          <style>{styles}</style>
          {/*<link rel="stylesheet" href={'https://storage.googleapis.com/unly/libs/animate.css'} />*/}
          <script src="https://storage.googleapis.com/studylink/libs/fontawesome-pro-5.3.1-web/js/all.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
