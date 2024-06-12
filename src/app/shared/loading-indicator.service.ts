import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {

  private loading = signal(false);

  isLoading = this.loading.asReadonly();

  startLoading() {
    this.loading.set(true);
  }

  finishLoading() {
    this.loading.set(false);
  }

}
