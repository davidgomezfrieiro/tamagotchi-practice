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

  ngOnInit() {
    // Inicia un contador que reduce el nivel de hambre cada 5 segundos

    setInterval(() => {
      this.decreaseHunger();
    }, 5000);

    setInterval(() => {
      this.decreaseSleep();
    }, 5000);
  }

  feed() {
    this.hungerLevel += 10;
  }

  sleep() {
    setInterval(() => {
      this.sleepLevel += 10;
    }, 3000);
  }

  private decreaseHunger() {
    this.hungerLevel -= 5;

    if (this.hungerLevel < 0) {
      this.hungerLevel = 0;
    }
    // Puedes agregar lógica adicional aquí si es necesario
  }

  private decreaseSleep() {
    this.sleepLevel -= 5;

    if (this.sleepLevel < 0) {
      this.sleepLevel = 0;
    }
    // Puedes agregar lógica adicional aquí si es necesario
  }
}
