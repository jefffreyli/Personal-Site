import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }) {
  const { systemTheme, theme, setTheme } = useTheme("dark");
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="bg-white dark:bg-dark-grey">
      <ThemeProvider attribute="class">
        <main className={font.className}>
          {theme == "dark" ? (
            <AnimatedCursor
              color="#BFD6F4"
              innerStyle={{
                backgroundColor: "#184A81",
              }}
              outerStyle={{
                border: "3px solid #184A81",
              }}
            />
          ) : (
            <AnimatedCursor
              color="#fff"
              innerStyle={{
                backgroundColor: "#fff",
              }}
              outerStyle={{
                border: "3px solid #fff",
              }}
            />
          )}
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
