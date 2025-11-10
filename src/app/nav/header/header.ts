import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatTooltipModule, ClipboardModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  openSnackBar(){
    this._snackBar.open("email address copied!");
  }

  navigateToLanding(){
    this.router.navigate(['/home'])
  }

  openGithub(){
    window.open('https://github.com/ANVILT4NK1SH', '_blank')
  }

  openLinkedIn(){
    window.open('https://www.linkedin.com/in/shawn-hartline-9945731a4/', '_blank')
  }
}
