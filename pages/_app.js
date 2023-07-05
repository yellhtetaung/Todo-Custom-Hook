import "@/styles/globals.css";
import { TodoContextProvider } from "@/context/TodoContext";

export default function App({ Component, pageProps }) {
  return (
    <TodoContextProvider>
      <Component {...pageProps} />
    </TodoContextProvider>
  );
}
