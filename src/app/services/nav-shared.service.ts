import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Injectable({
  providedIn: 'root'
})
export class NavSharedService {
  private isSideNavOpenSource = signal<boolean>(false);

  readonly currentIsSideNavOpen: Signal<boolean> = this.isSideNavOpenSource.asReadonly();

  updateIsSideNavOpen(newIsOpen: boolean): void {
    this.isSideNavOpenSource.set(newIsOpen);
  }
}
