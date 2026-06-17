import React, { Suspense } from "react";
// import AdminDashboard2 from './AdminDashboard2';
import Home from "./Home";
import Loading from "./Loading";

const AdminDashboard2 = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./AdminDashboard2"));
      }, 5000);
    }),
);

export default function LazyLoad() {
  const [showAdminDashboard, setShowAdminDashboard] = React.useState(false);

  return (
    <div>
      <Home />
      <button onClick={() => setShowAdminDashboard(true)}>
        Go to Admin Dashboard
      </button>
      {showAdminDashboard && (
        <Suspense fallback={<Loading />}>
          <AdminDashboard2 />
        </Suspense>
      )}
    </div>
  );
}
