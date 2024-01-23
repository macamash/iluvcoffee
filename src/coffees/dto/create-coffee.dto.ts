// https://www.npmjs.com/package/class-validator?activeTab=readme
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true }) // each: true means that each item in the array must be a string
  readonly flavors: string[];
}
