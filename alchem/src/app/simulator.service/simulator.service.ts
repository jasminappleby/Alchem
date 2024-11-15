import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SimulatorService {
    private apiUrl = 'http://127.0.0.1:5000/add_event';

    constructor(private http: HttpClient) {}

    addEvent(eventData: { object_id: string; status: string; timestamp: string }): Observable<any> {
        return this.http.post<any>(this.apiUrl, eventData);
    }
}