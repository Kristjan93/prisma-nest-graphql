import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User, UserCreateInput } from './user.entity'
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
  async createUserMutation(@Args('userData') userData: UserCreateInput) {
    return this.userService.create(userData)
  }
}
