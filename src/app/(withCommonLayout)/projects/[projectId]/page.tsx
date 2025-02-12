import ProjectDetailsCard from "@/components/shared/Project/ProjectDetailsCard";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>; // Correctly type `params`
}) => {
  const { projectId } = await params;

  // Fetch project data from the API
  const res = await fetch(
    `https://nextjs-blog-protfolio-server.vercel.app/api/v1/projects/${projectId}`
  );

  // Handle non-OK responses
  if (!res.ok) {
    throw new Error(`Failed to fetch project: ${res.statusText}`);
  }

  // Parse the response
  const productsData = await res.json();
  const product = productsData.data;

  return (
    <div className="container mx-auto my-10">
      <ProjectDetailsCard product={product}></ProjectDetailsCard>
    </div>
  );
};

export default ProjectDetailsPage;
