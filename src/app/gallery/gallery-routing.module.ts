import { AlbumsComponent } from './albums/albums.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { AlbumComponent } from 'app/gallery/albums/album/album.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      {
        path: '',
        component: AlbumsComponent
      }
    ]
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
