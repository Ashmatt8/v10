import {Component} from '@angular/core';
import {distribuitionCenters} from './distribuition-centers';

@Component({
  selector: 'app-distribuition',
  templateUrl: './distribution.component.html',
  styleUrls: ['distribution.component.less']
})
export class DistributionComponent {
    distributionCenters = distribuitionCenters;
}
