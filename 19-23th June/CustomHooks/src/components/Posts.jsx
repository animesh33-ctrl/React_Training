import useApiFetch from "../hooks/useApiFetch";

const Posts = () => {
  const [data, loading, error] = useApiFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <h4>Loading</h4>
      ) : error ? (
        <h4>Error</h4>
      ) : (
        data.map((d) => (
          <div key={d.id}>
            <p>{d.title}</p>
            <p>{d.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
