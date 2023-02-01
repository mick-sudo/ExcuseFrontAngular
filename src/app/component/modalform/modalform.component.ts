import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExcuseService } from 'src/app/service/excuse.service';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})
export class ModalformComponent implements OnInit {

  excuseForm!: FormGroup;
  

  constructor(public activeModal: NgbActiveModal,
    private excuseService: ExcuseService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.excuseForm = this.formBuilder.group({
      http_code:['', Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      tag:['', Validators.required],
      message:['', Validators.required],
    });
  }

  onSubmitForm(): void {
    console.log(this.excuseForm.value);
    if(this.excuseForm.valid){
      this.excuseService.addNewExcuse(this.excuseForm.value).subscribe(()=> {
        this.activeModal.close();
      });
    }
    else{console.log("formulaire invalide");
    }
  }

}
