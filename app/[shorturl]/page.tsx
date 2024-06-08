import prisma from '@/libs/prisma';
import React from 'react';
import RedirectLink from './_redirect-link';
import { notFound, permanentRedirect } from 'next/navigation';

const getLink = async (shorturl: string) => {
  'use server';
  const link = await prisma.link.findUnique({
    where: {
      shortUrl: shorturl,
    },
  });
  if (link) {
    await prisma.link.update({
      where: {
        shortUrl: shorturl,
      },
      data: {
        visits: {
          increment: 1,
        },
      },
    });
  }

  return link;
};

const Page = async ({ params }: { params: { shorturl: string } }) => {
  const link = await getLink(params.shorturl);

  return (
    <section>
      <RedirectLink link={link} />
    </section>
  );
};

export default Page;
