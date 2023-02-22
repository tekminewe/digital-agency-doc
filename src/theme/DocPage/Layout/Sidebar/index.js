import React from "react";
import Sidebar from "@theme-original/DocPage/Layout/Sidebar";

export default function SidebarWrapper(props) {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4412421169773097"
          crossorigin="anonymous"
        ></script>
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4412421169773097"
          data-ad-slot="5064107887"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
      <Sidebar {...props} />
    </>
  );
}
