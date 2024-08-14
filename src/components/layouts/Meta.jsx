import { Helmet } from "react-helmet";
const Meta = ({ title, description, avatar }) => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content={import.meta.env.VITE_URL_BE + avatar}
        />
        <link rel="canonical" href={import.meta.env.VITE_URL_FE} />
      </Helmet>
    </div>
  );
};

export default Meta;
