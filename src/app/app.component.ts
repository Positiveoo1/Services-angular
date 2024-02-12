import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LessonComponent} from './lesson/lesson.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LessonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularupdated';
}
