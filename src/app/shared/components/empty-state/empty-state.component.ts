import { Component, OnInit, Input } from '@angular/core';

import { EmptyState } from '@coffee-core/models';

@Component({
  selector: 'empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
  @Input() options: EmptyState;
  constructor() { }
  ngOnInit() { }
}
