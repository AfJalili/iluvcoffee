import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee: Coffee = this.coffees.find((c) => c.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return coffee;
  }

  create(coffee: Coffee): Coffee {
    this.coffees.push(coffee);
    return coffee;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    // do something
  }

  remove(id: string): Coffee {
    const coffeeIndex: number = this.coffees.findIndex(
      (c: Coffee) => c.id === id,
    );

    if (coffeeIndex >= 0) {
      const deleted: Coffee = this.coffees[coffeeIndex];
      this.coffees.splice(coffeeIndex, 1);
      return deleted;
    }
  }
}
