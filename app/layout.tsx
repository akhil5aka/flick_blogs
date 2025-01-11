import Footer from "./components/footer";
import Header from "./components/header";
import Styles from "./components/main_style.module.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        {/* Shared Header */}
        <div id="headerdiv">

        <header className={Styles.layoutheader}>
          <Header/>
        </header>

        </div>

        {/* Main Content */}
        <div className={Styles.layout_main_div} id="content div">
        <main className="p-8">{children}</main>

        </div>

        {/* Shared Footer */}
        <div id="footerdiv">

        <footer>
          <Footer/>
          © 2024 My Blog
        </footer>

        </div>

      </body>
    </html>
  );
}
