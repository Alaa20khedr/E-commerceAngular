import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AboutComponent } from './component/about/about.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { BrandComponent } from './component/brand/brand.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetcodeComponent } from './resetcode/resetcode.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AddheaderInterceptor } from './addheader.interceptor';
import { AddtitlePipe } from './addtitle.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    CategoriesComponent,
    BrandComponent,
    NotfoundComponent,
    FooterComponent,
    CartComponent,
    DetailsComponent,
    MainSliderComponent,
    ForgotpasswordComponent,
    ResetcodeComponent,
    CheckOutComponent,
    AddtitlePipe,
    LoaderComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AddheaderInterceptor,
    multi:true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi: true,
 },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
