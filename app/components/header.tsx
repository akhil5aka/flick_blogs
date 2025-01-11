import Styles from "./main_style.module.css";
import Link from "next/link";


const Header: React.FC = () => {
  return (
    <div className={Styles.header_main_div}>
      <div className={Styles.company_name_div}>
        <h1 className={Styles.company_name}>Flick.</h1>
      </div>

      <div className={Styles.header_options}>
        <div>
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
        </div>

        {/* <div>
          <Link href="/blog/create" className="hover:underline">
            Create Blog
          </Link>
        </div> */}

        <div>
          <Link href="/blog" className="text-blue-500">
            Go to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
