import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [MatAnchor, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  showHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Conditionally set the flag based on the current URL
      this.showHome = event.url !== '/home';
    });
  }
}
