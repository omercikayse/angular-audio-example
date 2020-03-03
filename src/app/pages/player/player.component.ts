import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  public files: Array<any> = [
    { name: "First song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  public state;
  public currentFile: any = {};

  constructor() {}

  ngOnInit(): void {}

  public isFirstPlaying() {
    return false;
  }

  public isLastPlaying() {
    return true;
  }

  public openFile(file, i) {}

  public onSliderChangeEnd(event) {}

  public next() {}

  public play() {}

  public previous() {}

  public pause() {}
}
