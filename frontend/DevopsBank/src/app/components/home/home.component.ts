import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  iban = new FormControl('', [Validators.required]);
  senderName = new FormControl('', [Validators.required]);
  bic = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  invoiceNumber = new FormControl('', [Validators.required]);
  dueday = new FormControl('', [Validators.required]);
  total = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  reference = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      iban: ['', Validators.required],
      senderName: ['', Validators.required],
      bic: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      invoiceNumber: ['', Validators.required],
      dueday: ['', Validators.required],
      total: ['', Validators.required],
      date: ['', Validators.required],
      reference: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  getIBANErrorMessage() {
      return this.iban.hasError('required') ? 'Not a valid IBAN' :
        '';
    }

  getSenderNameErrorMessage() {
    return this.senderName.hasError('required') ? 'Sender name is required' :
      '';
  }

  getBicErrorMessage() {
    return this.bic.hasError('required') ? 'BIC is required' :
      '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Recipient name is required' :
      '';
  }

  getInvoiceNumberErrorMessage() {
    return this.name.hasError('required') ? 'Invoice number is required' :
      '';
  }

  getDuedayErrorMessage() {
    return this.dueday.hasError('required') ? 'Dueday is required' :
      '';
  }

  getTotalErrorMessage() {
    return this.total.hasError('required') ? 'Total is required' :
      '';
  }

  getDateErrorMessage() {
    return this.date.hasError('required') ? 'Date is required' :
      '';
  }

  getReferenceErrorMessage() {
    return this.reference.hasError('required') ? 'Reference is required' :
      '';
  }

  onSubmit() {

  }
}
