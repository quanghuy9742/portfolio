import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import LanguageWrapper from "../components/common/language/LanguageWrapper";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <LanguageWrapper>
            <Main />
          </LanguageWrapper>
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Navigate to="/vi" replace />,
        },
        {
          path: "/vi",
          element: <Home />,
        },
        {
          path: "/en",
          element: <Home />,
        },
      ],
    },
  ],
  { basename: `/${repoName}` }
);
