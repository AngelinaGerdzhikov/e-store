import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { SortColumn } from "./sort-column";
import { SortDirection } from "./sort-direction";
import { SortEvent } from "./sort-event";

// const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': 'asc', '': 'asc' };

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableHeaderDirective {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = 'asc';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    console.log('Roatate from directive: ', this.direction);
    this.sort.emit(
      {
        column: this.sortable,
        direction: this.direction
      }
    );
  }

}
