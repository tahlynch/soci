import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  isButtonVisible = true;
  youtubeImage = '/assets/images/youtube-play.svg';
  facebookImage = '/assets/images/facebook.svg';
  instagramImage = '/assets/images/instagram.svg';
  constructor() { }

  ngOnInit() {
    // this.isButtonVisible = this.isScrollBarVisible();
  }

  onFooterButtonClicked() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  private isScrollBarVisible(): boolean {
    return document.body.clientHeight > window.innerHeight;
  }

  // @HostListener('window:onunload', [])
  // private setIsButtonVisible() {
  //   this.isButtonVisible = this.isScrollBarVisible();
  // }
}
