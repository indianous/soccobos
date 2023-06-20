import { Html, Head, Main, NextScript } from "next/document";
import GTagAnalytics from "../components/gtag-analytics";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <GTagAnalytics />
        <div style={{ maxWidth: 480, margin: "auto" }}>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
