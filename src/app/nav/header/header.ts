import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavSharedService } from '../../services/nav-shared.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatTooltipModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  private navSharedService = inject(NavSharedService);

  toggleMenu(){
    this.navSharedService.updateIsSideNavOpen(!this.navSharedService.currentIsSideNavOpen());
    console.log(this.navSharedService.currentIsSideNavOpen());

  }
}
