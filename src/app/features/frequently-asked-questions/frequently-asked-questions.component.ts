import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'soci-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.css']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
scroll(el) {
    el.currentTarget.scrollIntoView();
}
}
