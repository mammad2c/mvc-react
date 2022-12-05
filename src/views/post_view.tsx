import { PostsController } from "@/controllers/posts_controller";

export const PostView = () => {
  const { data, isLoading, isError, error } = PostsController.index();

  const { counter, increaseCounter, decreaseCounter } =
    PostsController.handleCounter();

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <div>
        counter is: {counter}
        {"         "}
        <button onClick={increaseCounter}>+</button>
        {"         "}
        <button onClick={decreaseCounter}>-</button>
      </div>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              boxShadow: "0 0 5px #ccc",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};
