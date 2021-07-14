import Head from 'next/head'

const Home = () => {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>The White Flag Project</title>
      </Head>

      <div className="mx-auto">
        <img className="rounded-tr-md rounded-tl-md h-48 w-full" src="/images/pexels-alex.jpg" />
      </div>

      <div className="bg-white p-8 rounded-br-md rounded-bl-md mt-10">
        <h2 className="text-gray-700 font-semibold">Foodbanker Portal</h2>
        <br/>


        <div className="flex flex-col items-stretch  mt-8 ">

          <a href="/scancollector" className="buttons">
            <img className="buttonsImage" src="/images/qrcustomer.png"/>
            <h2 className="text-sm text-center text-gray-600 mt-4 ">Scan Collector</h2>
          </a>

          <br/>

          <a href="/" className="buttons">
            <img className="buttonsImage" src="/images/category.png"/>
            <h2 className="text-sm text-center text-gray-600 mt-4">Choose Category</h2>
          </a>


        </div>

      </div>

    </div>
  )
}


export default Home