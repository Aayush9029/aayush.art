<script>
	import ImageCard from "./ImageCard.svelte";
    import InfoCard from "./InfoCard.svelte";
	import LongImageCard from "./LongImageCard.svelte";

    let aboutMe = { 
        title: "About Me",
        text: "Hi, I'm Aayush Pokharel, currently completing (H,BSC)Computer Science in Toronto. I love bringing ideas to life and automating repetitive tasks. I've launched several iOS applications and shipped commercial products. I've worked on several opensource projects and I'm adept in maintaining linux-based systems. I value simple content structure, clean design and toughtful interactions.",
        image: "images/main/profile128w.png"
    }
    let appstoreLong = {
        title: "App Store",
        text: "Here are some of my iOS apps. I've built this using Swift, SwiftUI, AppKit and UIKit.",
        imageName: "appstore.png",
        url: "https://apps.apple.com/us/developer/aayush-pokharel/id1491000009"
    }
    let projectsLong = { 
        title: "Web Projects",
        text: "Here are some of my web projects. I've built this website using Svelte and TailwindCSS",
        imageName: "projects.png",
        url: "./projects"
    }

    let appstore = {
        title: "App Store",
        tooltip: "My iOS apps",
        imageName: "appstore.png",
        link: "https://apps.apple.com/us/developer/aayush-pokharel/id1491000009"
    }

    let github = {
        title: "Github",
        tooltip: "My Github profile",
        imageName: "github.png",
        link: "https://github.com/Aayush9029"
    }

    let linkedin = {
        title: "LinkedIn",
        tooltip: "My LinkedIn profile",
        imageName: "linkedin.png",
        link: "https://www.linkedin.com/in/aayush-pokharel-9b4b3b1b3/"
    }
    let raycast = {
        title: "Raycast",
        tooltip: "My Raycast scripts",
        imageName: "raycast.png",
        link: "https://www.raycast.com/Aayush9029"
    }

    let mail = {
        title: "Mail",
        tooltip: "My email address",
        imageName: "mail.png",
        link: "mailto:developer@aayush.art"
    }
    let pypi = {
        title: "PyPI",
        tooltip: "My PyPI profile",
        imageName: "pypi.png",
        link: "https://pypi.org/user/Aayush9029/"
    }
    let twitch = {
        title: "Twitch",
        tooltip: "My Twitch profile",
        imageName: "twitch.png",
        link: "https://www.twitch.tv/aayush9029"
    }

    let longCards = [appstoreLong, projectsLong];
    let imageCards = [twitch, github, linkedin, raycast, mail, pypi];

    
    </script>
<!-- Port Folio Main Page -->


<!-- grid auto flow -->

<body class="dark:bg-black p-16">


    <!-- flex grid one row on small two on large and md -->
    <InfoCard data={aboutMe}/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each longCards as card}
            <LongImageCard data={card}/>
        {/each}
        </div>
      
    <div class="my-12 flex flex-wrap justify-center gap-4 ">
        {#each imageCards as card}
            <ImageCard data={card}/>
        {/each}
    </div>

</body>