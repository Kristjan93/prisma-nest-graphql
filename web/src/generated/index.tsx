import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Breed = {
  readonly __typename?: 'Breed';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly species?: Maybe<Species>;
  readonly pets?: Maybe<ReadonlyArray<Pet>>;
};

export type Company = {
  readonly __typename?: 'Company';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly medicalFoods?: Maybe<ReadonlyArray<MedicalFood>>;
};


export type Deworming = {
  readonly __typename?: 'Deworming';
  readonly id: Scalars['ID'];
  readonly date: Scalars['DateTime'];
  readonly hospital?: Maybe<Hospital>;
  readonly pet?: Maybe<Pet>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Hospital = {
  readonly __typename?: 'Hospital';
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly address: Scalars['String'];
  readonly city: Scalars['String'];
  readonly latitude: Scalars['String'];
  readonly longitude: Scalars['String'];
  readonly phoneNumber: Scalars['String'];
  readonly postcode: Scalars['String'];
  readonly website?: Maybe<Scalars['String']>;
  readonly vaccinations?: Maybe<ReadonlyArray<Vaccination>>;
  readonly surgeries?: Maybe<ReadonlyArray<Surgery>>;
  readonly dewormings?: Maybe<ReadonlyArray<Deworming>>;
};

export type MedicalFood = {
  readonly __typename?: 'MedicalFood';
  readonly id: Scalars['ID'];
  readonly species?: Maybe<Species>;
  readonly type?: Maybe<MedicalFoodType>;
  readonly company?: Maybe<Company>;
  readonly pet?: Maybe<Pet>;
};

export type MedicalFoodType = {
  readonly __typename?: 'MedicalFoodType';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly medicalFoods?: Maybe<ReadonlyArray<MedicalFood>>;
};

export type Medicine = {
  readonly __typename?: 'Medicine';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly pet?: Maybe<Pet>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly user: User;
};


export type MutationUserArgs = {
  userData: UserCreateInput;
};

export type Pet = {
  readonly __typename?: 'Pet';
  readonly id: Scalars['ID'];
  readonly serialNumber: Scalars['String'];
  readonly name: Scalars['String'];
  readonly gender: Gender;
  readonly isAlive: Scalars['Boolean'];
  readonly createdAt: Scalars['DateTime'];
  readonly color?: Maybe<Scalars['String']>;
  readonly birthday?: Maybe<Scalars['DateTime']>;
  readonly image?: Maybe<Scalars['String']>;
  readonly user?: Maybe<User>;
  readonly vaccinations?: Maybe<ReadonlyArray<Vaccination>>;
  readonly dewormings?: Maybe<ReadonlyArray<Deworming>>;
  readonly surgeries?: Maybe<ReadonlyArray<Surgery>>;
  readonly medicines?: Maybe<ReadonlyArray<Medicine>>;
  readonly medicalFoods?: Maybe<ReadonlyArray<MedicalFood>>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly users: ReadonlyArray<User>;
  readonly user: User;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Species = {
  readonly __typename?: 'Species';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly breeds?: Maybe<ReadonlyArray<Breed>>;
  readonly medicalFoods?: Maybe<ReadonlyArray<MedicalFood>>;
};

export type Surgery = {
  readonly __typename?: 'Surgery';
  readonly id: Scalars['ID'];
  readonly date: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly hospital?: Maybe<Hospital>;
  readonly pet?: Maybe<Pet>;
};

export type User = {
  readonly __typename?: 'User';
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly pets?: Maybe<ReadonlyArray<Pet>>;
};

export type UserCreateInput = {
  readonly name: Scalars['String'];
};

export type Vaccination = {
  readonly __typename?: 'Vaccination';
  readonly id: Scalars['Int'];
  readonly date: Scalars['DateTime'];
  readonly hospital?: Maybe<Hospital>;
  readonly pet?: Maybe<Pet>;
};

export type CreateUserMutationVariables = Exact<{
  userData: UserCreateInput;
}>;


export type CreateUserMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly user: (
    { readonly __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'createdAt'>
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { readonly __typename?: 'Query' }
  & { readonly users: ReadonlyArray<(
    { readonly __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'createdAt'>
    & { readonly pets?: Maybe<ReadonlyArray<(
      { readonly __typename?: 'Pet' }
      & Pick<Pet, 'id' | 'name' | 'serialNumber' | 'gender' | 'isAlive' | 'createdAt' | 'color' | 'birthday' | 'image'>
      & { readonly vaccinations?: Maybe<ReadonlyArray<(
        { readonly __typename?: 'Vaccination' }
        & Pick<Vaccination, 'id'>
      )>>, readonly dewormings?: Maybe<ReadonlyArray<(
        { readonly __typename?: 'Deworming' }
        & Pick<Deworming, 'id'>
      )>>, readonly surgeries?: Maybe<ReadonlyArray<(
        { readonly __typename?: 'Surgery' }
        & Pick<Surgery, 'id' | 'name' | 'description'>
      )>>, readonly medicines?: Maybe<ReadonlyArray<(
        { readonly __typename?: 'Medicine' }
        & Pick<Medicine, 'id' | 'name'>
      )>>, readonly medicalFoods?: Maybe<ReadonlyArray<(
        { readonly __typename?: 'MedicalFood' }
        & Pick<MedicalFood, 'id'>
        & { readonly type?: Maybe<(
          { readonly __typename?: 'MedicalFoodType' }
          & Pick<MedicalFoodType, 'name'>
        )> }
      )>> }
    )>> }
  )> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($userData: UserCreateInput!) {
  user(userData: $userData) {
    id
    name
    createdAt
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
    createdAt
    pets {
      id
      name
      serialNumber
      gender
      isAlive
      createdAt
      color
      birthday
      image
      vaccinations {
        id
      }
      dewormings {
        id
      }
      surgeries {
        id
        name
        description
      }
      medicines {
        id
        name
      }
      medicalFoods {
        id
        type {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;