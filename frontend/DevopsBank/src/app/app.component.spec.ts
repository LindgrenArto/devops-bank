import {TestBed, async, inject, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListComponent} from './components/list/list.component';
import {
  MatCardModule,
  MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatStepperModule, MatToolbarModule
} from '@angular/material';
import {ToolbarComponent} from './ui/toolbar/toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import {options} from './app.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        ToolbarComponent
      ],
      imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatIconModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        NgxMaskModule.forRoot(options),
        MatCardModule,
        MatExpansionModule,
        MatToolbarModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy  }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'DevopsBank'`, async(() => {
    expect(component.title).toEqual('DevopsBank');
  }));

  it('should call router.navigate["home"]', () => {
      component.navigateToHome();
      expect (routerSpy.navigate).toHaveBeenCalledWith(['home']);
    });

  it('should call router.navigate["list"]', () => {
    component.navigateToList();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['list']);
  });
});
