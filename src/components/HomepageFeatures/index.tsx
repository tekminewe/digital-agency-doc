import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Responsive Design",
    Svg: require("@site/static/img/features/responsive-design.svg").default,
    description: (
      <>
        Maxime is a responsive web design that looks good on every screen size,
        including mobile, tablet and laptop.
      </>
    ),
  },
  {
    title: "Customisable Theme",
    Svg: require("@site/static/img/features/customisable-theme.svg").default,
    description: (
      <>
        You can customise the website to build your brand and impression to your
        customer.
      </>
    ),
  },
  {
    title: "Search Engine Optimised",
    Svg: require("@site/static/img/features/seo-ready.svg").default,
    description: (
      <>
        Maxime has all the mechanisms to make your website strive for search
        engine optimisation.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
