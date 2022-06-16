import { Injectable } from '@nestjs/common';
import { Toy } from './Entities/Toy';
import { createClient } from 'redis';

@Injectable()
export class ToysService {

    readonly rclient = createClient();
    Toys: Toy[];
    /**
     *
     */
    constructor() {
        this.initMockToys();
    }

    GetToys() {
        return this.Toys;
    }

    async initMockToys() {
        console.log(new Date());
        await this.rclient.connect();
        let cachedToys = await this.rclient.get("toys");
        console.log("cachedToys", cachedToys)
        if (cachedToys == null || cachedToys.length == 0) {
            this.Toys = [];
            for (let index = 0; index < 10; index++) {
                let toy = new Toy();
                toy.Id = index;
                let r = Math.ceil((Math.random() * 10));
                console.log(r)
                toy.IsElectronic = r % 2 == 0 ? true : false;
                toy.Name = "Toy_" + index;
                let price = Math.ceil(Math.random() * 2000);
                console.log(price)
                toy.Price = price
                this.Toys.push(toy);

            }
            this.rclient.set("toys", JSON.stringify(this.Toys));
        }
        else {
            this.Toys = JSON.parse(cachedToys);
        }

    }

    async UpdateToy(toy: Toy) {
        let toyToUpdate = this.Toys.find(x => x.Id == toy.Id);
        toyToUpdate.IsElectronic = toy.IsElectronic;
        toyToUpdate.Name = toy.Name;
        toyToUpdate.Price = toy.Price;
        await this.rclient.set("toys", JSON.stringify(this.Toys));
    }

    async DeleteToy(id: Number) {
        let index = this.Toys.findIndex(x => x.Id == id);
        if (index != -1) {
            this.Toys.splice(index, 1);
            await this.rclient.set("toys", JSON.stringify(this.Toys));
        }
        else
            throw new Error("There is no such Toy related to this Id ${id}");
    }




}
