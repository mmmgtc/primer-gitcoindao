import NextHead from "next/head";

export type MetaType = {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  image?: string;
  twitterUsername?: string;
  canonical?: string;
};

const defaultMeta: MetaType = {
  title: "Gitcoin",
  description:
    "Funding digital public goods, built on the Ethereum blockchain. Gitcoin is live on Ethereum mainnet and on layer 2s.",
  url: "https://gitcoin.com",
  siteName: "Gitcoin Primer",
  image: "https://github.com/sujantkumarkv/primer-gitcoindao/blob/main/public/images/primer/gitcoin-meta-poster.svg",
  twitterUsername: "@GitcoinDAO",
};

export type HeadProps = {
  meta?: MetaType;
};

const Head = ({ meta = {} }: HeadProps) => {
  meta = { ...defaultMeta, ...meta };
  if (meta.title !== defaultMeta.title) {
    meta.title = `Gitcoin - ${meta.title}`;
  }

  return (
    <NextHead>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <title key="title">{meta.title}</title>
      <meta name="description" content={meta.description} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:image" content={`${meta.image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:site" content={meta.twitterUsername} />
      <meta name="twitter:image" content={`${meta.image}`} />
      {meta?.canonical && <link rel="canonical" href={meta.canonical} />}
    </NextHead>
  );
};

export default Head;
