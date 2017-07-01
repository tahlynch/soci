import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryService } from './gallery.service';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from 'app/gallery/albums/albums.service';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './albums/album/album.component';
import { AlbumService } from 'app/gallery/albums/album/album.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule
  ],
  declarations: [GalleryComponent, AlbumsComponent, AlbumComponent],
  providers: [GalleryService, AlbumsService, AlbumService]
})
export class GalleryModule { }
