import { Module } from '@nestjs/common';
import { CarsController } from './controllers';
import { AbstractCarsService, CarsService } from './services';

@Module({
  controllers: [CarsController],
  providers: [
    { provide:  AbstractCarsService , useClass: CarsService }
  ]
})
export class CarsModule {}
