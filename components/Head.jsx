import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Diego Nonato desenvolvedor frontend júnior"
      />
      <meta
        name="keywords"
        content="vscode-portfolio"
      />
      <meta property="og:title" content="Nitin Ranganath's Portfolio" />
      <meta
        property="og:description"
        content="desenvolvedor frontend"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
