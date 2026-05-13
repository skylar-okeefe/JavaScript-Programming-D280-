import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  selectedCountry: any= null;
  
  onMapClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    if (clickedElement.tagName === 'path') {
      const countryId = clickedElement.id;
      const countryName = clickedElement.getAttribute('name');

      this.selectedCountry = {
        name: countryName,
        id: countryId,
        capital: '',
        region: '',
        incomeLevel: '',
        latitude: '',
        Longitude: '',
      };

      console.log(`mouse click captured for: ${countryName}`);
    }
  }

}
