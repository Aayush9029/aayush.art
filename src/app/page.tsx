import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='p-6'>

      {/* spacing */}

      <div className="grid auto-rows-[200px] grid-cols-3 gap-4 md:w-[700px] lg:w-[700px]">
        <div className=" col-span-2 rounded-xl gradient-border bg-neutral-100 p-4 dark:bg-neutral-900 animate-wave hover:shadow-orange-800 shadow-2xl">
          <p className='block '>
            <span className='fit p-2 ' >👋</span>
            <h3 className='inline text-lg tracking-wide text-orange-300 dark:text-orange-200 '>
              Hello, People call me
            </h3>
          </p>

          <h1 className="text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-orange-400 ">
            Aayush Pokharel
          </h1>

          {/* <h3 className='text-sm text-white absolute top-2 right-2 p-1 bg-green-600 rounded-lg px-4 bg-opacity-80 border-green-500 border-2'>
            Open to <b>Work</b>
          </h3> */}

        </div>

        <div className="relative col-span-1 rounded-xl p-4 hover:shadow-blue-800 shadow-2xl bg-[url('/img/map-dark.png')] bg-cover border-2 border-blue-400">

          <span className="absolute flex h-4 w-4 right-4 top-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-85"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-300"></span>
          </span>
          <h1 className='text-[30px]'>🇨🇦</h1>
          <h3 className='inline text-xl  text-white '>
            I am based in Toronto.
          </h3>
          <h3 className='text-sm text-white absolute bottom-4 p-1 bg-blue-600 rounded-lg px-4'>
            Open to relocate
          </h3>

        </div>


        <div className="relative col-span-2 rounded-xl p-4  hover:shadow-gray-600 shadow-xl bg-[url('/img/github-banner.png')] bg-cover">
          <h1 className='text-[30px]'>◉</h1>
          <h3 className='inline text-xl  text-white '>
            I push most of my work to github. It contains my projects and contributions to open source.
          </h3>
          <h3 className='text-sm font-semibold text-white absolute bottom-4 p-1 bg-black rounded-lg px-4'>
            github.com/Aayush9029
          </h3>
        </div>

        <div className="relative col-span-1 rounded-xl p-4  hover:shadow-black-600 shadow-2xl bg-gradient-to-tr from-gray-200 to-gray-500">
          <h1 className='text-[30px]'>👨‍💻</h1>
          <h3 className='inline text-xl  text-black '>
            I prefer to be in person, but I&apos;m comfortable with remote work.
          </h3>
        </div>


        <div className="relative col-span-2 rounded-xl p-4  hover:shadow-blue-600 shadow-2xl bg-gradient-to-tr from-blue-600 to-blue-900">
          <h1 className='text-[30px]'></h1>
          <h3 className='inline text-xl  text-white '>
            I&apos;ve published several apps to the Apple App Store.
          </h3>
          <h3 className='text-sm font-semibold text-blue-600 absolute bottom-4 p-1 bg-white rounded-lg px-4'>
            My App Store Page
          </h3>
        </div>

        <div className="relative col-span-1 rounded-xl p-4  hover:shadow-red-600 shadow-2xl bg-gradient-to-tr from-red-600 to-red-900">
          <h1 className='text-[30px]'></h1>
          <h3 className='inline text-xl  text-white '>
            I love building things for the community.
          </h3>
          <h3 className='text-sm font-semibold text-white-600 absolute bottom-4 p-1 bg-black rounded-lg px-4'>
            Raycast Store
          </h3>
        </div>

        <div className="relative col-span-1 rounded-xl p-4  hover:shadow-sky-600 shadow-2xl bg-gradient-to-tr from-sky-500 to-sky-700">
          <h1 className='text-[30px]'>📧</h1>
          <h3 className='inline text-xl  text-white '>
            Want to say hi? I&apos;m always up for a chat.
          </h3>
          <h3 className='text-sm font-semibold text-sky-700 absolute bottom-4 p-1 bg-white rounded-lg px-4'>
            Email me
          </h3>
        </div>


        <div className="relative col-span-2 rounded-xl p-4  hover:shadow-pink-800 shadow-xl bg-gradient-to-tr from-pink-800 to-pink-900">
          <h1 className='text-[30px]'>📱</h1>
          <h3 className='inline text-xl  text-white '>
            Here are most of my apps. I&apos;ve deployed so far.
          </h3>
          <h3 className='text-sm font-semibold text-pink-600 absolute bottom-4 p-1 bg-white rounded-lg px-4'>
            apps.aayush.art
          </h3>
        </div>



      </div>


    </main>
  )
}
