import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ManagementConsoleComponent } from './management-console/management-console.component';
import { SimulatorComponent } from './simulator/simulator.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        AppComponent,
        ManagementConsoleComponent,
        SimulatorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
