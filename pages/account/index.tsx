import React from 'react';
import Layout from "@components/layouts/layout";
import Head from "next/head";
import {NextSeo} from "next-seo";
import FooterLinks from "@components/layouts/footer/footer-links";
import Copyright from "@components/layouts/footer/copyright";
import Account from "@pages/account/account";

function Index() {
    return (
        <Layout footerContent={[<FooterLinks/>, <Copyright/>]}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/css/plugins/owl-carousel/owl.carousel.css"/>
                <script data-cfasync="false" src="/assets/js/email-decode.min.js"></script>

                <script src="/assets/js/jquery.min.js"></script>
                <script src="/assets/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/js/jquery.hoverIntent.min.js"></script>
                <script src="/assets/js/jquery.waypoints.min.js"></script>
                <script src="/assets/js/superfish.min.js"></script>
                <script src="/assets/js/owl.carousel.min.js"></script>
                <script src="/assets/js/main.js"></script>
                <script src="/assets/js/script.js"></script>


                <NextSeo title='GALATASARAY'/>
            </Head>
            <Account />

        </Layout>
    );

}

export default Index;