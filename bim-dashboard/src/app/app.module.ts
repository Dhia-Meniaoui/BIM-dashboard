import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';

import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {NewsModule} from './modules/News/news.module';
import {AnalyticsModule} from './modules/analytics/analytics.module';
import {OffersModule} from './modules/offers/offers.module';
import {JobInternshipModule} from './modules/job-internship/job-internship.module';
import {UsersModule} from './modules/users/users.module';
import {TeamMembersModule} from './modules/team-members/team-members.module';
import {SignInModule} from './modules/sign-in/sign-in.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './shared/authentication/auth.interceptor';
import {SharedComponentsModule} from './modules/shared-components/shared-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {PartnersModule} from './modules/partners/partners.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AnalyticsModule,
    NewsModule,
    OffersModule,
    PartnersModule,
    JobInternshipModule,
    UsersModule,
    TeamMembersModule,
    SignInModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
