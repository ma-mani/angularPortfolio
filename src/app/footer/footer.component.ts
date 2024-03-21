import { SvgIconComponent } from 'angular-svg-icon';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  language: 'en' | 'de';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.language = 'en';
  }
  changeLanguage() {
    if (this.translateService.currentLang === 'en') {
      this.translateService.use('de');
      this.language = 'de';
    } else {
      this.translateService.use('en');
      this.language = 'en';
    }
  }
}
