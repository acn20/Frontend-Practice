import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elem: string;
  elements: Array<string> = [];
  title = 'list';

  addElem() {
    this.elements.push(this.elem);
    this.elem = '';
  }

  deleteElem(index: number) {
    this.elements.splice(index, 1);
  }
}
