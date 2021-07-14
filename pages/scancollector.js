import Head from 'next/head'

const Home = () => {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>The White Flag Project - Scan Collector</title>
      </Head>

      <div className="mx-auto">
        <img className="rounded-tr-md rounded-tl-md h-48 w-full" src="/images/pexels-alex.jpg" />
      </div>

      <div className="bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech">
        <div className="flex-1 mb-5">
            <a className=" buttons" href="/">
                <p className="text-center text-sm">Back to Home</p>
            </a>
        </div>

        <div className="flex-1">
            <h2 className="text-gray-700 font-semibold">Scan Collector</h2>
        </div>


        <div className="flex flex-col items-stretch  mt-8 ">
        
        
          <a href="/" className="buttons">
            <h2 className="text-sm text-center text-gray-600">Scan QR</h2>
          </a>




        </div>

      </div>

    </div>
  )
}


export default Home