import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl:'./sidebar.component.html' ,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  title:string = 'GifsApp';
  isMenuOpen = false;  // Controla la visibilidad del menú en pantallas pequeñas
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(
    private gifsService: GifsService
  ){}

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  public searchTag(tag:string):void{
    this.gifsService.searchTag(tag);
  }

 }
