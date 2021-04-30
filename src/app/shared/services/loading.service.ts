import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { defer, NEVER, Subject } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { LoadingComponent } from '../components/loading/loading.component';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private overlayRef?: OverlayRef;
  isLoading = new Subject<boolean>();

  constructor(private overlay: Overlay) {}

  public show(): void {
    this.isLoading.next(true);
    Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true,
      });
      this.overlayRef.attach(new ComponentPortal(LoadingComponent));
    });
  }

  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(finalize(() => this.hide()));
  }).pipe(share());

  public hide(): void {
    this.isLoading.next(false);
    this.overlayRef!.detach();
    this.overlayRef = undefined;
  }
}
