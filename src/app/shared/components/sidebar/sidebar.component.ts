import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule, 
    RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  menu = [
    {
      name: "Inicio", value: "/", icon: "home"
    },
    {
      name: "Clientes", value: "/Customers", icon: "people"
    },
    {
      name: "Citas y Visitas", value: "/Appointments", icon: "event"
    },
    {
      name: "Reportes", value: "/Reports", icon: "bar_chart"
    },
    {
      name: "Comunicaciones", value: "/Communications", icon: "chat"
    },
    {
      name: "Configuración", value: "/Configuration", icon: "settings"
    },
    {
      name: "Cerrar Sesión", value: "/SignOut", icon: "exit_to_app"
    }
  ]

}
