import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { nb_NO } from 'ng-zorro-antd/i18n';
import { registerLocaleData, DatePipe } from '@angular/common';
import nb from '@angular/common/locales/nb';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CardService } from './services/card.service';
import { AuthService } from './services/auth.service';
import { ReviewComponent } from './review/review.component';
import { AddComponent } from './add/add.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { DateService } from './services/date.service';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RandomComponent } from './review/random/random.component';
import { CustomComponent } from './review/custom/custom.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HotkeyModule } from 'angular2-hotkeys';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { HeaderComponent } from './header/header.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ResetComponent } from './auth/reset/reset.component';
registerLocaleData(nb);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ReviewComponent,
    AddComponent,
    RandomComponent,
    CustomComponent,
    HeaderComponent,
    ForgotComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    // NG ZORRO
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzTagModule,
    NzNotificationModule,
    NzProgressModule,
    NzSpinModule,
    NzToolTipModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: nb_NO },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CardService,
    AuthService,
    DatePipe,
    DateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
