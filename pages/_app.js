/* eslint-disable react/jsx-props-no-spreading */
import '../styles/styles.scss';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/store/store';

// eslint-disable-next-line consistent-return
const reducer = (state, action) => {
    if (action.type === 'toggle') return !state;
};

function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* eslint-disable-next-line react/jsx-boolean-value */}
            <ThemeProvider initState={true} reducer={reducer}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </div>
    );
}

export default MyApp;
