import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './app-avatar.component.html',
  styleUrls: ['./app-avatar.component.scss']
})
export class AppAvatarComponent implements OnInit {
  avatarSize: string;
  @Input() size: string; 
  @Input() user: any = {
    name: 'User Name',
    email: 'user.name@gmail.com',
    avatarUrl: null,
    initials: 'UN'
  };
  constructor() { }
  ngOnInit() {
    switch(this.size) {
      case 'small':
        this.avatarSize = 'avatar-sm';
        break;
      case 'large':
        this.avatarSize = 'avatar-lg';
        break;
      default:
        this.avatarSize = 'avatar';
    }
  }
}
