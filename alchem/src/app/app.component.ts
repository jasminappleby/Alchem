import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManagementConsoleComponent } from './management-console/management-console.component';
import { SimulatorComponent } from './simulator/simulator.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ManagementConsoleComponent, SimulatorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'alchem';
}
