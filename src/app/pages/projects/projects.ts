import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-projects',
  imports: [MatAnchor],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

    openGameBacklog() {
    window.open("https://game-backlog-two.vercel.app/")
  }
}
