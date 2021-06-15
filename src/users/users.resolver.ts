import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './user.entity'
import { UsersService } from './users.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.users()
  }

  @Query(() => User, { name: 'user' })
  async userQuery(@Args({ name: 'id' }) id: string) {
    return this.userService.user({ id })
  }

  @Mutation(() => User, { name: 'user' })
  async userMutation(@Args({ name: 'name' }) name: string) {
    return this.userService.create(name)
  }
}
