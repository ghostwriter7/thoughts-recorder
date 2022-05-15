import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./pages/auth/core/services/auth.guard";

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
