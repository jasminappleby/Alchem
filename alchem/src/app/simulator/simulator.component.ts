import { Component } from '@angular/core';
import { SimulatorService } from '../simulator.service/simulator.service';

@Component({
  selector: 'app-simulator',
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
      timestamp: currentTimestamp // Add the timestamp here
    };

    this.simulatorService.addEvent(eventData).subscribe(
      response => {
        console.log('Event added:', response);
        // Optionally reload data or clear form fields
        this.newObjectId = '';
        this.newStatus = '';
      },
      error => {
        console.error('Error adding event:', error);
      }
    );
  }
}
