import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "@/redux/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6">
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </div>
      <Footer />
    </>
  );
}
