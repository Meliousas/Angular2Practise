import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent} from './dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: './dashboard', pathMatch: 'full'},
    {path: 'detail/:id',component: HeroDetailComponent},
    {path: 'heroes',component: HeroesComponent},
    {path: 'dashboard',component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}