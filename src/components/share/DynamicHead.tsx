
import Head from "next/head";

export default function DynamicHead({
  title,
  description,
  viewport,
  icon,
}: any) {
  const staticText = "GMQ Global";
  const staticDescription = "GMQ ( Get Me Qualified)- empowering students in Australia through innovative education consulting.";
  const staticViewport = "width=device-width, initial-scale=1";
  const staticIcon = "/faviconGMQ.png";
  const pageTitle = "GMQ ( Get Me Qualified)- empowering students in Australia through innovative education consulting.";
  const DomainName = "www.gmqglobal.com.au";
  const gmq_global_logo = "/gmq_global_logo.jpg";

  return (
    <>
      <Head>
        <title>{title || staticText}</title>
        <meta name="description" content={description || staticDescription} />
        <meta name="viewport" content={viewport || staticViewport} />
        <meta name="theme-color" content="#011F21" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="robots" content="index" />
        <link rel="icon" href={staticIcon} /> {/* fav icon */}
        <link rel="apple-touch-icon" href={staticIcon} />{" "}
        {/* like apple fav icon */}
        {/* ==== Metadata for SEO ==== */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || staticText} />
        <meta
          property="og:description"
          content={description || staticDescription}
        />
        {/* organization page title */}
        <meta property="og:site_name" content="GMQ  GLOBAL" /> {/* organization name */}
        <meta property="og:image" content={icon || gmq_global_logo} />{" "}
        {/* organization img */}
        <meta property="og:image:width" content="1600" />{" "}
        {/* organization img width */}
        <meta property="og:image:height" content="900" />{" "}
        {/* organization img height */}
        {/* organization description */}
        <meta property="og:url" content={DomainName} />{" "}
        {/* organization domain name */}
      </Head>
    </>
  );
}
