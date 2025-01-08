import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Added import for RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Added RouterModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng_simulator_frontend_new';
}
