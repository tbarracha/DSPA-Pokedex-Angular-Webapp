import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageName } from 'src/app/enums/PageName';
import { EventManagerService } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {


  constructor(
    private router: Router,
    private eventManager: EventManagerService,
  ) { }

  toMainPage() {
    this.router.navigate(['/home']);
  }
}
