import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class InitService {

  readonly iconRegistry = inject(MatIconRegistry);

  readonly sanitizer = inject(DomSanitizer);

  init() {
    const githubIcon = this.sanitizer.bypassSecurityTrustResourceUrl('github.svg');
    const linkedInIcon = this.sanitizer.bypassSecurityTrustResourceUrl('linkedIn.svg')

    this.iconRegistry.addSvgIcon('github', githubIcon);
    this.iconRegistry.addSvgIcon('linkedIn', linkedInIcon)
  }
}
