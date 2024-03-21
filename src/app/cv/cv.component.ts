import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

import { ResumeData } from '../resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, TranslateModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  resumeDataList: ResumeData;
  panelOpenState: boolean = false;

  constructor(private ResumeService: ResumeService) {
    this.resumeDataList = ResumeService.getResume();
  }
}
