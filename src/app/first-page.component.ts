import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'first-page',
    templateUrl: './first-page.component.html'
})
export class FirstPageComponent implements OnInit {
    title = 'First Page';

    constructor(
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.activatedRoute.data.subscribe((data: { firstPageTitle: string }) => {
            this.titleService.setTitle(data.firstPageTitle);
            this.title = data.firstPageTitle;
        });
    }
}
