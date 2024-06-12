import {inject, Injectable, signal} from "@angular/core";
import {Training} from "./training.type";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/trainings';

  private trainingsState = signal<Training[]>([]);
  trainings = this.trainingsState.asReadonly();

  refresh() {
    this.httpClient.get<Training[]>(this.baseUrl)
      .subscribe(trainings => this.trainingsState.set(trainings));
  }

  async getAll(): Promise<Training[]> {
    const trainings$ = this.httpClient.get<Training[]>(this.baseUrl, {
      // context: new HttpContext().set(SkipLoadingIndicator, true)
    });
    try {
      return await firstValueFrom(trainings$);
    } catch (ex) {
      return Promise.reject('Fetch failed');
    }
  }

  async getById(id: number): Promise<Training> {
    const training$ = this.httpClient.get<Training>(`${this.baseUrl}/${id}`);
    return await firstValueFrom(training$);
  }

  add(training: Training) {
    this.httpClient.post(this.baseUrl, training)
      .subscribe(value => {
        this.refresh();
        //this.trainingsState.update(trainings => [...trainings, training]);
      });
  }

}
