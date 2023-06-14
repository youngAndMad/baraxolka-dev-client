import { Component, Input } from '@angular/core';
import { Address } from 'src/app/model/Address';


@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
})


export class BoutiqueComponent {
  @Input() address: Address;
}
