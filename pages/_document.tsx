import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>Adam Samko Resume</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Adam Samko Resume" />
      </Head>
      <body>
      <Main />
        <NextScript />
      </body>
    </Html>
  )
}
