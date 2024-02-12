import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JustService } from '../just.service';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {




constructor(public JustService: JustService) { 

}

clearInput:string = '';
addUser(countryName:string):void {
  if(countryName.trim() !== '') {
    this.JustService.addUser(countryName)
    this.clearInput = '';
  }
}

removeUser(index:number):void {
  this.JustService.removeUser(index)

}
 }
