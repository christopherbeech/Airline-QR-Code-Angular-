import { Component } from '@angular/core';

@Component({
  selector: 'qr-root',
  template: `
    <div>
      <h1 style="text-align: center; padding: 25px">{{pageTitle}}</h1>
      <qr-card></qr-card>
    </div>
  `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Blue Airlines - QR Code'
}
