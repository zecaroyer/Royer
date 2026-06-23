import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/produtos", destination: "/products", permanent: true },
      { source: "/custos", destination: "/costs", permanent: true },
      { source: "/investidores", destination: "/investors", permanent: true },
      { source: "/projeto-laboratorio", destination: "/laboratory", permanent: true },
      { source: "/rastreabilidade", destination: "/traceability", permanent: true },
      { source: "/mapa-do-site", destination: "/site-map", permanent: true },
    ];
  },
};

export default nextConfig;
