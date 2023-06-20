import { Html, Head, Main, NextScript } from "next/document";
import GTagAnalytics from "../components/gtag-analytics";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <GTagAnalytics />
        <div style={{ maxWidth: 480, margin: "auto" }}>
          <div className="bg-pink-900 text-slate-100">
            <Navigation />
          </div>
          <Main />
          <Footer/>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
