import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  hungerLevel: number = 0;
  sleepLevel: number = 0;
  dirtLevel: number = 0;
  sleeping: boolean = false;

  public getSleepLevel() {
    return this.sleepLevel;
  }

  public setSleeping(value: boolean) {
    this.sleeping = value;
  }

  ngOnInit() {
    setInterval(() => {
      this.decreaseHunger();
    }, 20000);

    setInterval(() => {
      this.decreaseSleep();
    }, 60000);

    setInterval(() => {
      this.increaseDirt();
    }, 40000);
  }

  feed() {
    if (this.hungerLevel <= 100) {
      this.hungerLevel += 10;
    }

    if (this.hungerLevel >= 100) {
      this.hungerLevel = 100;
    }
  }

  clean() {
    if (this.dirtLevel >= 10) {
      this.dirtLevel -= 10;
      if (this.dirtLevel < 10) {
        this.dirtLevel = 0;
      }
    } else {
      this.dirtLevel = 0;
    }
  }

  sleep() {
    var increaseSleep = () => {
      this.setSleeping(true);
      this.sleepLevel += 10;
    };
    var sleepLevel = () => {
      return this.getSleepLevel();
    };
    var falseSleeping = () => {
      this.setSleeping(false);
    };
    var interval = setInterval(function () {
      if (sleepLevel() == 100) {
        clearInterval(interval);
        falseSleeping();
        return;
      }
      increaseSleep();
    }, 2000);
  }

  private decreaseHunger() {
    this.hungerLevel -= 5;

    if (this.hungerLevel < 0) {
      this.hungerLevel = 0;
    }
  }

  private decreaseSleep() {
    if (this.sleeping == false) {
      this.sleepLevel -= 5;
    }

    if (this.sleepLevel < 0) {
      this.sleepLevel = 0;
    }
  }

  private increaseDirt() {
    this.dirtLevel += 5;

    if (this.dirtLevel > 100) {
      this.dirtLevel = 100;
    }
  }
}
