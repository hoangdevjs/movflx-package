import "@/styles/globals.css";
import useMounted from "../hooks/useMounted";

export default function App({ Component, pageProps }) {
  const mounted = useMounted();
  if (!mounted) return null;
  return <Component {...pageProps} />;
}
