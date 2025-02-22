import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(mod => mod.routesDashboard)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./features/clients/clients.routes').then(mod => mod.routesClients)
  },
  {
    path: 'citas-visitas',
    loadChildren: () => import('./features/appointments-visits/appointments-visits.routes').then(mod => mod.routesAppointmentsVisits)
  }
];
