import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent {

  fabButtons = [
    {
      icon: 'people',
      tooltip: 'Nuevo Cliente',
      link: 'customers/create'
    },
    {
      icon: 'description',
      tooltip: 'Nuevo Pedido',
      link: 'orders/create'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() { }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
