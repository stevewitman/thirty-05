import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PetsService, Pet } from '@nx05/core-data';

@Component({
  selector: 'nx05-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets$;
  selectedPet;
  form: FormGroup;

  constructor(
    private petsService: PetsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getPets();
    this.initForm();
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
    this.form.patchValue(pet);
  }

  private initForm() {
    this.form = this.fb.group({
      id: null,
      title: [''],
      details: ['']
    })
  }

}
