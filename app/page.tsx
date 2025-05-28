import Header from "@/src/components/layout/Header";
import OffcanvasMenu from "@/src/components/layout/OffcanvasMenu";
import FixedSocials from "@/src/components/layout/FixedSocials";
import MainContent from "@/src/components/layout/MainContent";
import Footer from "@/src/components/layout/Footer";
import GoogleTranslate from "@/src/components/layout/GoogleTranslate";

export const metadata = {
  title: 'Trinity Web - Transformando ideias em negócios!',
  description: 'Desde 2019 sendo o braço direito de nossos clientes! Qualidade e preço justo. Consulte-nos.',
}

export default async function Home() {
  
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Offcanvas Menu */}
      <OffcanvasMenu />
      
      {/* Site Overlay */}
      <div className="vlt-site-overlay"></div>
      
      {/* Fixed Socials */}
      <FixedSocials />
      
      {/* Main Content */}
      <MainContent />
      
      {/* Footer */}
      <Footer />
      
      {/* Google Translate */}
      <GoogleTranslate />
    </>
  );
}