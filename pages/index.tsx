import DefaultSeo from '@components/ui/default-seo';
import { useSettings } from '@contexts/settings.context';
import { useErrorLogger } from '@hooks/useErrorLogger';
import CategorySlider from '@store/components/CategorySlider';
import HeroBlock from '@store/containers/banner/hero-block';
import HowItWorks from '@store/containers/how-it-works';
import Layout from '@store/containers/layout/layout';
import ProductTopSells from '@store/containers/product/ProductTopSells';
import Products from '@store/containers/products';
import HomePage from '@components/layouts/homepage';
import { useSearch } from '@store/contexts/search/use-search';
import { useRefScroll } from '@store/helpers/use-ref-scroll';
import {
  Category,
  HeroBannerType,
  Product,
  Settings
} from '@ts-types/generated';
import isEmpty from 'lodash/isEmpty';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useEffect } from 'react';
import Benefits from "@store/containers/layout/footer/benefits";
import FooterNewsletter from "@store/containers/layout/footer/footer-newsletter";
import FooterLinks from "@store/containers/layout/footer/footer-links";
import Copyright from "@store/containers/layout/footer/copyright";

interface props {
  categories: Category[];
  banners: HeroBannerType[];
  products: Product[];
  error: any;
  settings: Settings;
}

export default function Home({
  categories,
  banners,
  products,
  settings,
  error
}: props) {
  useErrorLogger(error);
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100
  });
  const { searchTerm } = useSearch();
  useEffect(() => {
    if (searchTerm) return scroll();
  }, [searchTerm]);

  const {
    updateSettings,
    seo: { metaTags }
  } = useSettings();

  useEffect(() => {
    if (!isEmpty(settings)) {
      updateSettings(settings);
    }
  }, [settings]);

  return (
    <Layout categories={categories}   footerContent={[<Benefits />, <FooterNewsletter />,<FooterLinks />, <Copyright />]} >
      <DefaultSeo settings={settings} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="keywords" content={metaTags}></meta>
        <NextSeo title='GALATASARAY' />
      </Head>
      <HomePage />

    </Layout>
  );
}

export async function getStaticProps() {
  try {
    let revalidate = 60 * 10;
    const {
      categories = [],
      banners = [],
      products = [],
      settings = {},
      processID = null,
      error = null
    } = await fetch(`${process.env.URL}/api/store/home-request`)
      .then((data) => data.json())
      .then((data) => data ?? {});

    if (!isEmpty(error)) {
      revalidate = 60;
    }

    return {
      props: {
        categories,
        banners,
        products,
        settings,
        processID,
        error: JSON.stringify(error)
      },
      revalidate
    };
  } catch (err) {
    console.log('error :::>', err);
    return {
      props: {
        categories: [],
        banners: [],
        products: [],
        settings: {},
        error: JSON.stringify(err)
      },
      revalidate: 60
    };
  }
}
