import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AnimationComponent} from './animation/animation.component';
import {AttrBindingComponent} from './attr-binding/attr-binding.component';
import {ProjectListComponent} from './attr-selector/project-list/project-list.component';
import {WhatsSvgComponent} from './whats-svg/whats-svg.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/whats-svg'},
  {path: 'whats-svg', component: WhatsSvgComponent},
  {path: 'attr-binding', component: AttrBindingComponent},
  {path: 'project-list', component: ProjectListComponent},
  {path: 'animation', component: AnimationComponent},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
