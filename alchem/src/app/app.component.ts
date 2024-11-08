import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManagementConsoleComponent } from './management-console/management-console.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManagementConsoleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alchem';
}
