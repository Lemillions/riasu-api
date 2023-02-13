import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.product.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.film.deleteMany({});
  await prisma.channel.deleteMany({});
  await prisma.genre.deleteMany({});

  await prisma.user.createMany({
    data: [
      {
        name: 'Usuario teste',
        username: 'Teste',
        email: 'teste@gmail.com',
        password: '123456',
      },
      {
        name: 'Marcos',
        username: 'Mvsantos',
        email: 'mvsantos2003@gmail.com',
        password: '123456',
      },
      {
        name: 'Admin',
        username: 'Admin',
        email: 'admin@gmail.com',
        password: '123456',
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'PRODUTO BASICO',
      },
      {
        name: 'PRODUTO MÉDIO',
      },
      {
        name: 'PRODUTO AVANÇADO',
      },
      {
        name: 'PRODUTO FAMILIA',
      },
    ],
  });

  const banner =
    'https://t.ctcdn.com.br/8Q_WlNjbkUhra-4MBBWOIzAo0g0=/512x288/smart/filters:format(webp)/i533291.png';
  await prisma.channel.createMany({
    data: [
      {
        name: 'Canal de teste 01',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 07',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 02',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 03',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 06',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 04',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 05',
        description: 'Canais de teste',
        src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        banner: banner,
      },
    ],
  });

  await prisma.film.createMany({
    data: [
      {
        name: 'Canal de teste 01',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 07',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 02',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 03',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 06',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 04',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
      {
        name: 'Canal de teste 05',
        description: 'Canais de teste',
        src: 'https://playertest.longtailvideo.com/adaptive/elephants_dream_v4/index.m3u8',
        banner: banner,
      },
    ],
  });

  await prisma.genre.createMany({
    data: [
      {
        name: 'Ação',
      },
      {
        name: 'Comedia',
      },
      {
        name: 'Drama',
      },
      {
        name: 'Esporte',
      },
      {
        name: 'Entretenimento',
      },
      {
        name: 'Noticias',
      },
      {
        name: 'Infantis',
      },
    ],
  });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
