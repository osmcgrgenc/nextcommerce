import React from 'react';
import Layout from "@store/containers/layout/layout";
import DefaultSeo from "@components/ui/default-seo";
import Head from "next/head";
import {NextSeo} from "next-seo";
import HomePage from "@components/layouts/homepage";
import Contact from "@pages/contact/contact";
import Benefits from "@store/containers/layout/footer/benefits";
import FooterNewsletter from "@store/containers/layout/footer/footer-newsletter";
import FooterLinks from "@store/containers/layout/footer/footer-links";
import Copyright from "@store/containers/layout/footer/copyright";

function Index() {
    return (
        <Layout footerContent={[<FooterLinks />, <Copyright />]} >
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <NextSeo title='GALATASARAY' />
            </Head>
            <Contact />

        </Layout>
    );

}

export default Index;