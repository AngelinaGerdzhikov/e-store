import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// @ts-ignore
import * as formErrorMap from '../../data/form-error-mapping.json';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  @Input('dataType') dataType: string;
  @Input('fControl') fControl: FormControl;
  @Input('fControlName') fControlName: string;
  errorMessages: string[] = [];

  constructor() { }
  
  ngOnInit() {
    this.fControl.statusChanges.subscribe(status => this.populateMessages(status));
  }

  populateMessages(status) {
    this.errorMessages = [];
    if (status === 'VALID') return;

    for (let key in this.fControl.errors) {
      let error = formErrorMap['default'][this.dataType][this.fControlName][key];

      if (!this.errorMessages.includes(error)) {
        this.errorMessages.push(error);
      }
    }
  }
}
