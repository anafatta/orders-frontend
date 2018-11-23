import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})

export class PasschangeComponent implements OnInit {
  cpForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }
  matchValidator(f: AbstractControl) {
    // safety check
    if (!f.get('newpassword').value || !f.get('duplicatedpassword').value) { return null; }
    return f.get('newpassword').value === f.get('duplicatedpassword').value ? null : { 'nomatch': true };
  }
  ngOnInit() {
    this.cpForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email],
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      duplicatedpassword: ['', Validators.required],
    }, { validator: this.matchValidator }
    );
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.cpForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.cpForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.changePassword(this.f.username.value, this.f.oldpassword.value, this.f.newpassword.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl + '/sellers']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}

