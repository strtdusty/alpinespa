import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css','../../global.css']
})
export class AppComponent {
    constructor(angulartics2: Angulartics2, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }
}
