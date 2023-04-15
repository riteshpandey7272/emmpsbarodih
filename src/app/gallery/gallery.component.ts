import { Component } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  name= "Gallery"

  _albums: any = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 12; i++) {
      const src = '/../assets/ForDashboard/img/Gallery/16' + i + '.jpg';
      const caption = 'Image ' + i + ' caption';
      const thumb = '/../assets/ForDashboard/img/Gallery/16' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


}
