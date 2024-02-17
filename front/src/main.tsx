import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {TopPage} from "./pages/top.tsx";
import {AnswerPage} from "./pages/answer.tsx";
import {Layout} from "./components/layout.tsx";
import "./index.css";
import MakeAnswerPage from "./pages/makeAnswer.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
      {
        path: "/pages/:pageTitle",
        element: <AnswerPage />,
      },
      {
        path: "/makeAnswer/:questionId",
        element: <MakeAnswerPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
