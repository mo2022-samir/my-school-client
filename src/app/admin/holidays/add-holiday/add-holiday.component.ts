import { HolidayService } from '../../../core/service/holiday.service';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.sass'],
})
export class AddHolidayComponent {
  holidayForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Holiday',
      items: ['Fees'],
      active: 'Add Holiday',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private holidayService: HolidayService
  ) {
    this.holidayForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      type: ['', [Validators.required]],
      details: [''],
    });
  }
  onSubmit() {
    let formData = this.holidayForm.value;
    this.holidayService.addNewHoliday(formData).subscribe();
  }
}
