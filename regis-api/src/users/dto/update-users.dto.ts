import { PartialType } from '@nestjs/mapped-types';
import { CreateusersDto } from './create-users.dto';

export class UpdateusersDto extends PartialType
(CreateusersDto) {}
    