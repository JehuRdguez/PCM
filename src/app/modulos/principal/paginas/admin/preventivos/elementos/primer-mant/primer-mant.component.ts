import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-primer-mant',
  templateUrl: './primer-mant.component.html',
  styleUrls: ['./primer-mant.component.css']
})
export class PrimerMantComponent {
  Estado = ["Realizado", "No realizado"]
  PrimerMantForm!: FormGroup
}