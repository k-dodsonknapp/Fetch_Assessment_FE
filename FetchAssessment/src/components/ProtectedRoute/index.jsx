import getCookies from "@/src/utils/get-cookie";

const { Outlet } = "react-router";

const ProtectedRoute = ({ children }) => {
  const auth = getCookies("auth");
  return auth ? children || <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
