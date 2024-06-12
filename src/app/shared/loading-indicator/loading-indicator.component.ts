import {Component, inject} from '@angular/core';
import {LoadingIndicatorService} from "../loading-indicator.service";

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [],
  templateUrl: './loading-indicator.component.html',
  styleUrl: './loading-indicator.component.css'
})
export class LoadingIndicatorComponent {

  private loadingIndicatorService = inject(LoadingIndicatorService);

  isLoading = this.loadingIndicatorService.isLoading;

}
