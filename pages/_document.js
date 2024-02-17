import Document, { Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet"; 


class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta name="keywords" content="next react seo" />
                    <meta name="author" content="Ryan Dhungel" />
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Realtor Wizard  | Short description about company"/>
                    <meta name="author" content="IntelSoft"/>
                    <title>SmartRealtor</title>
                   
              
                    <link rel="stylesheet" href="/static/globals.css" />
                    <link rel="stylesheet" href="/static/menu-hover.css" />
                    <link rel="stylesheet" href="/static/styles.css" />
                     <link rel="stylesheet" href="/static/GoogleBarstyles.css" />
                     <link rel="stylesheet" href="/static/boot-business.css" />
                    <link rel="stylesheet" href="/static/bootstrap-responsive.min.css" />
                    <link rel="stylesheet" href="/static/custom-bootstrap-responsive.min.css" />

                     <link rel="stylesheet" href="/static/font-awesome.css" />
                    <link rel="stylesheet" href="/static/font-awesome-ie7.css" />
                    <link rel="stylesheet" href="/static/customstyles.css" />

                    <Helmet>
                        <script type="text/javascript" src="js/jquery.min.js"></script>
                        <script type="text/javascript" src="js/bootstrap.min.js"></script>
                        <script type="text/javascript" src="js/boot-business.js"></script>
                    </Helmet>

  
                </head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
