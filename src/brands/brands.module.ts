import { Module } from '@nestjs/common';
import { BrandsService } from './services/brands.service';
import { BrandsController } from './controllers/brands.controller';
import { AbstractBrandsService } from './services';

@Module({
  controllers: [BrandsController],
  providers: [
    { provide: AbstractBrandsService, useClass: BrandsService }
  ],
})
export class BrandsModule {}
