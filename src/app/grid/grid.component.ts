import { Component, HostListener } from '@angular/core';
import { grid } from '../models/grid.model'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
  gameGrid = new grid();

  constructor() {
  }
  
  @HostListener('document:keydown', ['$event'])
  onKeydown(event) {
    let playerPosition = this.gameGrid.findPlayer();

    if (event.key === "ArrowLeft" && playerPosition.y !== 0) {
      this.gameGrid.board[(playerPosition.x)][playerPosition.y-1].player = true;
      // this.gameGrid.board[(playerPosition.x)][playerPosition.y-1].spritePath = "../../assets/image/dot.svg";
      // console.log(this.gameGrid.board[(playerPosition.x)][playerPosition.y-1].spritePath);
      playerPosition.player = false;
      this.gameGrid.board[(playerPosition.x)][playerPosition.y-1].direction = "left";

    }

    if (event.key === "ArrowRight" && playerPosition.y !== 9) {
      this.gameGrid.board[(playerPosition.x)][playerPosition.y+1].player = true;
      playerPosition.player = false;
      this.gameGrid.board[(playerPosition.x)][playerPosition.y+1].direction = "right";
    }

    if (event.key === "ArrowUp" && playerPosition.x !== 0) {
      this.gameGrid.board[(playerPosition.x-1)][playerPosition.y].player = true;
      playerPosition.player = false;
      this.gameGrid.board[(playerPosition.x-1)][playerPosition.y].direction = "up";
    }

    if (event.key === "ArrowDown" && playerPosition.x !== 9) {
      this.gameGrid.board[(playerPosition.x+1)][playerPosition.y].player = true;
      playerPosition.player = false;
      this.gameGrid.board[(playerPosition.x+1)][playerPosition.y].direction = "down";
    }

  }

  renderSprite (tile){
    let styles = {};
    if (tile.player && tile.direction === "down") {
      styles['background-image'] = 'url(../../assets/image/cats.png)';
      styles['background-size'] = '1152px 768px';
      styles['background-position'] = '0px -4px';
    }
    if (tile.player && tile.direction === "up") {
      styles['background-image'] = 'url(../../assets/image/cats.png)';
      styles['background-size'] = '1152px 768px';
      styles['background-position'] = '0px -294px';
    }
    if (tile.player && tile.direction === "right") {
      styles['background-image'] = 'url(../../assets/image/cats.png)';
      styles['background-size'] = '1152px 768px';
      styles['background-position'] = '0px -197px';
    }
    if (tile.player && tile.direction === "left") {
      styles['background-image'] = 'url(../../assets/image/cats.png)';
      styles['background-size'] = '1152px 768px';
      styles['background-position'] = '4px -101px';
    }
    return styles;
  }

}
