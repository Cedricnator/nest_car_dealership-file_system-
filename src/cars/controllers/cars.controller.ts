import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param,  
    ParseUUIDPipe, 
    Patch, 
    Post, 
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from '../dto';
import { AbstractCarsService } from '../services';

@Controller('cars')
@UsePipes( ValidationPipe )
export class CarsController {
    constructor( 
        private readonly AbstractCarsService: AbstractCarsService 
    ){}

    @Post()
    createOneCar( 
        @Body() createCarDto: CreateCarDto
        ): void {
        return this.AbstractCarsService.createOneCar( createCarDto );
    }

    @Get()
    getAllCars(): void {
        return this.AbstractCarsService.findAll();
    }

    @Patch(':id')
    updateOneCar( 
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDto: UpdateCarDto 
        ){
        return this.AbstractCarsService.update( id, updateCarDto )
    }

    @Delete(':id')
    deleteOneCar( 
        @Param('id', ParseUUIDPipe) id: string
        ){
        return this.AbstractCarsService.remove( id );
    }

    @Get(':id')
    getCarById( 
        @Param('id', ParseUUIDPipe) id: string
        ){
        return this.AbstractCarsService.findOneById( id );
    }
}