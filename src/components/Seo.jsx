/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default Seo;
