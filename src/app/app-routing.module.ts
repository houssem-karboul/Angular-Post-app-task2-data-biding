import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListsComponent } from './post-lists/post-lists.component';

const routes: Routes = [
  { path: 'post-form', component: PostFormComponent },
  { path: 'post-lists', component: PostListsComponent },
  { path: '', redirectTo: '/post-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
