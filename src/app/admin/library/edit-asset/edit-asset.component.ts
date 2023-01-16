import { shareReplay } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AssetService } from 'src/app/core/service/asset.service';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.sass'],
})
export class EditAssetComponent implements OnInit {
  libraryForm: UntypedFormGroup;
  selectedLibirary;
  assetDetails: any;
  list;
  formdata = {
    no: 'BN5343534',
    title: 'Master In Java',
    subject: 'java',
    authorName: 'John Deo',
    publisher: 'xyz Publisher',
    department: 'computer',
    aType: 'book',
    date: '2020-02-17T14:22:18Z',
    price: '25$',
    status: 'in stock',
    details: 'Master in java is a good book for java learner.',
  };
  breadscrums = [
    {
      title: 'Edit Asset',
      items: ['Library'],
      active: 'Edit Asset',
    },
  ];
  constructor(private fb: UntypedFormBuilder, private libraryService:AssetService) {
    this.libraryForm = this.createContactForm();
  }
  ngOnInit(): void {
      this.getList()
  }
  getList() {
  this.libraryService.getLibrarysList().subscribe( res => {this.list = res;
    console.log(this.list)}
    )
   
  }
  getAssetDetails(id: any) {
    this.libraryService.getLibraryById(id).subscribe(res=> {
      this.assetDetails= res;
      this.createContactForm;
      this.libraryForm = this.createContactForm();
    })

      

  }

  onChange() {
    this.getAssetDetails(this.selectedLibirary);
  }
  onSubmit() {
    this.libraryService.editLibrary(this.assetDetails.id,this.libraryForm.getRawValue()).subscribe();
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      no: [this.assetDetails?.no, [Validators.required]],
      title: [this.assetDetails?.title, [Validators.required]],
      subject: [this.assetDetails?.subject, [Validators.required]],
      authorName: [this.assetDetails?.authorName],
      publisher: [this.assetDetails?.publisher],
      department: [this.assetDetails?.department, [Validators.required]],
      aType: [this.assetDetails?.aType, [Validators.required]],
      date: [this.assetDetails?.date, [Validators.required]],
      price: [this.assetDetails?.price, [Validators.required]],
      status: [this.assetDetails?.status],
      details: [this.assetDetails?.details],
    });
  }
}
