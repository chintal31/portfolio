import { PageProps, SEOProps } from "@/types";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/layout/SEOHead";
import CustomCursor from "@/components/layout/CustomCursor";

interface LayoutProps extends PageProps {
  seo?: SEOProps;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export default function Layout({
  children,
  className = "",
  seo = {},
  showNavbar = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <>
      <SEOHead {...seo} />
      <CustomCursor />
      <div className={`min-h-screen flex flex-col ${className}`}>
        {showNavbar && <Navbar />}
        <main className="flex-1 pt-32">{children}</main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}
