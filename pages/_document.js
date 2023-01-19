import { Html, Head, Main, NextScript } from 'next/document'
import {getFromStorage} from '../components/util/localstorage';

export default function Document() {
  return (
    <Html lang="en" data-theme={getFromStorage('data-theme') || 'default'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}