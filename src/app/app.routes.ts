import { Routes } from '@angular/router';

class MapComponent {}

export const routes: Routes = [
    {path: '', redirectTo: 'map', pathMatch: 'full'},
    {path: 'map', component: MapComponent}
];