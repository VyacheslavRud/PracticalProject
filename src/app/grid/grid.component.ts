import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {fromEvent, map, Observable, of, Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy, AfterViewInit {

  unsubscribeAll = new Subject();
  users: Observable<any> = new Observable();
  usersItems: Array<any> = [];
  @ViewChild('items') private items?: ElementRef;
  types: Array<string> = ['Names', 'Emails', 'Birthdays', 'Address', 'Numbers', 'Passwords']

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers().pipe(map((response) => {
      this.usersItems = [...response.results];
      return response.results.slice(0, 25)
    }));
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  async ngAfterViewInit() {
    try {
      let amount = 25;
      await this.users.toPromise()
      fromEvent(this.items?.nativeElement,'scroll')
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((e: any) => {
          const target: HTMLElement = e.target;
          if (target.scrollTop + target.offsetHeight >= target.scrollHeight){
            this.users = of(this.usersItems.slice(0, 25+amount))
            amount += 25;
            console.log(amount)
          }
        });
    } catch (e) {
      console.log('Ops!')
    }
  }

  userInfo(user: any) {
    console.log(user)
  }

}
