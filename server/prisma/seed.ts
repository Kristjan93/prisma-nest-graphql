// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// const main = async () => {
//   await prisma.company.upsert({
//     where: {
//       name: 'apple',
//     },
//     update: {
//       name: 'apple',
//     },
//     create: {
//       name: 'apple',
//     },
//   })

//   await prisma.hospital.upsert({
//     where: {
//       name: 'Dýralæknaþjónusta Suðurlands ehf',
//     },
//     update: {},
//     create: {
//       address: 'Stuðlum, 816 Ölfus',
//       city: 'Selfoss',
//       latitude: '0',
//       longitude: '0',
//       name: 'Dýralæknaþjónusta Suðurlands ehf',
//       phoneNumber: '0000000',
//       postcode: '816',
//     },
//   })

//   const species = await prisma.species.upsert({
//     where: {
//       name: 'dog',
//     },
//     update: {},
//     create: {
//       name: 'dog',
//     },
//   })

//   const brees_Bulldog = await prisma.breed.upsert({
//     where: {
//       name: 'Bulldog',
//     },
//     update: {},
//     create: {
//       name: 'Bulldog',
//       speciesId: species.id,
//     },
//   })

//   const brees_Pug = await prisma.breed.upsert({
//     where: {
//       name: 'Pug',
//     },
//     update: {},
//     create: {
//       name: 'Pug',
//       speciesId: species.id,
//     },
//   })

//   const userKp = await prisma.user.findFirst({
//     where: {
//       name: { equals: 'Kristjan' },
//     },
//   })

//   const user = await prisma.user.upsert({
//     where: {
//       id: userKp.id,
//     },
//     update: {},
//     create: {
//       name: 'Kristjan',
//     },
//   })

//   const pet = prisma.pet.upsert({
//     where: {
//       serialnumber: '5302697609',
//     },
//     update: {},
//     create: {
//       serialnumber: '5302697609',
//       name: 'Snati',
//       gender: 'MALE',
//       isAlive: true,
//       color: 'black',
//       breedId: brees_Bulldog.id,
//       userId: user.id,
//     },
//   })
// }

// // main()
// //   .catch((e) => {
// //     console.log(e)
// //     process.exit(1)
// //   })
// //   .finally(() => {
// //     prisma.$disconnect()
// //   })
