import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {Routes, RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [
{path: '', component: MenuComponent},
{path: 'contact', component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
