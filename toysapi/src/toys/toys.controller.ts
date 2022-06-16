import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Toy } from './Entities/Toy';
import { ToysService } from './toys.service';

@Controller('toys')
export class ToysController {
    /**
     *
     */
    constructor(private toyService: ToysService) {

    }

    @Get("GetToys")
    GetToys() {

        return this.toyService.GetToys();
    }

    @Post("UpdateToy")
    UpdateToy(@Body() toy: Toy) {
        console.log(toy);
        return this.toyService.UpdateToy(toy);
    }
    
    @Post("DeleteToy")
    DeleteToy(@Query("id") id: number) {
        console.log("id to delete is ", id);
        return this.toyService.DeleteToy(id);
    }



}
