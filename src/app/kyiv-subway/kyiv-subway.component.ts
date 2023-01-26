import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-kyiv-subway',
  templateUrl: './kyiv-subway.component.html',
  styleUrls: ['./kyiv-subway.component.scss']
})

export class KyivSubwayComponent implements OnInit {

  @ViewChild('canvas', {static: true}) canvas?: ElementRef<HTMLCanvasElement> | any;

  private ctx?: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    if (this.canvas){
      this.ctx = this.canvas.nativeElement.getContext('2d')
      this.drawRedBranch(this.ctx!)
    }

  }

  drawRedBranch(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'
    ctx.beginPath();
    ctx.moveTo(10, 100);
    // ctx.lineTo(200, 300)
    // ctx.lineTo(600, 300)
    // ctx.lineTo(650, 350)
    // ctx.lineTo(750, 350)
    // ctx.lineTo(890, 200)
    ctx.bezierCurveTo(150, 300, 50, 300, 550, 300)
    // ctx.bezierCurveTo(900, 0, 0, 0, 900, 200)
    ctx.arc(0,0 ,0, 100, 10)
    ctx.stroke()
  }



}

