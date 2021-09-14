import Head from 'next/head';
import Link from 'next/link';
import { useTheme, useSetTheme } from './store/store';

const Layout = ({ children }) => {
    const theme = useTheme();
    const setTheme = useSetTheme();

    const headerDark = theme ? 'header-dark' : '';
    const bodyDark = theme ? 'body-dark' : '';

    return (
        <div className={`body-div ${bodyDark}`}>
            <Head>
                <title>App Title will go here</title>
            </Head>
            <div className={`header ${headerDark}`}>
                <div className="nav-container">
                    <ul className="nav">
                        <li>
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/playground">
                                <a className="nav-link">Playground</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <h1>App Name</h1>
            </div>
            <button onClick={() => setTheme((prevTheme) => !prevTheme)} type="button">
                Toggle Theme
            </button>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
