import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Output('switch_change') switch_change: EventEmitter<boolean> = new EventEmitter();
  @Input('name') name: string = '';
  @Input('switch_state') value: boolean = false;
  @Input('disabled') disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  send_change() {
    this.switch_change.emit(this.value);
  }
}
