import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ContactIndexComponent } from './contact/index.component'
import { ContactCreateComponent} from './contact/create.component'
import { ContactUpdateComponent} from './contact/update.component'
import { ContactDetailsComponent}from './contact/details.component'
import { ObjToArrayPipe } from './pipes/ObjToArray.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactIndexComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    ContactDetailsComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
