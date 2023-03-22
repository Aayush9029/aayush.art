<script>
	import { Confetti } from 'svelte-confetti';

	import { aboutMe, imageCards, longCards } from './data';
	import ImageCard from './views/ImageCard.svelte';
	import InfoCard from './views/InfoCard.svelte';
	import LongImageCard from './views/LongImageCard.svelte';
</script>

<body class="dark:bg-black p-8">
	<InfoCard data={aboutMe} />
	<div class="flex flex-wrap justify-center gap-6 my-6">
		{#each longCards as card}
			<div>
				<LongImageCard data={card} />
				<Confetti size="5" iterationCount="5" delay={[0, 3500]} />
			</div>
		{/each}

		{#each imageCards as card}
			<ImageCard data={card} />
		{/each}
	</div>
</body>
