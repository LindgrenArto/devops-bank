import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {ToolbarComponent} from '../../ui/toolbar/toolbar.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatNativeDateModule, MatSnackBarModule,
  MatStepperModule, MatToolbarModule
} from '@angular/material';
import {NgxMaskModule} from 'ngx-mask';
import {options} from '../../app.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule, By} from '@angular/platform-browser';
import {InvoiceService} from '../../services/invoice.service';
import {DebugElement} from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let service: InvoiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatSnackBarModule,
        RouterTestingModule.withRoutes([]),
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        NgxMaskModule.forRoot(options)],
      declarations: [HomeComponent,
        ToolbarComponent],
      providers: [
        {provide: FormBuilder, useValue: formBuilder},
        InvoiceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    service = TestBed.get(InvoiceService);
    component = fixture.componentInstance;
    component.ngOnInit();
    component.isValidIban();
    component.isValidReference();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLinear should be true ', () => {
    expect(component.isLinear).toMatch(/true/);
  });

  // First formGroup fields
  it('firstFormGroup invalid when empty', () => {
    expect(component.firstFormGroup.valid).toBeFalsy();
  });

  it('iban field validity', () => {
    const iban = component.firstFormGroup.controls.iban;
    expect(iban.valid).toBeFalsy();
  });

  it('senderName field validity', () => {
    const senderName = component.firstFormGroup.controls.senderName;
    expect(senderName.valid).toBeFalsy();
  });

  it('bic field validity', () => {
    const bic = component.firstFormGroup.controls.bic;
    expect(bic.valid).toBeFalsy();
  });

  // First formGroup errors validity
  it('iban field error validity', () => {
    const iban = component.firstFormGroup.controls.iban;
    let errors: ValidationErrors;
    errors = iban.errors;
    expect(errors.required).toBeTruthy();
  });

  it('senderName field error validity', () => {
    const senderName = component.firstFormGroup.controls.senderName;
    let errors: ValidationErrors;
    errors = senderName.errors;
    expect(errors.required).toBeTruthy();
  });

  it('bic field error validity', () => {
    const bic = component.firstFormGroup.controls.bic;
    let errors: ValidationErrors;
    errors = bic.errors;
    expect(errors.required).toBeTruthy();
  });

  // Second formGroup fields
  it('secondFormGroup invalid when empty', () => {
    expect(component.secondFormGroup.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.secondFormGroup.controls.name;
    expect(name.valid).toBeFalsy();
  });

  it('invoiceNumber field validity', () => {
    const invoiceNumber = component.secondFormGroup.controls.invoiceNumber;
    expect(invoiceNumber.valid).toBeFalsy();
  });

  it('dueday field validity', () => {
    const dueday = component.secondFormGroup.controls.dueday;
    expect(dueday.valid).toBeFalsy();
  });

  it('total field validity', () => {
    const total = component.secondFormGroup.controls.total;
    expect(total.valid).toBeFalsy();
  });

  it('date field validity', () => {
    const date = component.secondFormGroup.controls.date;
    expect(date.valid).toBeFalsy();
  });

  it('reference field validity', () => {
    const reference = component.secondFormGroup.controls.reference;
    expect(reference.valid).toBeFalsy();
  });

  // Second formGroup errors validity
  it('name field error validity', () => {
    const name = component.secondFormGroup.controls.name;
    let errors: ValidationErrors;
    errors = name.errors;
    expect(errors.required).toBeTruthy();
  });

  it('invoiceNumber field error validity', () => {
    const invoiceNumber = component.secondFormGroup.controls.invoiceNumber;
    let errors: ValidationErrors;
    errors = invoiceNumber.errors;
    expect(errors.required).toBeTruthy();
  });

  it('dueday field error validity', () => {
    const dueday = component.secondFormGroup.controls.dueday;
    let errors: ValidationErrors;
    errors = dueday.errors;
    expect(errors.required).toBeTruthy();
  });

  it('total field error validity', () => {
    const total = component.secondFormGroup.controls.total;
    let errors: ValidationErrors;
    errors = total.errors;
    expect(errors.required).toBeTruthy();
  });

  it('date field error validity', () => {
    const date = component.secondFormGroup.controls.date;
    let errors: ValidationErrors;
    errors = date.errors;
    expect(errors.required).toBeTruthy();
  });

  it('reference field error validity', () => {
    const reference = component.secondFormGroup.controls.reference;
    let errors: ValidationErrors;
    errors = reference.errors;
    expect(errors.required).toBeTruthy();
  });

  it('should call onSave() after clicking onClick button', () => {
    spyOn(fixture.componentInstance, 'onSave');
    const onSaveBtn: DebugElement = fixture.debugElement.query(By.css('[id=saveBtn]'));
    onSaveBtn.nativeElement.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.onSave).toHaveBeenCalled();
  });

  it('isValidIban() input field value should be true ', async () => {
    const iban = component.firstFormGroup.controls.iban;
    iban.setValue('FI4250001510000023');
    const IBAN = require('iban');
    IBAN.isValid(iban.value);
    fixture.detectChanges();
    component.isValidIban();
    expect(iban.value).toBeTruthy();
  });

  it('isValidIban() input field value should be false ', async () => {
    const iban = component.firstFormGroup.controls.iban;
    iban.setValue('test');
    const IBAN = require('iban');
    IBAN.isValid(iban.value);
    fixture.detectChanges();
    expect(IBAN.isValid(iban.value)).toBeFalsy();
  });

  it('isValidReference() input field value should be true ', async () => {
    const reference = component.firstFormGroup.controls.iban;
    reference.setValue('12345672');
    const FinnishBankUtils = require('finnish-bank-utils');
    FinnishBankUtils.isValidFinnishRefNumber(reference.value);
    fixture.detectChanges();
    expect(FinnishBankUtils.isValidFinnishRefNumber(reference.value)).toBeTruthy();
  });

  it('isValidReference() field value should be false ', async () => {
    const reference = component.firstFormGroup.controls.iban;
    reference.setValue('1234');
    const FinnishBankUtils = require('finnish-bank-utils');
    FinnishBankUtils.isValidFinnishRefNumber(reference.value);
    fixture.detectChanges();
    expect(FinnishBankUtils.isValidFinnishRefNumber(reference.value)).toBeFalsy();
  });

  it('should match iban pattern', () => {
    const iban = component.firstFormGroup.controls.iban;
    iban.setValue('FI4250001510000023');
    expect(iban.value).toMatch(/^[F,f][I,i]{1,2}(?:[ ]?[0-9]){16}$/);
  });

  it('should not match iban pattern', () => {
    const iban = component.firstFormGroup.controls.iban;
    iban.setValue('test$£@');
    expect(iban.value).not.toMatch(/^[F,f][I,i]{1,2}(?:[ ]?[0-9]){16}$/);
  });

  it('should match bic pattern', () => {
    const bic  = component.firstFormGroup.controls.bic;
    bic .setValue('SBANFIHH');
    expect(bic.value).toMatch(/^[a-zA-Z]{3}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/);
  });

  it('should not match bic pattern', () => {
    const bic = component.firstFormGroup.controls.bic;
    bic.setValue('test');
    expect(bic.value).not.toMatch(/^[a-zA-Z]{3}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/);
  });

  it('should match senderName pattern', () => {
    const senderName  = component.firstFormGroup.controls.senderName;
    senderName .setValue('Teuvo Terävä');
    expect(senderName.value).toMatch(/^[A-Za-z-ÄÖäöÅå\s]*$/);
  });

  it('should not match senderName pattern', () => {
    const senderName = component.firstFormGroup.controls.senderName;
    senderName.setValue('$5213');
    expect(senderName.value).not.toMatch(/^[A-Za-z-ÄÖäöÅå\s]*$/);
  });

  it('should match invoiceNumber pattern', () => {
    const invoiceNumber  = component.secondFormGroup.controls.invoiceNumber;
    invoiceNumber .setValue('20200219-001');
    expect(invoiceNumber.value).toMatch(/^[0-9-]*$/);
  });

  it('should not match invoiceNumber pattern', () => {
    const invoiceNumber = component.secondFormGroup.controls.invoiceNumber;
    invoiceNumber.setValue('test');
    expect(invoiceNumber.value).not.toMatch(/^[0-9-]*$/);
  });

  it('should match name pattern', () => {
    const name  = component.secondFormGroup.controls.name;
    name .setValue('Terävä Teppo');
    expect(name.value).toMatch(/^[A-Za-z-ÄÖäöÅå\s]*$/);
  });

  it('should not match name pattern', () => {
    const name = component.secondFormGroup.controls.name;
    name.setValue('test12');
    expect(name.value).not.toMatch(/^[A-Za-z-ÄÖäöÅå\s]*$/);
  });

  it('should match total pattern', () => {
    const total  = component.secondFormGroup.controls.total;
    total .setValue('456.12');
    expect(total.value).toMatch(/^[0-9]+(\d*[.][0-9]{1,2})?$/);
  });

  it('should not match total pattern', () => {
    const total = component.secondFormGroup.controls.total;
    total.setValue('t12,45');
    expect(total.value).not.toMatch(/^[0-9]+(\d*[.][0-9]{1,2})?$/);
  });
});
