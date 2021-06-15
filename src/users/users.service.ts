import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User } from './user.entity'

import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(userWhereUniqueInput: Prisma.userWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    })
  }
  async create(name: string): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name: name,
      },
    })

    return user
  }

  async users(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }
}
