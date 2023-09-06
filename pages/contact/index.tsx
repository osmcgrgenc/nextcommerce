import React from 'react';
import Layout from "@components/layouts/layout";
import DefaultSeo from "@components/ui/default-seo";
import Head from "next/head";
import {NextSeo} from "next-seo";
import HomePage from "@components/layouts/homepage";
import Contact from "@pages/contact/contact";
import Benefits from "@components/layouts/footer/benefits";
import FooterNewsletter from "@components/layouts/footer/footer-newsletter";
import FooterLinks from "@components/layouts/footer/footer-links";
import Copyright from "@components/layouts/footer/copyright";

function Index() {
    return (
        <Layout footerContent={[<FooterLinks />, <Copyright />]} >
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css"></link>

                <script src="/assets/js/email-decode.min.js"></script>
                <script src="/assets/js/jquery.min.js"></script>
                <script src="/assets/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/js/jquery.hoverIntent.min.js"></script>
                <script src="/assets/js/jquery.waypoints.min.js"></script>
                <script src="/assets/js/superfish.min.js"></script>
                <script src="/assets/js/owl.carousel.min.js"></script>
                <script src="/assets/js/main.js"></script>
                <script src="/assets/js/script.js"></script>
                <NextSeo title='GALATASARAY' />
            </Head>
            <Contact />

        </Layout>
    );

}

export default Index;