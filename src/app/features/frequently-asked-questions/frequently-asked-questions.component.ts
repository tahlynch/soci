import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'soci-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.css']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {
  private headerHeight = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.headerHeight = document.getElementById('header').offsetHeight + 10;
    this.subsribeToRouteFragment();
  }

  onNavigateToClicked(id: string) {
    this.router.navigate(['./'], { fragment: id, relativeTo: this.route});
  }

  private subsribeToRouteFragment() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector('#' + f);
      if (element) {
        const divOffset = this.offset(element);
        window.scroll({ top: (divOffset.top - this.headerHeight), left: 0, behavior: 'smooth' });
      }
    });
  }

  private offset(el: Element) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
