import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Icons } from '../../../data/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  menu: { name: string; link: string; icon: SafeHtml }[];

  showMenu = true;

  constructor(private sanitizer: DomSanitizer) {
    this.menu = [
      { name: "Inicio", link: "/dashboard", icon: this.sanitizeSvg(Icons.home) },
      { name: "Clientes", link: "/clientes", icon: this.sanitizeSvg(Icons.people) },
      { name: "Citas y Visitas", link: "/citas-visitas", icon: this.sanitizeSvg(Icons.event) },
      { name: "Reportes", link: "/Reports", icon: this.sanitizeSvg(Icons.bar_chart) },
      { name: "Comunicaciones", link: "/Communications", icon: this.sanitizeSvg(Icons.chat) },
      { name: "Configuración", link: "/Configuration", icon: this.sanitizeSvg(Icons.settings) },
      { name: "Cerrar Sesión", link: "/SignOut", icon: this.sanitizeSvg(Icons.exit_to_app) }
    ];
  }

  ngOnInit(): void {
    
  }

  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

}
