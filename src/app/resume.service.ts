import { Injectable } from '@angular/core';

import { ResumeData } from './resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor() {}

  resumeList: ResumeData = {
    education: {
      title: 'experience.educationTitle',
      data: [
        {
          job_title: 'experience.education.masterTitle',
          company: 'Beuth Hochschule für Technik Berlin',
          start_date: '04/2016',
          end_date: '03/2023',
          tasks: [
            'A theory of how columns in the Neocortex Enable Learning the structure of the world',
          ],
        },
        {
          job_title: 'experience.education.bachelorTitle',
          company: 'Beuth Hochschule für Technik Berlin',
          start_date: '10/2011',
          end_date: '03/2016',
          tasks: ['experience.education.bachelor'],
        },
        {
          job_title: 'experience.education.internshipTitle',
          company: 'Fraunhofer Institut Fokus',
          start_date: '10/2014',
          end_date: '02/2015',
          tasks: [
            'experience.education.fraunhofer.task1',
            'experience.education.fraunhofer.task2',
            'experience.education.fraunhofer.task3',
          ],
        },
        {
          job_title: 'experience.education.fachabiTitle',
          company: 'Bilgi Interface',
          start_date: '2010',
          end_date: '2011',
          tasks: [...['experience.education.fachabi']],
        },
      ],
    },
    work_experience: {
      title: 'experience.workTitle',
      data: [
        {
          // job_title: 'Web Developer Trainee',
          job_title: 'experience.work.traineeTitle',
          company: 'Neuefische GmbH',
          start_date: '10/2023',
          end_date: '02/2024',
          // end_date: '02/2024',
          tasks: [
            'experience.work.trainee.task1',
            'experience.work.trainee.task2',
            'experience.work.trainee.task3',
            'experience.work.trainee.task4',
            'experience.work.trainee.task5',
            'experience.work.trainee.task6',
            'experience.work.trainee.task7',
            'experience.work.trainee.task8',
          ],
        },
        {
          job_title: 'experience.work.developerTitle',
          company: 'US Unique Staff GmbH',
          start_date: '2017',
          end_date: '2020',
          tasks: [
            'experience.work.developer.task1',
            'experience.work.developer.task2',
            'experience.work.developer.task3',
            'experience.work.developer.task4',
          ],
        },
      ],
    },
  };

  getResume(): ResumeData {
    return this.resumeList;
  }
}
