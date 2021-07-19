import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactIndexComponent } from './contact/index.component'
import { ContactCreateComponent} from './contact/create.component'
import { ContactUpdateComponent} from './contact/update.component'
import { ContactDetailsComponent}from './contact/details.component'
import { ContactRecycleComponent } from './contact/recycle.component';


const routes: Routes = [
  {path: '', component: ContactIndexComponent},
  {path: 'detalle/:id', component: ContactDetailsComponent},
  {path: 'nuevo', component: ContactCreateComponent},
  {path: 'editar/:id', component: ContactUpdateComponent},
  {path: 'recycle', component: ContactRecycleComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
