import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  isLoading = false;

  constructor(private scriptsLoaderService: ScriptsLoaderService,
              private renderer2: Renderer2, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadScripts();
  }

  loadScripts() {
    this.scriptsLoaderService.addScripts(this.renderer2, '/assets/js/core/app.js');
    this.scriptsLoaderService.addOneScriptAsync('/assets/js/core/app-menu.js').then();
  }

}