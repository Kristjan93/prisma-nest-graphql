import {
  Field,
  ID,
  ObjectType,
  InputType,
  registerEnumType,
  Int,
} from '@nestjs/graphql'

import { Gender } from '@prisma/client'

registerEnumType(Gender, {
  name: 'Gender',
})

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field(() => Date)
  createdAt: Date

  @Field()
  name: string

  @Field(() => [Pet], { nullable: true })
  pets?: Pet[]
}
@ObjectType()
export class Pet {
  @Field(() => ID)
  id: string

  @Field()
  serialNumber: string

  @Field()
  name: string

  @Field(() => Gender)
  gender: Gender

  @Field()
  isAlive: boolean

  @Field(() => Date)
  createdAt: Date

  @Field({ nullable: true })
  color?: string

  @Field(() => Date, { nullable: true })
  birthday?: Date

  @Field({ nullable: true })
  image?: string

  @Field(() => User, { nullable: true })
  user?: User

  @Field(() => [Vaccination], { nullable: true })
  vaccinations?: Vaccination[]

  @Field(() => [Deworming], { nullable: true })
  dewormings?: Deworming[]

  @Field(() => [Surgery], { nullable: true })
  surgeries?: Surgery[]

  @Field(() => [Medicine], { nullable: true })
  medicines?: Medicine[]

  @Field(() => [MedicalFood], { nullable: true })
  medicalFoods?: MedicalFood[]
}

@ObjectType()
export class Hospital {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  address: string

  @Field()
  city: string

  @Field()
  latitude: string

  @Field()
  longitude: string

  @Field()
  phoneNumber: string

  @Field()
  postcode: string

  @Field({ nullable: true })
  website?: string

  @Field(() => [Vaccination], { nullable: true })
  vaccinations?: Vaccination[]

  @Field(() => [Surgery], { nullable: true })
  surgeries?: Surgery[]

  @Field(() => [Deworming], { nullable: true })
  dewormings?: Deworming[]
}

@ObjectType()
export class Vaccination {
  @Field(() => Int)
  id: number

  @Field(() => Date)
  date: Date

  @Field(() => Hospital, { nullable: true })
  hospital?: Hospital

  @Field(() => Pet, { nullable: true })
  pet?: Pet
}

@ObjectType()
export class Surgery {
  @Field(() => ID)
  id: number

  @Field(() => Date)
  date: Date

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field(() => Hospital, { nullable: true })
  hospital?: Hospital

  @Field(() => Pet, { nullable: true })
  pet?: Pet
}

@ObjectType()
export class Deworming {
  @Field(() => ID)
  id: number

  @Field(() => Date)
  date: Date

  @Field(() => Hospital, { nullable: true })
  hospital?: Hospital

  @Field(() => Pet, { nullable: true })
  pet?: Pet
}

@ObjectType()
export class Medicine {
  @Field(() => ID)
  id: number

  @Field()
  name: string

  @Field(() => Pet, { nullable: true })
  pet?: Pet
}

@ObjectType()
export class Species {
  @Field(() => ID)
  id: number

  @Field()
  name: string

  @Field(() => [Breed], { nullable: true })
  breeds?: Breed[]

  @Field(() => [MedicalFood], { nullable: true })
  medicalFoods?: MedicalFood[]
}

@ObjectType()
export class Breed {
  @Field(() => ID)
  id: number

  @Field()
  name: string

  @Field(() => Species, { nullable: true })
  species?: Species

  @Field(() => [Pet], { nullable: true })
  pets?: Pet[]
}

@ObjectType()
export class Company {
  @Field(() => ID)
  id: number

  @Field()
  name: string

  @Field(() => [MedicalFood], { nullable: true })
  medicalFoods?: MedicalFood[]
}

@ObjectType()
export class MedicalFoodType {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => [MedicalFood], { nullable: true })
  medicalFoods?: MedicalFood[]
}

@ObjectType()
export class MedicalFood {
  @Field(() => ID)
  id: number

  @Field(() => Species, { nullable: true })
  species?: Species

  @Field(() => MedicalFoodType, { nullable: true })
  type?: MedicalFoodType

  @Field(() => Company, { nullable: true })
  company?: Company

  @Field(() => Pet, { nullable: true })
  pet?: Pet
}

@InputType()
export class UserCreateInput {
  @Field(() => ID, { nullable: true })
  id?: string

  @Field()
  name: string
}
