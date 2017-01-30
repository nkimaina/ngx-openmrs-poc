import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsModule } from '../app-settings/app-settings.module';
import { IndicatorResourceService } from './indicator-resource.service';
import { PatientReminderResourceService } from './patient-reminder-resource.service';
import { VitalsResourceService } from './vitals-resource.service';
import { LabsResourceService } from './labs-resource.service';
import { ClinicalNotesResourceService } from './clinical-notes-resource.service';
import { MedicationHistoryResourceService } from './medication-history-resource.service';
import { HivSummaryResourceService } from './hiv-summary-resource.service';

@NgModule({
  imports: [CommonModule, AppSettingsModule],
  declarations: [],
  providers: [
    IndicatorResourceService,
    PatientReminderResourceService,
    VitalsResourceService,
    LabsResourceService,
    ClinicalNotesResourceService,
    MedicationHistoryResourceService,
    HivSummaryResourceService
    ],
  exports: []
})
export class EtlApi {
}
