import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  size = 'large';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
