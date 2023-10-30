import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private http: HttpClient) {}

  translate(text: string) {
    return this.http.post('http://localhost:8000/test', { text });
  }
}
