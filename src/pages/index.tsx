/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { walk } from '../lib/walk'

//画像の枚数(??.jpegにおける??の最大値)
const numOfPicture = 47

const Home: NextPage = () => {
  const [randomArray, setRandomArray] = useState<number[]>([])
  const [selectedArray, setSelectedArray] = useState<number[]>([])
  const [click, setClick] = useState(false)

  const intRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const random = (max: number): void => {
    var randoms: number[] = []
    var i = 1

    for (i; i <= 9; i++) {
      while (true) {
        var tmp = intRandom(1, max)
        if (!randoms.includes(tmp)) {
          randoms.push(tmp)
          break
        }
      }
    }
    console.log(randoms)
    console.log(randoms.length)
    setRandomArray(randoms)
  }

  useEffect(() => {
    random(numOfPicture)
  }, [])
  return (
    <div className="mt-4 mb-10 ">
      <p className="my-4 text-3xl font-bold text-center">
        横断歩道を選んでください
      </p>
      <div className="grid justify-center grid-cols-3 gap-4 mx-auto  w-40rem">
        {randomArray.map((num: number, index: number) => {
          return (
            <div key={num} className="">
              <img
                id={index.toString()}
                src={`/picture/${num}.jpeg`}
                onClick={() => {
                  if (!selectedArray.includes(num))
                    setSelectedArray((array) => [...array, num])
                }}
                className={` w-96 mx-auto transform hover:scale-110 duration-200 cursor-pointer ${
                  selectedArray.includes(num) ? 'opacity-50' : ''
                }
                ${
                  click
                    ? walk.includes(num)
                      ? 'border-8 border-blue-600'
                      : ' border-8 border-red-600'
                    : ''
                }
                `}
                alt=""
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mt-4 ">
        <button
          onClick={() => {
            setClick(true)
          }}
          className="p-4 font-bold text-white bg-blue-400 rounded-full"
        >
          終了する
        </button>
      </div>
    </div>
  )
}

export default Home
