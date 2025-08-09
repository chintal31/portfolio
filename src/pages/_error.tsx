import { NextPageContext } from "next";
import Layout from "@/components/layout/Layout";


interface ErrorProps {
  statusCode?: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

function Error({ statusCode }: ErrorProps) {
  const title = statusCode === 404 
    ? "Page Not Found" 
    : statusCode 
    ? `Server Error ${statusCode}` 
    : "Client Error";

  const description = statusCode === 404
    ? "The page you're looking for doesn't exist."
    : statusCode
    ? "A server-side error occurred."
    : "A client-side error occurred.";

  return (
    <Layout
      seo={{
        title,
        description,
        noIndex: true,
      }}
      showNavbar={false}
      showFooter={false}
    >
     This is the error page
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
