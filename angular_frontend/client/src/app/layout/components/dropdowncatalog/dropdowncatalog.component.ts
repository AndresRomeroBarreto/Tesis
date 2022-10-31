import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dropdowncatalog',
  templateUrl: './dropdowncatalog.component.html',
  styleUrls: ['./dropdowncatalog.component.scss']
})
export class DropdowncatalogComponent implements OnInit {
  @Output('item_selected_event') item_selected_event: EventEmitter<any> = new EventEmitter();
  @Input('items') items: any[] = [];
  @Input('item_selected') item_selected: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    if (this.item_selected != '') {
      this.item_selected_event.emit(this.item_selected);
    }
  }
}
