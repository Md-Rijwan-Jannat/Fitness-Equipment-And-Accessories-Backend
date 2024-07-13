import { Router } from "express";
import { ProductRoutes } from "../module/Product/product.routes";
import { UserOrderDetailsRoutes } from "../module/UserOrderDetails/UserOrderDetails.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/orders",
    route: UserOrderDetailsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route)); // This will automatically loop your routes that you will add in the moduleRoutes array

export default router;
