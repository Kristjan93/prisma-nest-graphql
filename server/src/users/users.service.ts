import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User, UserCreateInput } from './user.entity'

import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        pets: {
          include: {
            breed: true,
            medicalFoods: true,
            surgeries: true,
            vaccinations: true,
            medicines: true,
            user: true,
            dewormings: true,
          },
        },
      },
    })

    return user
  }

  async create(userCreateInput: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: userCreateInput.name,
      },
    })
  }

  async update(userCreateInput: UserCreateInput): Promise<User> {
    return await this.prisma.user.update({
      where: { id: userCreateInput.id },
      data: {
        name: userCreateInput.name,
      },
    })
  }

  async users(): Promise<User[]> {
    return await this.prisma.user.findMany({
      include: {
        pets: {
          include: {
            breed: true,
            medicalFoods: {
              include: {
                type: true,
              },
            },
            surgeries: true,
            vaccinations: true,
            medicines: true,
            dewormings: true,
          },
        },
      },
    })
  }
}
