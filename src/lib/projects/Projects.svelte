<script lang="ts">
	// load projects.json locally

	import ProjectRow from './ProjectRow.svelte';
	import projects from './projects.json';
</script>

<div class="dark:bg-black dark:text-white flex h-full w-full flex-col items-center justify-center p-4">
	<h1 class="text-6xl font-bold  ">Projects</h1>
	<p class="text-center ">Here are some of my projects</p>
</div>

<div class="dark:bg-black grid grid-cols-1 gap-2 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
	{#each projects as project}
		<ProjectRow {project} />
	{/each}
</div>
