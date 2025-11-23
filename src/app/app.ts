import { Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './nav/header/header';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Footer } from "./nav/footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatSidenavModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal("Shawn's Portfolio");
}
