import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steinert Brothers - VetHUB Certified FFE Contractor | Texas",
  description: "Service-disabled veteran owned, VetHUB certified FFE contractor specializing in furniture, fixtures, and equipment procurement for Texas schools, parks, and government facilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Apollo.io Analytics */}
        <Script
          id="apollo-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                o.async=!0,
                o.defer=!0,
                o.onload=function(){
                  window.trackingFunctions.onLoad({appId:"69740d606d81ae001515703d"})
                },
                document.head.appendChild(o)
              }
              initApollo();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}