import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
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

import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './components/register/register.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './primeng.module'
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from './components/contact/contact.component';


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
        NgxSpinnerModule.forRoot({ type: 'ball-spin' }),
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatTableModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNgModule,

    ]
})
export class AppModule { }
