import { Component } from '@angular/core';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  translateText: string = '';
  text: string = '';
  constructor(private translateService: TranslateService) {}

  translate() {
    console.log("🚀 ~ translate:")
    this.translateService.translate(this.text).subscribe((data: any) => {
      console.log("🚀 ~ data:", data)
      this.translateText = data.data;
    });
  }
}
