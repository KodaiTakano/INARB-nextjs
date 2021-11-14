import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className=" text-center">
      <p>hello world</p>
      <img
        src="/picture/1.jpeg"
        className="mx-auto w-80 h-auto rounded-md"
        alt=""
      />
    </div>
  )
}

export default Home
