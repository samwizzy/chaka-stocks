import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit, OnChanges {
  name: string = 'Paul';
  @Input() message!: string;
  @Output() onAnswer: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  changeViewMessage() {
    this.message = 'Hello my world';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes in child');
  }

  sendValue(value: string) {
    this.onAnswer.emit(value);
  }
}
