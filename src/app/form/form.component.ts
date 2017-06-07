import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
	simpleForm: FormGroup;
	firstname;
	lastname;
	company;
	email;

	constructor(fb:FormBuilder) {
		this.simpleForm = fb.group({
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			company: [''],
			email: ['', Validators.required]
		});

		this.firstname = this.simpleForm.controls['firstname'];
		this.lastname = this.simpleForm.controls['lastname'];
		this.company = this.simpleForm.controls['company'];
		this.email = this.simpleForm.controls['email'];
	}

	ngOnInit() {
	}

	onSubmit(formValue: any): void {
		let formResultsContainer = document.querySelector('.form_results--onSubmitPlaceholder');

		formResultsContainer.innerHTML = `<strong>First name:</strong> ${formValue.firstname} <br/>
								<strong>Last name:</strong> ${formValue.lastname} <br/>
								<strong>Company:</strong> ${formValue.company} <br/>
								<strong>Email address:</strong> ${formValue.email}
								`;

		console.log(formValue);
	}
}