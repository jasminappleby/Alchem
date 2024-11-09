import { Component, OnInit } from '@angular/core';
import { ManagementConsoleService } from './management-console.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ObjectStatus } from '../models/object-status.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-management-console',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './management-console.component.html',
    styleUrl: './management-console.component.css'
})
export class ManagementConsoleComponent implements OnInit {
    objectStatus: any;
    error: string | null = null;

    constructor(private managementConsoleService: ManagementConsoleService) {}

    ngOnInit() {
        this.loadObjectStatus(); //loads status
        setInterval(() => {
        this.loadObjectStatus(); 
        }, 10000); // refreshes every 10 seconds
    }

    loadObjectStatus() {
        this.managementConsoleService.getObjectStatus().subscribe(
        (data: ObjectStatus) => {
            this.objectStatus = data;
            this.error = null;
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof ErrorEvent) {
            this.error = `Client error: ${err.error.message}`;
            } else {
            this.error = `Backend error: ${err.status} - ${err.message}`;
            }
            this.objectStatus = null;
        }
        );
  }
}
