'use client';

import { Link } from '@prisma/client';
import React, { useEffect } from 'react';

const RedirectLink = ({ link }: { link: Link | null }) => {
  if (!link) {
    return (
      <div>
        <p>Link not found</p>
      </div>
    );
  }

  useEffect(() => {
    if (link) {
    //   window.location.hostname = link.url;
        window.location.href = link.url.includes('https://') ? link.url : `https://${link.url}`;
    }
  }, []);

  return (
    <div>
      <p>Redirecting to full url</p>
    </div>
  );
};

export default RedirectLink;
