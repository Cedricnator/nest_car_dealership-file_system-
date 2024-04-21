import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid } from 'uuid';
import { AbstractCarsService } from './';
import { Car } from '../interfaces';
import { CreateCarDto, UpdateCarDto } from '../dto';


// La logica de negocio, se encuentra toda en mi servicio.
@Injectable()
export class CarsService implements AbstractCarsService {
    private cars: Car[] = [
        { id: uuid(), brand: 'Toyota', model: 'Corolla'},
        { id: uuid(), brand: 'Honda', model: 'Civic'},
        { id: uuid(), brand: 'Jeep', model: 'Cherokee' }
    ];

    createOneCar( CreateCarDto: CreateCarDto ){
        const newCar = {
            id: uuid(),
            ...CreateCarDto
        };
        this.cars.push( newCar );
        return newCar;
    }

    findAll(){
        return this.cars;
    }

    findOneById( id: string ){
        const car = this.cars.find( car => car.id === id );
        if( !car )
            throw new NotFoundException(`Car with id '${id}' not found`);
        return car;
    } 

    update( id: string, updateCarDto: UpdateCarDto ) {
        let carDB = this.findOneById( id );
        this.cars = this.cars.map( car => {
            if( car.id === id ){
                carDB = { ...carDB, ...updateCarDto, id };
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    remove( id: string ) {
        let carDB = this.findOneById( id );
        this.cars = this.cars.filter( car => car.id !== id );
        return {
            message: `Car with id '${id}' removed`,
            car_deleted: carDB
        }
    }
}
