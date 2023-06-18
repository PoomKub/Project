import { IsInt, MaxLength, MinLength, minLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)

    name:string;
    
    @MinLength(10)
    @MaxLength(10)
    @IsInt()
    phone:string
}
