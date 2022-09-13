import Card from "../../components/Card";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Web3 React Template</title>
      </Head>
      <div className={'relative bg-blur bg-cover'}>
        <div className={'py-10 lg:py-20 px-4 sm:px-20 relative z-10'}>
          <section className={'flex flex-col xl:flex-row items-center xl:items-start justify-evenly mb-24 lg:mb-36'}>
            <section className="lg:w-3/5 w-full px-2 mb-2">
              <Card>
                <p>
                When you decide to start a web3 project with react, you have to configure and create
                many things from scratch.
                </p>
              </Card>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home