<script lang="ts">
	interface InfoCardProps {
		title: string;
		text: string;
		image: string;
	}
	export let data: InfoCardProps;
</script>

<!-- shiny glass morphic card with text  on top (with blurred glass bg) and image  behind using tailwind -->

<div class="flex flex-col items-center justify-center">
	<div class="relative ">
		<div
			class="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg "
			style="background-image: url({data.image})"
		/>
		<div
			class="dark:bg-black dark:bg-opacity-50 bg-purple-700 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-lg p-10  border-gray-300 border-opacity-60 border-2 border-solid"
		>
			<h1 class="dark:text-white text-black text-4xl font-bold">{data.title}</h1>
			<p class="dark:text-white text-black text-left">{data.text}</p>
		</div>
	</div>
</div>
