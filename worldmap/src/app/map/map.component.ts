import { Component } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  selectedCountry: any= null;

  constructor(private apiService: ApiService) {}
  
  onMapClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    if (clickedElement.tagName === 'path') {
      const countryId = clickedElement.id;

      this.apiService.getCountryData(countryId).subscribe((data: any) =>
      {
        console.log("api response:", data);
        const info = data[1][0];
        
        this.selectedCountry = {
          name:info.name,
          id: info.id,
          capital: info.capitalCity,
          region: info.region.value,
          incomeLevel: info.incomeLevel.value,
          latitude: info.latitude,
          longitude: info.longitude
        };
        console.log('info loaded for:', this.selectedCountry.name);
      });
      
  }
  }

}
