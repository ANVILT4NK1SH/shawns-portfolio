import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavSharedService } from '../../services/nav-shared.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  private navSharedService = inject(NavSharedService);

  isMenu = signal(false);

  toggleMenu(){
    this.isMenu.set(!this.isMenu());
    this.navSharedService.updateIsSideNavOpen(this.isMenu());
  }
}
