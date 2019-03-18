import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsListPageComponent } from './page/animals-list-page/animals-list-page.component';
import { TestPageComponent } from './page/test-page/test-page.component';
import { DogListPageComponent } from './page/dog/dog-list-page/dog-list-page.component';
import { CatListPageComponent } from './page/cat/cat-list-page/cat-list-page.component';
import { RabbitListPageComponent } from './page/rabbit/rabbit-list-page/rabbit-list-page.component';
import { CatCreatePageComponent } from './page/cat/cat-create-page/cat-create-page.component';
import { CatUpdatePageComponent } from './page/cat/cat-update-page/cat-update-page.component';


// more precise 
// to
// more general

const routes: Routes = [
  { path: "dog/list", component: DogListPageComponent },
  { path: "cat/list", component: CatListPageComponent },
  { path: "cat/create", component: CatCreatePageComponent },
  { path: "cat/update/:id", component: CatUpdatePageComponent },
  { path: "rabbit/list", component: RabbitListPageComponent },
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
