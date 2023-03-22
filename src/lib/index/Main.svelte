<script>
	import { Confetti } from 'svelte-confetti';

	import { aboutMe, imageCards, longCards } from './data';
	import ImageCard from './views/ImageCard.svelte';
	import InfoCard from './views/InfoCard.svelte';
	import LongImageCard from './views/LongImageCard.svelte';
</script>

<body class="dark:bg-black p-8">
	<InfoCard data={aboutMe} />
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
		{#each longCards as card}
			<LongImageCard data={card} />
		{/each}
	</div>

	<div class="flex flex-wrap justify-center gap-6 my-6">
		{#each imageCards as card}
			<div>
				<ImageCard data={card} />
				<Confetti size="5" iterationCount="5" delay={[0, 3500]} />
			</div>
		{/each}
	</div>
</body>
