import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output('modal_event') modal_event: EventEmitter<any> = new EventEmitter();
  @Input('persona_income') persona_income: any = {
    nombre: 'luis',
    apellido: 'salazar'
  };

  persona: any = {
    nombre: 'luis',
    apellido: 'salazar'
  };

  constructor() { }

  ngOnInit(): void {
    console.log('on init');
    console.log(this.persona_income);
  }

  ngOnChanges() {
    console.log('on changes');
    console.log(this.persona_income);
  }

  broadcast(button_text: string) {
    let toReturn: any = {
      button_text: button_text,
      data: this.persona
    };
    this.modal_event.emit(toReturn);
  }
}
