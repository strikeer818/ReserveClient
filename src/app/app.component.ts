import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HelloComponent, AppComponent, HttpClientModule, NavBarComponent]
})
export class AppComponent {
  title = 'WeatherClient';
}
