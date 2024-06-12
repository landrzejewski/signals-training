import {Component, computed, inject} from '@angular/core';
import {TrainingsService} from "../trainings.service";
import {LoadingIndicatorComponent} from "../../shared/loading-indicator/loading-indicator.component";
import {FormsModule} from "@angular/forms";
import {Training} from "../training.type";

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [
    LoadingIndicatorComponent,
    FormsModule
  ],
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css'
})
export class TrainingListComponent {

  private trainingsService = inject(TrainingsService);

  //trainings = signal<Training[]>([]);
  trainings = this.trainingsService.trainings;
  trainingsCount = computed(() => this.trainings().length);

  title = '';
  price = 100;

  constructor() {
    /*this.trainingsService.getAll()
      .then(trainings => this.trainings.set(trainings));*/
    this.trainingsService.refresh();
  }

  add() {
    const training: Training = {
      id: Math.random(),
      title: this.title,
      price: this.price
    }
    this.trainingsService.add(training);
  }

}
