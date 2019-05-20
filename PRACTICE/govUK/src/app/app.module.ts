import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenuComponent } from './menu/menu.component';
import { RelatedComponent } from './related/related.component';
import { CookiesNotificationComponent } from './cookies-notification/cookies-notification.component';
import { FeedbackNotificationComponent } from './feedback-notification/feedback-notification.component';
import { SubscriptionsLinksComponent } from './subscriptions-links/subscriptions-links.component';
import { FeedbackPromptComponent } from './feedback-prompt/feedback-prompt.component';
import { SummaryComponent } from './summary/summary.component';
import { SafetyAndSecurityComponent } from './safety-and-security/safety-and-security.component';
import { TerrorismComponent } from './terrorism/terrorism.component';
import { LocalLawsAndCustomsComponent } from './local-laws-and-customs/local-laws-and-customs.component';
import { EntryRequirementsComponent } from './entry-requirements/entry-requirements.component';
import { HealthComponent } from './health/health.component';
import { MoneyComponent } from './money/money.component';
import { NaturalDisastersComponent } from './natural-disasters/natural-disasters.component';
import { TravelAdviceHelpAndSupportComponent } from './travel-advice-help-and-support/travel-advice-help-and-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PageTitleComponent,
    FooterComponent,
    BreadcrumbComponent,
    MenuComponent,
    RelatedComponent,
    CookiesNotificationComponent,
    FeedbackNotificationComponent,
    SubscriptionsLinksComponent,
    FeedbackPromptComponent,
    SummaryComponent,
    SafetyAndSecurityComponent,
    TerrorismComponent,
    LocalLawsAndCustomsComponent,
    EntryRequirementsComponent,
    HealthComponent,
    MoneyComponent,
    NaturalDisastersComponent,
    TravelAdviceHelpAndSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
