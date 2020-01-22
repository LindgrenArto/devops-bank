import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../models/invoice';
import {MatSnackBar} from '@angular/material';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  invoice: Invoice;
  isLinear = true;
  formGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  iban = new FormControl('', [Validators.required]);
  senderName = new FormControl('', [Validators.required]);
  bic = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  invoiceNumber = new FormControl('', [Validators.required]);
  dueday = new FormControl('', [Validators.required]);
  total = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  reference = new FormControl('', [Validators.required]);

  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private formBuilder: FormBuilder, private invoiceService: InvoiceService, private snackBar: MatSnackBar, private router: Router) {
    this.invoice = new Invoice();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          iban: ['', Validators.required],
          senderName: ['', Validators.required],
          bic: ['', Validators.required]
        }),
        this.formBuilder.group({
          name: ['', Validators.required],
          invoiceNumber: ['', Validators.required],
          dueday: ['', Validators.required],
          total: ['', Validators.required],
          date: ['', Validators.required],
          reference: ['', Validators.required]
        }),
      ])
    });

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
  }

  getIBANErrorMessage() {
      return this.iban.hasError('required') ? 'IBAN vaaditaan' :
        '';
    }

  getSenderNameErrorMessage() {
    return this.senderName.hasError('required') ? 'Lähettäjän nimi vaaditaan' :
      '';
  }

  getBicErrorMessage() {
    return this.bic.hasError('required') ? 'BIC vaaditaan' :
      '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Vastaanottajan nimi vaaditaan' :
      '';
  }

  getInvoiceNumberErrorMessage() {
    return this.name.hasError('required') ? 'Laskun numero vaaditaan' :
      '';
  }

  getDuedayErrorMessage() {
    return this.dueday.hasError('required') ? 'Eräpäivä vaaditaan' :
      '';
  }

  getTotalErrorMessage() {
    return this.total.hasError('required') ? 'Summa vaaditaan' :
      '';
  }

  getDateErrorMessage() {
    return this.date.hasError('required') ? 'Laskun päivämäärä vaaditaan' :
      '';
  }

  getReferenceErrorMessage() {
    return this.reference.hasError('required') ? 'Viitenumero vaaditaan' :
      '';
  }

  setReferenceErrorMessage() {
    return this.reference.hasError('required') ? 'Viitenumero on väärä' :
      '';
  }

  onSave() {
    this.invoiceService.createInvoices(this.invoice).subscribe(result => {
      this.invoice = result;
      this.snackBar.open('Maksu suoritettu onnistuneesti!', '', {
        duration: 3000
      });
      this.router.navigate(['/home']);
    });
  }

  referenceValidation() {
    // @ts-ignore
    const FinnishBankUtils = require('finnish-bank-utils');
    const reference = FinnishBankUtils.isValidFinnishRefNumber(this.invoice.reference);
    if (reference === false) {
      this.setReferenceErrorMessage();
    }
    console.log(FinnishBankUtils.isValidFinnishRefNumber(this.invoice.reference));
  }
}
