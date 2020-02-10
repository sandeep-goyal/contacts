import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'contact-details', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
{ path: '', redirectTo: 'contact-details', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
