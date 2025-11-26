import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;

  exclusive: boolean = false;

  constructor(private service: DesignUtilityService) {}

  ngOnInit(): void {
    this.service.exclusive.subscribe(res =>
      this.exclusive = res
    )
  }

  onNavToggle() {
    this.navOpen = !this.navOpen;
  }

  closeNav() {
    this.navOpen = false;
  }
}
