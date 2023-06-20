import Script from "next/script";
import React from "react";
import { GA_TRACKING_ID } from "../../lib/gtag";

export default function GTagAnalytics() {
  return (
    <>
      <Script
        src={"https://www.googletagmanager.com/gtag/js?id=" + GA_TRACKING_ID}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}
