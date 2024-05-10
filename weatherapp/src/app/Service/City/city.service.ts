// city.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citySubject = new BehaviorSubject<string>('Campinas');
  public city$ = this.citySubject.asObservable();

  getCity(): string {
    return this.citySubject.value;
  }

  setCity(newCity: string): void {
    this.citySubject.next(newCity);
  }
}
