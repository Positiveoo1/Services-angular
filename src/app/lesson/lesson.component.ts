import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {

  bookName: string = 'Books';
  bookDesc: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint molestias dolorem et voluptatem beatae a?';
  bookAuth = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt voluptatem labore?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt voluptatem labore?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt voluptatem labore?'];
  bookDesc1: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint repellendus ratione sequi earum qui?';
  bookAuth1 = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, cupiditate iste.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, cupiditate iste.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, cupiditate iste.'];

  techniquePre: string = 'Basic Techniques';
  title: string = 'Introduction';
  themes = [
  '1.1 Programming languages.....................................3',
  '1.2 Programming languages.....................................4',
  '1.3 Programming languages.....................................5',
  '1.4 Programming languages.....................................6',
  '1.5 Programming languages.....................................7',
  '1.6 Programming languages.....................................8'
];
timeCompl:string = 'Time complexity';
objective = [

  '2.1 Programming languages.....................................9',
  '2.2 Programming languages.....................................10',
  '2.3 Programming languages.....................................11',
  '2.4 Programming languages.....................................12'

];
sorting:string = 'Sorting';
info = [

  '3.1 Programming languages.....................................13',
  '3.2 Programming languages.....................................14',
  '3.3 Programming languages.....................................15',
];
dataSt:string = 'Data Structures';
information = [

  '4.1 Programming languages.....................................16',
  '4.2 Programming languages.....................................17',
  '4.3 Programming languages.....................................18',
  '4.4 Programming languages.....................................19',
  '4.5 Programming languages.....................................20',
  '4.6 Programming languages.....................................21'

];
completeS:string = 'Complete Search';
all = [

  '5.1 Programming languages.....................................22',
  '5.2 Programming languages.....................................23',
  '5.3 Programming languages.....................................24',
  '5.4 Programming languages.....................................25',
  '5.4 Programming languages.....................................26'

];


indexS:string = 'N';
studentFullName:string = 'Full name of students';
classs:string = 'Class';
tutorNaem: string = 'Tutor';
overall:string = 'Overall';
remark:string = 'Position';

indexS1:number = 1;
indexS2:number = 2;
indexS3:number = 3;
indexS4:number = 4;
indexS5:number = 5;
studentN1: string = 'Abubakrsiddik Abdurakhimov';

studentClassN1: string = '9 - D';





tutorN1:string = 'Franklin';

resOverallN1:number = 80;

positionN1:number = 2;

}
