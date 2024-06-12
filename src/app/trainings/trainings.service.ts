import {inject, Injectable} from "@angular/core";
import {Training} from "./training.type";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/trainings';

  async getAll(): Promise<Training[]> {
    const trainings$ = this.httpClient.get<Training[]>(this.baseUrl, {
      // context: new HttpContext().set(SkipLoadingIndicator, true)
    });
    return await firstValueFrom(trainings$);
  }

  async getById(id: number): Promise<Training> {
    const training$ = this.httpClient.get<Training>(`${this.baseUrl}/${id}`);
    return await firstValueFrom(training$);
  }

}
