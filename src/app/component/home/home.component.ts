import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  inputText: string = '';

  onGenerate() {
    //TODO: send the text to AI to create a latex template
  }
}
