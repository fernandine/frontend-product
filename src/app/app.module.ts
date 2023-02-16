import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from './components/header/header.component';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { RegisterComponent } from './components/register/register.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { PrimeNgModule } from './primeng.module';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        SearchComponent,
        ProductDetailsComponent,
        CartStatusComponent,
        CartDetailsComponent,
        CheckoutComponent,
        LoginComponent,
        LoginStatusComponent,
        MembersPageComponent,
        OrderHistoryComponent,
        AdminAreaComponent,
        HeaderComponent,
        RegisterComponent,
        AboutComponent,
        FooterComponent,
        ContactComponent
    ],
    providers: [
        ProductService,
        [AuthGuard],
        CartService,
        provideHttpClient(),
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNgModule,

    ]
})
export class AppModule { }
