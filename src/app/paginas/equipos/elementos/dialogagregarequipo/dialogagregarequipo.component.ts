import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogagregarequipo',
  templateUrl: './dialogagregarequipo.component.html',
  styleUrls: ['./dialogagregarequipo.component.css']
})
export class DialogagregarequipoComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
