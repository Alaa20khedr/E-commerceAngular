import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { BrandComponent } from './component/brand/brand.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { athGuard } from './ath.guard';
import { ResetcodeComponent } from './resetcode/resetcode.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { WishlistComponent } from './wishlist/wishlist.component';




const routes: Routes = [
  {path:"" , redirectTo:"home" ,pathMatch:"full"},
  {path:"home",canActivate:[athGuard],component:HomeComponent},
  {path:"product",canActivate:[athGuard] ,component:AboutComponent},
  {path:"brand" ,canActivate:[athGuard] ,component:BrandComponent},
  {path:"detail/:id",canActivate:[athGuard]  ,component:DetailsComponent},
  {path:"categories",canActivate:[athGuard]  ,component:CategoriesComponent},
  {path:"cart",canActivate:[athGuard]  ,component:CartComponent},
  {path:"password" ,component:ForgotpasswordComponent},
  {path:"resetcode",component:ResetcodeComponent},
  {path:"checkout",canActivate:[athGuard]  ,component:CheckOutComponent},
  {path:"login",component:LoginComponent},
  {path:"register"  ,component:LogoutComponent},
  {path:"wishlist",canActivate:[athGuard]  ,component:WishlistComponent},

  {path:"**" ,component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
