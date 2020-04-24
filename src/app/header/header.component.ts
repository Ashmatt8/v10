import {Component, Input, OnInit} from '@angular/core';
import {menuItems} from './menu-itens';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.less']
})
export class HeaderComponent implements OnInit {
    @Input() context: string;
    menuItens = menuItems;
    showMenu: boolean = false;

  ngOnInit(): void {
    this.menuItens.forEach(i => {
        i.active = i.name === this.context;
    });
  }

  showMenuItens() {
    this.showMenu = !this.showMenu;
  }
}
