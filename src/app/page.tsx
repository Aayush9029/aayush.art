"use client";

import { UnifiedCard } from '../components/UnifiedCard';
import { GradientCard } from '../components/GradientCard';
import './animations.css';

export default function Home() {
  return (
    <main className="p-6 sm:p-8 md:p-12 lg:p-16 min-h-screen bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-full md:w-[800px] lg:w-[1000px]">
        {/* Intro Card */}
        <GradientCard
          className="col-span-2 min-h-[200px]"
          animationDelay={100}
        >
          <div className="flex flex-col justify-center h-full space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <h3 className="text-lg font-medium tracking-widest bg-gradient-to-r from-blue-100 to-teal-500 text-transparent bg-clip-text">
                Welcome to my digital realm
              </h3>
            </div>
            <h1 className="text-5xl sm:text-4xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-teal-200">
                Aayush Pokharel
              </span>
            </h1>
          </div>
        </GradientCard>

        {/* Location Card */}
        <UnifiedCard
          backgroundUrl="/img/toronto.png"
          icon={{ src: "/img/canada.png" }}
          title="Based in Toronto, crafting digital experiences that push the boundaries of what's possible."
          className="col-span-2"
          animationDelay={200}
        />

        {/* GitHub Card */}
        <UnifiedCard
          backgroundUrl="/img/github-banner.png"
          icon={{ src: "/img/github-logo.png" }}
          title="Architecting the future through code. My GitHub is a canvas of innovation and open-source contributions."
          footerText="github.com/Aayush9029"
          footerLink="https://github.com/Aayush9029"
          className="col-span-2"
          animationDelay={300}
        />

        {/* Rest of the cards following the same pattern */}
        <UnifiedCard
          backgroundUrl="/img/raycast.png"
          icon={{ src: "/img/raycast-icon.png" }}
          title="Pioneering productivity with Raycast extensions that transform everyday workflows into seamless experiences."
          footerText="raycast.com/Aayush9029"
          footerLink="https://www.raycast.com/Aayush9029"
          className="col-span-2"
          animationDelay={400}
        />

        <UnifiedCard
          backgroundUrl="/img/appstore-banner.png"
          icon={{ src: "/img/apple.png" }}
          title="Crafting exceptional iOS experiences that redefine mobile innovation."
          footerText="My App Store Page"
          footerLink="https://apps.apple.com/ca/developer/aayush-pokharel/id1532440924"
          className="col-span-2"
          animationDelay={500}
        />

        <UnifiedCard
          backgroundUrl="/img/apps.png"
          icon={{ src: "/img/apple.png" }}
          title="Explore my digital playground - a collection of web applications that challenge the status quo."
          footerText="apps.aayush.art"
          footerLink="https://apps.aayush.art"
          className="col-span-2"
          animationDelay={600}
        />

        <UnifiedCard
          backgroundUrl="/img/email.png"
          icon={{ src: "/img/apple.png" }}
          title="Let's collaborate on something extraordinary. Drop me a line - I'm always excited to discuss new possibilities."
          footerText="Email Me"
          footerLink="mailto:hi@aayush.art"
          className="lg:col-span-2 md:col-span-2"
          animationDelay={650}
        />

        <UnifiedCard
          className="lg:col-span-1 md:col-span-1 col-span-1 landscape:hidden"
          animationDelay={750}
        >
          <h3 className="text-lg text-pink-100">
            Thanks for exploring my digital universe. May your code be bug-free and your coffee be strong.
          </h3>
        </UnifiedCard>
        <UnifiedCard
          className="lg:col-span-2 md:col-span-2 col-span-1"
          animationDelay={700}
        >
          <h1 className="text-[30px] text-pink-800">💫 = ∞</h1>
          <h3 className="text-xl text-pink-100">
            In pursuit of digital excellence, creating innovations that outlast time itself.
          </h3>
        </UnifiedCard>
      </div>
    </main>
  );
}