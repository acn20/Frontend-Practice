import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { SafetyAndSecurityComponent } from './safety-and-security/safety-and-security.component';
import { TerrorismComponent } from './terrorism/terrorism.component';
import { LocalLawsAndCustomsComponent } from './local-laws-and-customs/local-laws-and-customs.component';
import { EntryRequirementsComponent } from './entry-requirements/entry-requirements.component';
import { HealthComponent } from './health/health.component';
import { NaturalDisastersComponent } from './natural-disasters/natural-disasters.component';
import { MoneyComponent } from './money/money.component';
import { TravelAdviceHelpAndSupportComponent } from './travel-advice-help-and-support/travel-advice-help-and-support.component';

const routes: Routes = [
  { path: "", component: SummaryComponent },
  { path: "safety-and-security", component: SafetyAndSecurityComponent },
  { path: "terrorism", component: TerrorismComponent},
  { path: "local-laws-and-customs", component: LocalLawsAndCustomsComponent},
  { path: "entry-requirements", component: EntryRequirementsComponent},
  { path: "health", component: HealthComponent},
  { path: "natural-disasters", component: NaturalDisastersComponent},
  { path: "money", component: MoneyComponent},
  { path: "travel-advice-help-and-support", component: TravelAdviceHelpAndSupportComponent},
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
