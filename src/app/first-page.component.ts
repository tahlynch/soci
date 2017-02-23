import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'first-page',
    templateUrl: './first-page.component.html'
})
export class FirstPageComponent implements OnInit {
    title = 'First Page';
    items: FirebaseListObservable<any[]>;

    constructor(private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private angularFire: AngularFire) {
        this.items = angularFire.database.list('/items');
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe((data: { firstPageTitle: string }) => {
            this.titleService.setTitle(data.firstPageTitle);
            this.title = data.firstPageTitle;
        });
    }
}
