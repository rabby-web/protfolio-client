import BlogDetailsCard from "@/components/shared/Blog/BlogDetailsCard";



const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  // Fetch blog data from the API
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`);

  // Parse the response
  const blogsData = await res.json();
  const blog = blogsData.data;
  //
  return (
    <div className="container mx-auto my-10">
      <BlogDetailsCard blog={blog}></BlogDetailsCard>
    </div>
  );
};

export default BlogDetailsPage;
