import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.tekminewe.com/product/digital-agency-website-template/"
          >
            Get Template
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://digital-agency-website-template.demo.tekminewe.com"
          >
            Live Demo
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Digital Agency Website Template | ${siteConfig.title}`}
      description="Complete and SEO-ready digital agency website template built with React, HTML5, CSS and a customisable theme. Free lifetime updates and support."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
