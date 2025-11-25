import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';

export const routes: Routes = [
    { path: 'promise', component: PromiseComponent},
    { path: 'observable', component: ObservableComponent},
];
