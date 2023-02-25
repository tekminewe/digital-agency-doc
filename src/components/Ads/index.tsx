import React, { useEffect } from "react";

export const Ads = () => {
  useEffect(() => {
    // @ts-ignore
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      // @ts-ignore
      data-ad-client="ca-pub-4412421169773097"
      data-ad-slot="5064107887"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
