import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  constructor(public translationService: TranslationService) {}

  @ViewChild('agreement') agreementModel!: NgModel;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;
  isChecked = false;
  showSuccess = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showSuccess = true;

            setTimeout(() => {
              this.showSuccess = false;
            }, 3000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
      this.showSuccess = true;

      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }

  /* getNamePlaceholder(name: NgModel): string {
    return !name.valid && name.touched && !name.disabled
      ? 'Oops! it seems your name is missing'
      : 'Your name goes here';
  }

  getEmailPlaceholder(email: NgModel): string {
    return !email.valid && email.touched && !email.disabled
      ? 'Hoppla! your email is required'
      : 'youremail@email.com';
  }

  getMessagePlaceholder(message: NgModel): string {
    return !message.valid && message.touched && !message.disabled
      ? 'What do you need to develop?'
      : 'Hello Tobias, I am interested in...';
  }
 */
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.agreementModel && !this.agreementModel.touched) {
      this.agreementModel.control.markAsTouched();
    }
  }
}
