import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {fromEvent, map, Observable, of, Subject, take, takeUntil, tap} from "rxjs";


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {

  unsubscribeAll = new Subject();
  users?: Observable<any>;
  usersItems: Array<any> = [];
  @ViewChildren('items') private items?: QueryList<any>;
  types: Array<string> = ['Names', 'Emails', 'Birthdays', 'Address', 'Numbers', 'Passwords'];

  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    let amount = 25;
    let skip = false;
    this.users = this.userService.getUsers().pipe(map((response) => {
      this.usersItems = [...response.results];
      return response.results.slice(0, 25)
    }), tap(users => {
      if (!!users.length && !skip) {
        this.items!.changes.pipe(takeUntil(this.unsubscribeAll)).subscribe(res => {
          console.log(res)
          if (!!res._results.length) {
            fromEvent(res._results[0].nativeElement, 'scroll')
              .pipe(takeUntil(this.unsubscribeAll))
              .subscribe((e: any) => {
                const target: HTMLElement = e.target;
                if (target.scrollTop + target.offsetHeight >= target.scrollHeight) {
                  this.users = of(this.usersItems.slice(0, 25 + amount))
                  amount += 25;
                  console.log(amount)
                }
              });
          }
        })
      }
    }), take(1));
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  userInfo(user: any) {
    console.log(user)
  }

}
