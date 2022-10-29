import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-dropdownclass',
  templateUrl: './dropdownclass.component.html',
  styleUrls: ['./dropdownclass.component.scss']
})
export class DropdownclassComponent implements OnInit {
  @Output('item_selected_event') item_selected_event: EventEmitter<any> = new EventEmitter();
  @Input('item_definition') item_definition: any = null;
  @Input('db') db: string = '';
  @Input('folder') folder: string = '';
  @Input('keys_shown') keys_shown: any[] = [];

  item_selected: any = null;
  output_model: any = {item_id: 1};
  items: any[] = [];

  constructor(private spinner: NgxSpinnerService, private service_Catalog: CatalogService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.item_definition != null) {
      this.output_model = this.compare_with_definition(1);
      if (this.db != '' && this.folder != '') {
        console.log('entre');
        this.get_items();
      }
    }
  }

  compare_with_definition(default_value: any) {
    let toReturn: any = {item_id: default_value};
    Object.keys(this.item_definition).forEach( (key_definition: any) => {
      let existe = false;
      Object.keys(toReturn).forEach( (key_output_model: any) => {
        if (key_output_model == key_definition) {
          existe = true;
        }
      });
      if (!existe) {
        toReturn[key_definition] = default_value;
      }
    });
    return toReturn;
  }

  get_items() {
    this.spinner.show();
    this.service_Catalog.get_items(this.db, this.folder, this.output_model).then( r => {
      this.spinner.hide();
      this.items = r as any[];
    }).catch( e => { console.log(e); });
  }

  onSelect() {
    if (this.item_selected != null) {
      this.item_selected_event.emit(this.item_selected);
    }
  }

  get_value_from_keys(item: any): string {
    let toReturn: string = '';
    this.keys_shown.forEach(key => {
      toReturn += item[key] + ' ';
    });
    return toReturn.trim();
  }
}
