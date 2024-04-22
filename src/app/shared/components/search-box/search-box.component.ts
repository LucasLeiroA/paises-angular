import { Component, EventEmitter, Input, OnInit, Output , OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy {



  private debouncer:Subject<string> = new Subject<string>();
  private debauncerSuscription?:Subscription;

  @Input()
  public initalValue:string = '';

  @Input()
  public placeholder:string = "";

  @Output()
  public OnValue = new EventEmitter<string>()


  @Output()
  public onDebaunce = new EventEmitter<string>()


  ngOnInit(): void {

   this.debauncerSuscription =  this.debouncer
    .pipe(
      debounceTime(700)
    )
    .subscribe( value => {
      this.onDebaunce.emit(value)

    })

  }

  ngOnDestroy():void{
    this.debauncerSuscription?.unsubscribe();
  }

  emitValue(value:string):void{
    this.OnValue.emit(value);

  }

  onKeyPress(searchTerm:string):void{

    this.debouncer.next(searchTerm)

  }

}
