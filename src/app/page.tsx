import Image from 'next/image'
import styles from './page.module.css'




export default function Home() {
  return (
    <main className='p-6 sm:p-8 md:p-12 lg:p-16 align-middle'>

      {/* spacing */}

      <div className="grid sm:auto-rows-[200px] md:auto-rows-[200px] lg:auto-rows-[220px]  auto-rows-[220px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-full md:w-[800px] lg:w-[1000px]">
        <div className="col-span-2  gradient-border p-4  hover:shadow-orange-800 shadow-lg animate-wave hover-border">
          <div className='block '>
            <span className='fit p-2' >👋</span>
            <h3 className='inline text-lg tracking-wide text-orange-300 dark:text-white '>
              Hello, People call me
            </h3>
          </div>

          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-orange-200 ">
            Aayush Pokharel
          </h1>

          <h3 className='text-sm text-white absolute top-4 right-6 p-1 bg-green-600 rounded-[32px] px-4 bg-opacity-40 border-green-500 border-2'>
            💼&nbsp; Open to <b>Work</b>
          </h3>

        </div>



        <LocationAppsComponent
          icon='🇨🇦'
          text='I currenly reside in toronto, where I thrive on transforming creative concepts into reality.'
          backgroundUrl='/img/toronto.png'
          bottomComponent={
            <h3 className='text-sm text-white absolute bottom-6 left-6 p-1 rounded-full px-4 border-2 border-white bg-black bg-opacity-10 backdrop-blur-md'>Open to relocate</h3>
          }
        />



        <GitHubAppStoreComponent
          backgroundUrl='/img/github-banner.png'
          iconUrl='/img/github-logo.png'
          title="My Github contains my projects and contributions to open source."
          description=''
          footerText='github.com/Aayush9029'
          footerLink='https://github.com/Aayush9029'
        />



        <GitHubAppStoreComponent
          backgroundUrl='/img/raycast.png'
          iconUrl='/img/raycast-icon.png'
          title='I love automating tasks building things for the community. Here are some of my Raycast Extensions.'
          description=''
          footerText='raycast.com/Aayush9029'
          footerLink='https://www.raycast.com/Aayush9029'
        />



        <GitHubAppStoreComponent
          backgroundUrl='/img/appstore-banner.png'
          iconUrl='/img/apple.png'
          title="I've published several apps to the Apple App Store."
          description=''
          footerText='My App Store Page'
          footerLink='https://apps.apple.com/ca/developer/aayush-pokharel/id1532440924'
        />

        {/* raycast */}



        <GitHubAppStoreComponent
          backgroundUrl='/img/apps.png'
          iconUrl=''
          title='I&apos;ve built several apps, here are few which have been deployed / published to the web.'
          description=''
          footerText='apps.aayush.art'
          footerLink='https://apps.aayush.art'
        />



        <div className={`${commonStyle} lg:col-span-2  md:col-span-2  hidden md:inline lg:inline`}>
          <h1 className='text-[30px] text-pink-800'>👨‍💻 = ❤️</h1>
          <h3 className='hidden text-xl  text-white md:inline lg:inline sm:inline'>
            I&apos;m comfortable with both in-person and remote work.
          </h3>
        </div>




        <MailComponent
          backgroundUrl='/img/email.png'
          text='Feel free to reach out to me via email. I am not active on other platforms.'
          footerText='Email Me'
          footerLink='mailto:'
        />




        <div className={`${commonStyle} lg:col-span-1 md:col-span-2  hidden md:inline lg:inline`}>

          <h3 className=' text-lg  text-pink-100 md:inline lg:inline sm:inline'>
            Thank you so much for visiting my website. I hope you have a great week ahead.
          </h3>
        </div>




      </div>


    </main>
  )
}


const commonStyle = "relative p-6 hover:shadow-xl shadow-xl bg-cover hover-border";




interface GitHubAppStoreProps {
  backgroundUrl: string;
  iconUrl?: string;
  title: string;
  description: string;
  footerText: string;
  footerLink: string;
}

const GitHubAppStoreComponent = ({ backgroundUrl, iconUrl, title, description, footerText, footerLink }: GitHubAppStoreProps) => (
  <a href={footerLink} target='_blank' className={`${commonStyle} col-span-2 hover:border-blue-400 hover:scale-[1.02]`} style={{ backgroundImage: `url('${backgroundUrl}')` }}>
    {iconUrl && <Image src={iconUrl} alt='icon' width={32} height={32} className='mb-2' />}
    <h3 className='inline text-xl text-white'>{title}</h3>
    <span className={`text-sm font-semibold absolute bottom-6 left-6 p-1  px-4 rounded-full hover:cursor-pointer bg-white text-black  `}>{footerText}</span>
  </a>
);


interface LocationAppsProps {
  icon: string;
  text: string;
  backgroundUrl: string;
  bottomComponent?: JSX.Element;
}
const LocationAppsComponent = ({ icon, text, backgroundUrl, bottomComponent }: LocationAppsProps) => (
  <div className={`${commonStyle} col-span-2`} style={{ backgroundImage: `url('${backgroundUrl}')` }}>
    <h1 className='text-[30px]'>{icon}</h1>
    <h3 className='inline text-xl text-white'>{text}</h3>
    {bottomComponent}
  </div>
);




interface MailRaycastProps {
  backgroundUrl: string;
  text: string;
  footerText: string;
  footerLink: string;
}



const MailComponent = ({ backgroundUrl, text, footerText, footerLink }: MailRaycastProps) => (
  <div className="lg:col-span-1  md:col-span-2 relative col-span-1 p-6 hover:shadow-xl shadow-2xl bg-cover hover-border" style={{ backgroundImage: `url('${backgroundUrl}')` }}>
    <h3 className='inline text-xl text-white'>{text}</h3>
    <a href={footerLink} target='_blank' className={`text-sm font-semibold absolute bottom-6 left-6 p-1  px-4 rounded-full hover:cursor-pointer bg-white text-black hover:bg-blue-200 `}>{footerText}</a>
  </div>
);



interface ComfortableCardProps {
  text: string;
}

const ComfortableCardComponent = ({ text }: ComfortableCardProps) => (
  <div className={`${commonStyle} col-span-1`} style={{ backgroundImage: `url('${backgroundUrl}')` }}>
    <h1 className='text-[30px] text-gray-800'>👨‍💻 + ☕ = ❤️</h1>
    <h3 className='inline text-xl text-black'>{text}</h3>
  </div>
);

