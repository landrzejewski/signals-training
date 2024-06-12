import {Component, inject, signal, WritableSignal} from '@angular/core';
import {TrainingsService} from "../trainings.service";
import {Training} from "../training.type";

@Component({
  selector: 'app-trainnig-list',
  standalone: true,
  imports: [],
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css'
})
export class TrainingListComponent {

  trainings= signal<Training[]>([]);

  private trainingsService = inject(TrainingsService);

  constructor() {
    this.trainingsService.getAll()
      .then(trainings => this.trainings.set(trainings));
  }

}
