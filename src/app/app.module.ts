import 'hammerjs'

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { DishService } from './services/dish.service';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DishService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
