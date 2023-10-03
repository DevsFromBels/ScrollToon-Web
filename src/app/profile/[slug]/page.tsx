import React from "react";

interface IPage {
  params: {
    slug: string;
  }
}

function Page({ params }: IPage) {
  return <div>Profile of: {params.slug}</div>;
}

export default Page;
