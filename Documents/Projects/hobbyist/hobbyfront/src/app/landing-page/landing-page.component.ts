import { Component, OnInit } from '@angular/core';
import { Result } from '../result.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  results: Result[]
  loading: boolean

  constructor() { }

  ngOnInit(): void {
  }
  updateResults(results: Result[]): void {
    this.results = results
  }
}
