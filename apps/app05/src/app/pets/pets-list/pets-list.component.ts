import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Pet } from '@nx05/core-data';

@Component({
  selector: 'nx05-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent {

  @Input() pets: Pet[];
  @Output() selecting = new EventEmitter();

}
