import React from "react";
import FeatureProjectCard from "./FeatureProjectCard";

interface Product {
  _id: string;
  name: string;
  category: string;
  title: string;
  content: string;
  image: string;
  technologies: string[];
  liveDemoLink: string;
  repoLinkClient: string;
  repoLinkServer: string;
  isPublished: boolean;
}

const FeaturedProject = async () => {
  const res = await fetch(
    "https://nextjs-blog-protfolio-server.vercel.app/api/v1/projects",
    {
      cache: "no-store",
    }
  );

  const productsData = await res.json();
  const products: Product[] = productsData?.data; // Explicitly define the type

  return (
    <div className="mx-auto my-4 container">
      <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 md:mt-12">
        <div className="text-[#3CD1B8]">Featured Project</div>
        <div className="w-48 border border-[#3CD1B8]"></div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 w-[90%] my-8 mx-auto">
        {products?.slice(0, 2).map((product: Product) => (
          <FeatureProjectCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;
