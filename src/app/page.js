import client from "../../lib/apollo";
import { GET_POSTS } from "../../lib/queries";

export default async function Home() {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">TEST NEXT JS</h1>
      {data.posts.nodes.map((post) => (
        <div key={post.slug} className="my-4 p-4 border rounded">
          <h2 className="text-xl">{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

//  test