import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("about", "routes/about.tsx"),
  route("booking", "routes/booking.tsx"),] satisfies RouteConfig;
