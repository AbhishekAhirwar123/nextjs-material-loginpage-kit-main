
import React from "react";
import App from "next/app";
import Head from "next/head";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";
// import { IntlProvider } from "react-intl";
// import { useRouter } from "next/router";

  //  -----------intl-contains-----------
// import ar from "../lang/ar.json";
// import en from "../lang/en.json";
// import fr from "../lang/fr.json";



// import "../styles/globals.css";

// const messages = {
//   ar,
//   en,
//   fr,
 
// };

// function getDirection(locale) {
//   if (locale === "ar") {
//     return "rtl";
//   }

//   return "ltr";
// }

// function MyApp({ Component, pageProps }) {
//   const { locale } = useRouter();

//   return (
//     <IntlProvider locale={locale} messages={messages[locale]}>
//       <Component {...pageProps} dir={getDirection(locale)} />
//     </IntlProvider>
//   );
// }




export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`



`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Login Page</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

