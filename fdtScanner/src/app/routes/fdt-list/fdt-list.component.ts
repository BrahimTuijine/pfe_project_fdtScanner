import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FixTimeFormService } from 'src/app/services/fixtime/fix-time-form.service';
import {
  Fdtlist,
  FdtListService,
} from 'src/app/services/getFdtList/fdt-list.service';

@Component({
  selector: 'app-fdt-list',
  templateUrl: './fdt-list.component.html',
  styleUrls: ['./fdt-list.component.less'],
})
export class FdtListComponent implements OnInit {
  fdtlist: Fdtlist[] = [];
  isLoading = false;

  // modal
  visible = false;

  // form
  fdtUpdateFrom! : FormGroup ;
  fixtimeForm: any;

  constructor(
    private fdtlistService: FdtListService,
    private fb: FormBuilder,
    private fixtime: FixTimeFormService
  ) {
    this.fixtimeForm = this.fixtime.fixTimeForm;
  }

  ngOnInit(): void {
    this.fdtUpdateFrom = this.fb.group({
      id : [null, Validators.required],
      fdtName: [null, Validators.required],
      fdtLat: [null, Validators.required],
      fdtLng: [null, Validators.required],
    });
    // request to get all fdtlist
    this.fdtlistService.getAllFdt().subscribe((data: any) => {
      this.isLoading = true;
      this.fdtlist = data;
      this.isLoading = false;
    });
  }

  editFdt(data: Fdtlist): void {
    this.visible = true;
    this.fdtUpdateFrom?.patchValue({
      id : data.id,
      fdtName: data.fdtName,
      fdtLat: data.fdtLat,
      fdtLng: data.fdtLng,
    });
  }

  handleCancel() {
    this.visible = false;
  }

  handleOk() {
    this.fdtlistService.updateFdt(this.fdtUpdateFrom.value).subscribe((data: any) => {
      this.visible = false;
      this.ngOnInit();     
    })
  }
}
