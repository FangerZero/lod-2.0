import Head from 'next/head'

export default function Header(props) {
  let genericTitle = 'Legend of Dragoon Community';
  if (props.title && props.title !== '') {
      genericTitle = `${props.title} - ${genericTitle}`;
  }

  return (
    <Head>
      <title>{genericTitle}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
