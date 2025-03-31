import React, { useState } from "react";
// import getCookie from "../utils/get-cookie";
import { useNavigate } from "react-router";
import Button from "../ui/Button";
import useFetch from "../../hooks/useFetch";

function LogoutButton() {
  const navigate = useNavigate();
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [_, submitLogoutPath] = useFetch({
    method: "POST",
  });

  const handleLogout = () => {
    try {
      setTriggerFetch(true);
      submitLogoutPath("/auth/logout", { method: "POST" });
      document.cookie =
        "fetch-access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setTriggerFetch(false);
    }
  };

  return (
    <Button
      className="text-inherit relative h-10 w-15 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all ease-in-out duration-100"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
