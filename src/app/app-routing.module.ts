import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)},
  {path: 'sort-by-letter', loadChildren: () => import('./sort-by-letter/sort-by-letter.module').then(m => m.SortByLetterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
