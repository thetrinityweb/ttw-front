import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "toastify-js/src/toastify.css"
import Script from "next/script";
import AOS_Init from "@/src/components/layout/AOS_Init";
import { CookieConsentComponent } from "@/src/components/layout/CookieConsentComponent";
import ScriptLoader from "@/src/components/layout/ScriptLoader";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import customFetch from "@/src/services/custom-fetch";
// import { getGetConfigsUrl } from "@/src/services/api";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thetrinityweb.com.br'),
  title: "Trinity Web - Transformando ideias em negócios!",
  description: 'Desde 2019 sendo o braço direito de nossos clientes! Qualidade e preço justo. Consulte-nos.',
  keywords: 'TrinityWeb, Trinity Web, Web Design, Otimização, Manutenção, Segurança, Branding, Marketing',
  openGraph: {
    url: 'https://thetrinityweb.com.br/',
    type: 'website',
    title: 'Trinity Web - Transformando ideias em negócios!',
    description: 'Desde 2019 sendo o braço direito de nossos clientes! Qualidade e preço justo. Consulte-nos.',
    images: [
      {
        url: "/assets/img/OGImage.jpg",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trinity Web - Transformando ideias em negócios!',
    description: 'Desde 2019 sendo o braço direito de nossos clientes! Qualidade e preço justo. Consulte-nos.',
    images: ['/assets/img/OGImage.jpg'],
  },
  other: {
    'theme-color': '#a4010b',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const { gaId, whatsAppUrl, gtmId } = await getSiteConfig();

  return (
    <html lang="pt-BR" className="no-js vlt-is--custom-cursor">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/img/root/favicon.webp" />
        <link rel="canonical" href="https://thetrinityweb.com.br/" />

        {/* Google Translate scripts */}
        <Script
          id="google-translate-init"
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          id="google-translate-api"
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>

      <body className={`${inter.variable} antialiased animsition`}>
        <AOS_Init />
        {/* <Navigation /> //Header*/} 
        {children}
        {/* <Footer /> */}
        {/* {
          gaId && (
            <GoogleAnalytics gaId={gaId} />
          )
        } */}
        <CookieConsentComponent />
        <ScriptLoader />
      </body>
    </html>
  );
}

export async function getSiteConfig() {
  // const { data } = await customFetch<any>(getGetConfigsUrl());
  // return {
  //   gaId: data?.google_analytics_id || "",
  //   whatsAppUrl: data?.whatsapp_url || "",
  //   gtmId: data?.google_tag_manager_id || ""
  // };
  return {
    gaId: "",
    whatsAppUrl: "",
    gtmId: ""
  };
}