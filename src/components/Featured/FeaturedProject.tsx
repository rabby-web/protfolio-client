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
  const res = await fetch("http://localhost:5000/api/v1/projects", {
    cache: "no-store",
  });

  const productsData = await res.json();
  const products: Product[] = productsData.data; // Explicitly define the type

  console.log(products);
  return (
    <div>
      <h1 className="text-center text-3xl">Feature Project</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 w-[90%] mx-auto my-6 container">
        {products.map((product: Product) => (
          <FeatureProjectCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;
