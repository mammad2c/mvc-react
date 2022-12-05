import { Link, Route, Routes } from "react-router-dom";
import { PostView } from "@/views/post_view";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route
            index
            path="/"
            element={
              <div>
                <h1>Hello World</h1>
                <Link to="posts">Posts</Link>
              </div>
            }
          />

          <Route path="posts" element={<PostView />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
