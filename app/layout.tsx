import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "toastify-js/src/toastify.css"
import Script from "next/script";
import AOS_Init from "@/src/components/layout/AOS_Init";
import { CookieConsentComponent } from "@/src/components/layout/CookieConsentComponent";
import VLTScripts from '@/src/components/layout/VLTScripts';
// import { GoogleAnalytics } from "@next/third-parties/google";
// import customFetch from "@/src/services/custom-fetch";
// import { getGetConfigsUrl } from "@/src/services/api";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thetrinityweb.com.br'),
  description: 'TrinityWeb',
  openGraph: {
    images: [
      {
        url: "/assets/images/ogimage.webp",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const { gaId, whatsAppUrl, gtmId } = await getSiteConfig();

  return (
    <html lang="pt-BR">

    

      <head>
        {/* Google Tag Manager */}
        {/* {gtmId && (
          <Script id="google-tag-manager" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )} */}

        <link rel="stylesheet" href="/assets/css/framework/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vlt-plugins.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/vlt-main.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />


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

      <body
        className={`${inter.variable} antialiased no-js vlt-is--custom-cursor`}
      >

        {/* Google Tag Manager */}
        {/* {gtmId && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
        )} */}

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
        
        {/* Scripts VLT gerenciados pelo Client Component */}
        <VLTScripts />

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
}