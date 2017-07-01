import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { AlbumsService } from 'app/gallery/albums/albums.service';
import { Album } from 'app/gallery/albums/album/album';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: FirebaseListObservable<any>;
  submitted = false;
  model = new Album();
  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit() {
    this.albums = this.albumsService.getAlbums();
  }

  onAlbumClicked(album: any) {
    this.router.navigate(['/album', album.$key])
    window.scroll({ top: 0, left: 0 });
  }

  onFileUploadChange(fileList: FileList) {
    this.model.fileList = fileList;
  }

  onSubmit() {
    this.submitted = false;
    this.model.created = Date.now();
    this.model.auther = 'Guest';
    this.albumsService.uploadStory(this.model);
    this.clearPhotoForm();
  }

  private clearPhotoForm() {
    this.model = new Album();
  }
}
