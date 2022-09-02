import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/servicios/mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.less']
})
export class MensajesComponent implements OnInit {

  constructor(public msgService: MessageService) { }

  ngOnInit(): void {
  }

}
