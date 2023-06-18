import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService 
{
private ninjas = [
    {id: 0, name: 'ninjaA',phone: '0111111111'},
    {id: 1, name: 'ninjaB',phone: '0222222222'}
];

getNinjas(phone?:'0111111111'|'0222222222') 
{
    console.log(this.ninjas)
  if(phone) {
    return this.ninjas.filter((ninja) => ninja.phone === phone);
  }
  return this.ninjas;
}
getNinja(id: number)
{
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if(!ninja)
    {
        throw new Error('ninja not found');
    }
    return ninja;
}
createNinja(createninjaDto: CreateNinjaDto)
{
    const newNinja = {...createninjaDto, id: Date.now(),};
    this.ninjas.push(newNinja);

    return newNinja;
}
}