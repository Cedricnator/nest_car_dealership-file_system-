import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Brand } from '../entities';
import { AbstractBrandsService } from '.';
import { CreateBrandDto, UpdateBrandDto } from '../dto';

@Injectable()
export class BrandsService implements AbstractBrandsService{

  private brands: Brand[] = [
    { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },

  ]

  create(createBrandDto: CreateBrandDto) {
    const { name }  = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand);
    
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id);
    if(!brand) throw new NotFoundException(`This action returns a #${id} brand`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandFinded = this.findOne(id);
    this.brands = this.brands.map( brand => {
      if( brand.id === id ){
        brandFinded.updatedAt = new Date().getTime();
        brandFinded = { ...brandFinded, ...updateBrandDto }
        return brandFinded;
      }
      return brand;
    })
  }

  remove(id: string) {
    const brandFinded = this.findOne(id);
    this.brands = this.brands.filter( brand => brand.id !== id);
    
    return{
      id: id,
      brandDeleted: brandFinded,
    };
  }
}
