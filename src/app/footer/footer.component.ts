import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFooterButtonClicked() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
