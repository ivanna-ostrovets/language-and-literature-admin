import { Component, EventEmitter } from '@angular/core';

declare const $: any;

@Component({
  selector: 'llta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  subject: string;
  category: string;

  openModal() {
    $('.modal').modal();
    $('#modal1').modal('open');
  }

  onSubmit() {

  }
}
