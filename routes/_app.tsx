import { AppProps } from "$fresh/server.ts";
import { Navigation } from "../components/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>photos</title>
      </head>
      <body>
        <Navigation />
        <Component />
      </body>
    </html>
  );
}
