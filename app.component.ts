import { Component, OnInit } from '@angular/core';
import {  NgFor, NgIf, NgSwitch,NgSwitchCase } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  imports : [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'app works!';
  

}

