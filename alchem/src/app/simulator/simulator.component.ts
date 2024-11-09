import { Component } from '@angular/core';
import { SimulatorService } from '../simulator.service/simulator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-simulator',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './simulator.component.html',
    styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent {
    newObjectId: string = '';
    newStatus: string = '';

    constructor(private simulatorService: SimulatorService) {}

  addEvent() {
    const currentTimestamp = new Date().toISOString(); // Capture current timestamp
    const eventData = {
        object_id: this.newObjectId,
        status: this.newStatus,
        timestamp: currentTimestamp
    };

    this.simulatorService.addEvent(eventData).subscribe(
        response => {
            console.log('Event added:', response);
            this.newObjectId = '';
            this.newStatus = '';
        },
        error => {
            console.error('Error adding event:', error);
        }
    );
  }
}
