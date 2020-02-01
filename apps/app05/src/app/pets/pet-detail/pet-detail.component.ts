import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nx05-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  currentPet;
  originalTitle;

  @Input() form: FormGroup;
  @Input() set pet(value) {
    if (value) this.originalTitle = value.title;
    this.currentPet = Object.assign({}, value);
  };
  @Output() saving = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.saving.emit(this.form.value);
  }

}
