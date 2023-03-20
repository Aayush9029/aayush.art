<script lang="ts">
	export let project: {
		name: string;
		description: string;
		deprecated: boolean | false;
		recommended: boolean | false;
		link: string;
		thumb: string;
		tags: string[];
	};
</script>

<a
	href={project.link}
	class="relative h-48 w-full overflow-hidden rounded-xl border-2 border-solid border-gray-200 shadow hover:border-indigo-500"
>
	<!-- background -->

	<img class="h-full w-full object-cover blur-md " src={project.thumb} alt={project.name} />

	<!-- foreground -->
	<div
		class="absolute inset-0 flex h-full  w-full flex-col rounded-lg bg-black bg-opacity-75 p-4 text-white shadow-lg hover:bg-opacity-50"
	>
		<h1 class="text-2xl font-semibold">{project.name}</h1>
		<p class="text-left ">{project.description}</p>
		<!-- tags -->
		<div class="mt-4  flex">
			{#if project.deprecated}
				<span
					class="m-1 rounded-xl bg-red-400 bg-opacity-50 px-4 py-1 text-xs text-white	backdrop-blur-xl"
					>deprecated</span
				>
			{/if}
			{#if project.recommended}
				<span
					class="m-1 rounded-xl bg-green-400 bg-opacity-50 px-4 py-1 text-xs text-white	backdrop-blur-xl"
					>recommended</span
				>
			{/if}
			{#each project.tags as tag}
				<span
					class="m-1 rounded-xl bg-white bg-opacity-25 px-4 py-1 text-xs text-white	backdrop-blur-xl"
					>{tag}</span
				>
			{/each}
		</div>
	</div>
	<!-- open -->
</a>

<style lang="css">
	* {
		transition: 0.13s ease;
	}
</style>
