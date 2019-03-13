import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsListPageComponent } from './page/animals-list-page/animals-list-page.component';
import { TestPageComponent } from './page/test-page/test-page.component';


// more precise 
// to
// more general

const routes: Routes = [
  {
    path: 'animals/list',
    component: AnimalsListPageComponent,
    children: [
      {
        path: 'test', component: TestPageComponent
      }
    ]
  },
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //enableTracing -> show dev log of router
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
