import { AssetService } from 'src/app/core/service/asset.service';
import { LibraryService } from './../all-assets/library.service';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.sass'],
})
export class AddAssetComponent {
  libraryForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Asset',
      items: ['Library'],
      active: 'Add Asset',
    },
  ];
  constructor(private fb: UntypedFormBuilder ,private libraryService:AssetService) {
    this.libraryForm = this.fb.group({
      no: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      authorName: [''],
      publisher: [''],
      department: ['', [Validators.required]],
      aType: ['', [Validators.required]],
      date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: [''],
      details: [''],
    });
  }
  onSubmit() {
    this.libraryService.addNewLibrary(this.libraryForm.getRawValue()).subscribe();
  }
}
