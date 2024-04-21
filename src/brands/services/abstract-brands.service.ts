import { CreateBrandDto, UpdateBrandDto } from "../dto";

export abstract class AbstractBrandsService {
    abstract create(createBrandDto: CreateBrandDto): any;
    abstract findAll(): any;
    abstract findOne(id: string): any;
    abstract update(id: string, updateBrandDto: UpdateBrandDto): any;
    abstract remove(id: string): any;
}