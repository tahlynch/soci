import { FirebaseObjectObservable } from 'angularfire2/database';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Album } from 'app/gallery/albums/album/album';
import { AlbumService } from 'app/gallery/albums/album/album.service';
declare var $: any;
@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: FirebaseObjectObservable<Album> = new FirebaseObjectObservable();
  dateText: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.initialiseAlbum();
    setTimeout(() => {
      $('.album-photos__container').justifiedGallery({
    rowHeight : 250,
    lastRow : 'nojustify',
    margins : 10
});
    }, 1000)
  }

  private initialiseAlbum() {
    this.activatedRoute.params
      .switchMap((params: Params) =>
        this.albumService.getAlbum(params['id'])).subscribe((album: any) => {
          this.album = album;
          this.dateText = this.getDateText(album.firstDate, album.lastDate);
        })
  }

  private getDateText(firstDate: number, lastDate: number) {
    return this.getFormattedDate(firstDate) + ' - ' + this.getFormattedDate(lastDate);
  }

  private getFormattedDate(date: number): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', year: 'numeric', month: 'short',
      day: 'numeric'
    };

    return new Date(date).toLocaleDateString('en-us', options);
  }

}
