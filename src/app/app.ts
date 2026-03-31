import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceMethod } from './country.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('map-project');
  selectCountry: string = '';
 
  
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  longitude: string = '';
  latitude: string = '';

  
  constructor (private serviceMethod: ServiceMethod, 
    private change: ChangeDetectorRef) {}

  
  onClick(event: any) {
    let self = this;
    let target = event.target;

      if (target.tagName === 'path') {
        this.selectCountry = target.getAttribute('name');

        let code = target.getAttribute('id').toLowerCase();

        this.serviceMethod.getCountryProperties(code).subscribe(function(data:any) {
          let country = data[1][0];
      
          if (country) {
            self.capital = country.capitalCity;
            self.region = country.region.value;
            self.incomeLevel = country.incomeLevel.value;
            self.longitude = country.longitude;
            self.latitude = country.latitude;
            
            self.change.detectChanges();
          }
        });
  }
}
}