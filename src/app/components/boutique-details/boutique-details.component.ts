import { ApiService } from 'src/app/services/api.service';
import { Category } from '../../model/Category';
import { Boutique } from '../../model/Boutique';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-boutique-details',
  templateUrl: './boutique-details.component.html',
  styleUrls: ['./boutique-details.component.css'],
})
export class BoutiqueDetailsComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  @Input() address: Address;

  boutique: Boutique;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.address.boutique){
      this.boutique = this.address.boutique;
    }
  }

  closePopup() {
    this.closed.emit();
  }

  getName(): string {
    if (this.boutique.name) {
      return this.boutique.name;
    }
    return 'Empty container';
  }
}
