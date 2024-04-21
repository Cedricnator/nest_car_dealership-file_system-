import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from '.';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
