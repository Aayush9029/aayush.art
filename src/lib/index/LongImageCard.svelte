
<script lang="ts">
    interface LongImageCardProps {
        title: string;
        text: string;
        imageName: string;
        url: string;
    }
    export let data: LongImageCardProps;

    let image = `images/main/icons/512w/${data.imageName}`;
    let thumb = `images/main/icons/16w/${data.imageName}`;

</script>

<!-- shiny glass morphic card with text  on top (with blurred glass bg) and image  behind using tailwind -->


<!-- css grid 2x1 -->

<a class="flex justify-center text-center sm:mt-6" href={data.url}>
    <div class="relative">
            <div class="absolute inset-0 top-10">
            <img src={thumb} alt={data.title} class="w-64"/>
        </div>

        <div class=" backdrop-filter backdrop-blur-[64px] rounded-3xl shadow-lg border-gray-300 border-opacity-20 border-2 border-solid py-4 hover:backdrop-blur-[128px] hover:border-opacity-80 transition-all">
            <img src={image} alt={data.title} class="w-40 mx-auto"/>
            <h1 class="dark:text-white text-black text-2xl font-bold">{data.title}</h1>
            <p class="dark:text-gray-500 text-black  p-6">{data.text}</p>
        </div>
    </div>
</a>
