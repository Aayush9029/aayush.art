<script lang="ts">
    interface ImageCardProps {
        title: string;
        tooltip: string;
        imageName: string;
        link: string;
    }

    export let data: ImageCardProps;

    let image = `images/main/icons/512w/${data.imageName}`;
    let thumb = `images/main/icons/16w/${data.imageName}`;

</script>

<a class="flex justify-center text-center" href={data.link}>
    <div class="relative">
            <div class="absolute inset-0 top-10">
            <img src={thumb} alt={data.title} class="w-32"/>
        </div>

        <div class="backdrop-filter backdrop-blur-2xl rounded-2xl shadow-lg border-gray-300 border-opacity-20 border-2 border-solid py-4 h-48 w-48 hover:backdrop-blur-3xl hover:border-opacity-80 transition-all">
            <img src={image} alt={data.title} class="w-24 mx-auto"/>
            <h1 class="dark:text-white text-black text-2xl font-bold">{data.title}</h1>
            <p class="dark:text-gray-500 text-black">{data.tooltip}</p>
        </div>
    </div>
</a>
