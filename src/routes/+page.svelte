<script lang="ts">
	import { onMount } from 'svelte';
	import Globe from 'globe.gl';
	import * as d3 from 'd3';
	import { csvParse } from 'd3-dsv';
	import GoldNugget from '$lib/GoldNugget.svelte';
	import { GithubIcon, SendIcon } from 'lucide-svelte';

	let container: HTMLDivElement;

	onMount(() => {
		const world = Globe()(container)
			.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
			.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
			.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
			.hexBinPointWeight('pop')
			.hexAltitude((d) => d.sumWeight * 6e-8)
			.hexBinResolution(4)
			.hexTopColor((d) => weightColor(d.sumWeight))
			.hexSideColor((d) => weightColor(d.sumWeight))
			.hexBinMerge(true);

		world.controls().autoRotate = true;
		world.controls().autoRotateSpeed = 0.6;

		const handleResize = () => {
			world.width(window.innerWidth);
			world.height(window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd).domain([0, 1e7]);
</script>

<!-- Globe background -->
<div
	bind:this={container}
	style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;"
></div>

<!-- Transparent overlay to pass events through -->
<div
	style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		pointer-events: none;"
></div>

<!-- Page content -->
<div class="flex w-full items-center justify-between p-5">
	<div class="flex justify-center gap-2 text-yellow-400">
		<img src="nugget.png" alt="" style="width:50px" />
		<div class="squids text-4xl">PHP</div>
	</div>
	<div class="flex gap-4 pr-4 text-slate-400">
		<a
			href="https://github.com/SavonarolaLabs/php-token"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-yellow-400"
		>
			<GithubIcon class="h-6 w-6" />
		</a>
		<a
			href="https://t.me/sig_mining/34398"
			aria-label="Telegram"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-yellow-400"
		>
			<SendIcon class="h-6 w-6" />
		</a>
	</div>
</div>

<div class="absolute text-white" style="right:20px;width:300px;">
	<div style=" border-bottom:0.5px solid gray" class="text-slate-500">
		Generation Wealth Demurraged
	</div>
	<div class="text-xs text-slate-600">
		In the early years of the blockchain boom, a curious token emerged—a relic of wealth, ambition,
		and mystery. The PHP token, minted on June 20, 2020, was no ordinary cryptocurrency. It
		originated from a fabled discovery: a gold-laden asteroid dubbed "PHP," found drifting in the
		outer reaches of the asteroid belt. Legend has it that the asteroid's dazzling veins of gold not
		only captivated the imaginations of miners but also rewrote the meaning of generational wealth.
		The PHP asteroid's significance was enshrined in its tokenization. A billion PHP tokens were
		created, each representing a fractional claim to the asteroid’s immense mineral wealth. The
		owner, an enigmatic figure who briefly appeared on the blockchain radar, seemed destined for
		untold fortune. But their journey was shrouded in intrigue—they disappeared soon after
		transferring funds, leaving the PHP tokens orphaned in a wallet. As the years passed, the
		tokens' ties to the asteroid gave rise to folklore. With no active steward, PHP tokens became
		akin to buried treasure, their value fluctuating wildly as rumors of rediscovery ebbed and
		flowed. By September 2024, storage rent mechanisms brought the legend of PHP back to the
		forefront. The claimed box held only a whisper of its original promise, but whispers of the
		asteroid's wealth reignited curiosity. The PHP lore persists as a modern myth—a digital echo of
		humanity’s eternal pursuit of riches among the stars. The asteroid may remain out of reach, but
		its legacy endures, immortalized in blockchain history as the gold asteroid that promised—and
		still promises—generational wealth.
	</div>
</div>

<div class="absolute ml-5" style="bottom:200px;">
	<div
		class="font-mono text-sm text-green-500"
		style="width:300px; border-bottom: 0.5px solid white"
	>
		<div class="flex gap-2">
			<div class="w-100">R4:</div>
			<div>PHP</div>
		</div>
		<div class="flex gap-2">
			<div class="w-100">R5:</div>
			<div>Philippine Pesos</div>
		</div>

		<br />

		<div class="flex justify-between">
			<div class="w-100">created:</div>
			<div>June 20<sup>th</sup>, 2020</div>
		</div>
		<div class="flex justify-between">
			<div class="w-100">demurraged:</div>
			<div>September 20<sup>th</sup>, 2024</div>
		</div>
		<div class="mt-2 flex justify-between" style="height:5px;">
			<div style="border-left:0.5px solid white;"></div>
			<div style="border-left:0.5px solid white;"></div>
		</div>
	</div>

	<div class="h-20">
		<div class="h-full" style="border-left:0.5px solid white;margin-left:150px;"></div>
	</div>
	<GoldNugget />
</div>

<h1 class="squids absolute bottom-0 left-0 p-3 text-9xl text-slate-700">PHP TOKEN</h1>

<style>
	.w-100 {
		width: 97px;
		text-align: right;
	}

	@font-face {
		font-family: 'Space Age';
		src: url('/fonts/space-age.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.space-age {
		font-family: 'Space Age', sans-serif;
	}

	@font-face {
		font-family: 'Game Of Squids';
		src: url('/fonts/Game Of Squids.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.squids {
		font-family: 'Game Of Squids', sans-serif;
	}

	@font-face {
		font-family: 'Dune_Rise';
		src: url('/fonts/Dune_Rise.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.squids {
		font-family: 'Dune_Rise', sans-serif;
	}
</style>
