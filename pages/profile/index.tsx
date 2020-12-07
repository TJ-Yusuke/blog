import React from 'react';
import { Header } from 'components/organisms/header';
import { Footer } from 'components/organisms/footer';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import remark from 'remark';
import html from 'remark-html';
import { GetStaticProps } from 'next';

const Index = ({ data }) => {
  return (
    <div className="bg-gray-100 font-gothic leading-normal tracking-normal">
      <Header />
      <section className="pt-20 container mx-auto md:px-32 text-center">
        <Image
          src="/profile.jpg"
          width={200}
          height={200}
          quality={50}
          alt="profile"
          className="rounded-full max-w-full box-border z-auto"
        />
        <h1 className="text-center font-bold text-2xl">たがわゆうすけ</h1>
      </section>
      <section className="container w-80 mx-auto px-3 md:px-32">
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </section>
      <Footer />
    </div>
  );
};
export default Index;

async function getProfileData() {
  const filePath = path.join('posts/', 'profile.md');
  const content = fs.readFileSync(filePath, 'utf8');
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileData().catch((error) => {
    throw error;
  });
  return {
    props: {
      data,
    },
  };
};
