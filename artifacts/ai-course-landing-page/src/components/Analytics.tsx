import { useEffect } from "react";

// Set these in .env.local (or your hosting provider's environment settings).
const GA4_ID = import.meta.env.VITE_GA4_ID ?? "";
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "";

/** Loads GA4 and the Meta Pixel only when their IDs are configured. */
export function Analytics() {
  useEffect(() => {
    const ga4 = /^G-[A-Z0-9]+$/.test(GA4_ID) ? GA4_ID : null;
    const pixel = /^\d+$/.test(META_PIXEL_ID) ? META_PIXEL_ID : null;

    if (ga4) {
      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga4}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.id = "ga4";
      script2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga4}');`;
      document.head.appendChild(script2);
    }

    if (pixel) {
      const script3 = document.createElement("script");
      script3.id = "meta-pixel";
      script3.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`;
      document.head.appendChild(script3);
    }
  }, []);

  return null;
}
