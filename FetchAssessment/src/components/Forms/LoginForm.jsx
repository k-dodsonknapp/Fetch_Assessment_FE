import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const [{ data, loading, error }, submitLoginPath] = useFetch();

  const setAuthCookie = () => {
    document.cookie = "fetch-access=1; path=/; max-age=3600";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthCookie();
    submitLoginPath("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    if (!data) {
      navigate("/");
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Stay in touch</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email and name to stay connected.
        </p>
      </div>
      <div>{status === "failed" && error && <div>{error}</div>}</div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="name"
            name="name"
            required
            value={credentials.name}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="email">Email</Label>
          </div>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full">
          {loading ? "Finding friend..." : "🐶 Find forever friend"}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
