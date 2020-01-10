import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  private redirection: ReturnType<typeof setTimeout>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.redirection = setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 5000);
  }

  ngOnDestroy() {
    if (this.redirection) {
      clearTimeout(this.redirection);
    }
  }

}
