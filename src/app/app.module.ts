import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path : 'not-found',component:FourOhFourComponent},
  {path : '**', redirectTo : '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }