import { CreateCarDto } from "../dto";

export abstract class AbstractCarsService {
    abstract createOneCar(createCarDto: CreateCarDto): any;
    abstract findAll(): any;
    abstract findOneById(id: string): any;
    abstract update(id: string, Object: any): any;
    abstract remove(id: string): any;
}