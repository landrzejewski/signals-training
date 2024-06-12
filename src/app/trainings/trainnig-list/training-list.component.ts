import {Component, inject, signal} from '@angular/core';
import {TrainingsService} from "../trainings.service";
import {Training} from "../training.type";
import {LoadingIndicatorComponent} from "../../shared/loading-indicator/loading-indicator.component";

@Component({
  selector: 'app-trainnig-list',
  standalone: true,
  imports: [
    LoadingIndicatorComponent
  ],
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css'
})
export class TrainingListComponent {

  private trainingsService = inject(TrainingsService);

  //trainings= signal<Training[]>([]);
  trainings = this.trainingsService.trainings;

  constructor() {
    /*this.trainingsService.getAll()
      .then(trainings => this.trainings.set(trainings));*/
    this.trainingsService.refresh();
  }

}
