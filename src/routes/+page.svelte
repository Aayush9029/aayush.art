<script lang="ts">
	import Main from '$lib/index/Main.svelte';
	import Projects from '../lib/projects/Projects.svelte';
	import Confetti from 'svelte-confetti';
</script>

<div
	style="
position: fixed;
top: -50px;
left: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
pointer-events: none;"
	class="blur-3xl"
>
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[20, 10000]}
		infinite
		duration="30000"
		amount="100"
		fallDistance="100vh"
		size="200"
	/>
</div>
<Main />
<Projects />
