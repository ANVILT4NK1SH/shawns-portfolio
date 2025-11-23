import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-home',
  imports: [MatAnchor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  openBriefli() {
    window.open("https://github.com/ANVILT4NK1SH/briefli_mobile_app")
  }

  openGameBacklog() {
    window.open("https://game-backlog-two.vercel.app/")
  }
}
