import React from "react";

interface IPage {
  params: {
    slug: string;
  }
}

function Page({ params }: IPage) {
  return <div>Anime of: {params.slug}</div>;
}

export default Page;
