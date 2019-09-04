import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },

  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule)
  },
  {
    path: "checkout",
    loadChildren: () =>
      import("./checkout/checkout.module").then(mod => mod.CheckoutModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(mod => mod.DashboardModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(mod => mod.LoginModule)
  },
  {
    path: "my-order",
    loadChildren: () =>
      import("./my-orders/my-orders.module").then(mod => mod.MyOrdersModule)
  },
  {
    path: "order-success",
    loadChildren: () =>
      import("./order-success/order-success.module").then(
        mod => mod.OrderSuccessModule
      )
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then(mod => mod.ProductsModule)
  },
  {
    path: "shopping-cart",
    loadChildren: () =>
      import("./shopping-cart/shopping-cart.module").then(
        mod => mod.ShoppingCartModule
      )
  },
  {
    path: "**",
    loadChildren: () =>
      import("./pagenotfound/pagenotfound.module").then(
        mod => mod.PagenotfoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
