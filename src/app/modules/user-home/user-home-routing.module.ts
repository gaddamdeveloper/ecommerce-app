import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [
  {path:'',
  component:UserHomeComponent,
  children:[
    {
    path:'profile',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)
    },
    {
      path:'address',
      loadChildren:()=>import('./address/address.module').then(m=>m.AddressModule)
    },
    {
      path:'settings',
      loadChildren:()=>import('./settings/settings.module').then(m=>m.SettingsModule)
    },
    {
      path:'update/:id',
      loadChildren:()=>import('./update/update.module').then(m=>m.UpdateModule)
    }
      
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
