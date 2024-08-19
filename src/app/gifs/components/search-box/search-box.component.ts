import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5 class="font-semibold text-gray-800 mb-2">Buscar:</h5>
    <input
      class="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
      placeholder="Buscar gifs"
      type="text"
      (keyup.enter)="searchTag()"
      #textTagInput
    >

  `
})

export class SearchBoxComponent{

  @ViewChild('textTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;


  constructor(
    private gifsService:GifsService
  ) { }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    if(newTag.length === 0) return ;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
