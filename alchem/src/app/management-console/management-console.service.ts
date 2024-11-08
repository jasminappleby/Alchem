import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectStatus } from '../models/object-status.model';

@Injectable({
  providedIn: 'root'
})
export class ManagementConsoleService {

  	private apiUrl = 'http://localhost:5000/status';

  	constructor(private http: HttpClient) {}

  	getObjectStatus(): Observable<ObjectStatus> {
    	return this.http.get<ObjectStatus>(this.apiUrl);
  	}
}
