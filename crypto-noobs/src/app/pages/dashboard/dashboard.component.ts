import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  link?: string;
  logo?: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'CoinMarketCap',
    iconClass: '',
    type: 'primary',
    link: 'https://coinmarketcap.com/',
    logo: 'assets/images/Coinmarketcap.jpg'
  };
  rollerShadesCard: CardSettings = {
    title: 'CoinGecko',
    iconClass: '',
    type: 'success',
    link: 'https://www.coingecko.com/en',
    logo: 'assets/images/Coinmarketcap.jpg'

  };
  wirelessAudioCard: CardSettings = {
    title: 'CoinMarketCal',
    iconClass: '',
    type: 'info',
    link: 'https://coinmarketcal.com/en/',
    logo: 'assets/images/Coinmarketcap.jpg'

  };
  coffeeMakerCard: CardSettings = {
    title: 'Etherscan',
    iconClass: '',
    type: 'warning',
    link: 'https://etherscan.io/',
    logo: 'assets/images/Coinmarketcap.jpg'

  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
