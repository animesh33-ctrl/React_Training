import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "./components/Parent";
import UseRefImpl from "./components/UseRefImpl";

const LazyLoading = lazy(() => import("./components/LazyLoading"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
  },
  {
    path: "/lazy",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <LazyLoading />
      </Suspense>
    ),
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      {/* <div> */}
      {/* <Parent /> */}
      {/* <UseRefImpl /> */}

      {/* </div> */}
    </RouterProvider>
  );
};

export default App;
