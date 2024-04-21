import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AbstractBrandsService } from '../services';
import { CreateBrandDto, UpdateBrandDto } from '../dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly AbstractBrandsService: AbstractBrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.AbstractBrandsService.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.AbstractBrandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.AbstractBrandsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.AbstractBrandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe)  id: string) {
    return this.AbstractBrandsService.remove(id);
  }
}
