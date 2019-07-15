import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobs: Array<string> = [];
  title = 'cv-site';

  ngOnInit(): void {
    this.jobs.push('*');
  }

  buttonClicked() {
    this.jobs.push('*');
  }
}
