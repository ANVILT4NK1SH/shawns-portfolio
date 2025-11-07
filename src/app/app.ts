import { Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './nav/header/header';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNav } from './nav/side-nav/side-nav';
import { NavSharedService } from './services/nav-shared.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatSidenavModule, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal("Shawn's Portfolio");

  navSharedService = inject(NavSharedService);
}
