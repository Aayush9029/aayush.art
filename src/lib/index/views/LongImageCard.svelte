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

<a class="flex justify-center text-center" href={data.url}>
	<div class="relative">
		<div class="absolute inset-0">
			<img src={thumb} alt={data.title} class="w-32" />
		</div>

		<div
			class=" backdrop-filter backdrop-blur-[128px] rounded-3xl shadow-lg border-gray-300 border-opacity-20 border-2 border-solid py-4 hover:border-opacity-80 transition-all h-48"
		>
			<img src={image} alt={data.title} class="w-20 mx-auto" />
			<h1 class="dark:text-white text-black text-2xl font-bold">{data.title}</h1>
			<p class="dark:text-gray-300 text-black px-4 py-2">{data.text}</p>
		</div>
	</div>
</a>
