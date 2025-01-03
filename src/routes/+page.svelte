<script lang="ts">
	import { onMount } from 'svelte';
	import Globe from 'globe.gl';
	import * as d3 from 'd3';
	import { csvParse } from 'd3-dsv';
	import GoldNugget from '$lib/GoldNugget.svelte';

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
<main
	style="position: relative; z-index: 2; padding: 20px; color: white; text-align: center;"
></main>
<GoldNugget />
<h1 class="squids absolute bottom-0 left-0 p-3 text-9xl text-white">PHP TOKEN</h1>

<!-- <main style="position: relative; z-index: 2; padding: 20px; color: white; text-align: center;">
	<h1 class="space-age text-9xl">PHP TOKEN ORIGIN STORY</h1>

	<section style="margin-top: 30px;">
		<h2 style="font-size: 2rem; text-transform: uppercase;">Mint Details</h2>
		<p>
			<strong>Original Mint:</strong> June 20<sup>th</sup>, 2020 (Block Height: 256436)<br />
			<a href="#" style="color: #3cf; text-decoration: underline;">Mint Transaction</a><br />
			<strong>Token ID:</strong>
			<a href="#" style="color: #3cf; text-decoration: underline;">
				34d449dc84a27d0f8fb2166d415a7223604f6426fb2d83ee099f2312182d575d
			</a>
		</p>
	</section>

	<section style="margin-top: 20px;">
		<h2 style="font-size: 2rem; text-transform: uppercase;">Token Information</h2>
		<p>
			<strong>1 Billion PHP Tokens Created</strong><br />
			<strong>Registers:</strong><br />
			R4 = “PHP”<br />
			R5 = Philippine Pesos<br />
			R6 = 8 (decimals)
		</p>
	</section>

	<section style="margin-top: 20px;">
		<h2 style="font-size: 2rem; text-transform: uppercase;">Wallet Observations</h2>
		<p>
			Owner (AFK?)<br />
			- Purchased/transferred ERG from Hotbit (CEX) on June 17, 2020<br />
			- Created PHP Token on June 20, 2020<br />
			- Sent ERG back to Hotbit on August 29<sup>th</sup><br />
			- AFK wallet, leaving PHP behind without sufficient ERG to cover rent payment.
		</p>
	</section>

	<section style="margin-top: 30px;">
		<h2 style="font-size: 2rem; text-transform: uppercase;">Storage Rent Claim</h2>
		<p>
			<strong>Date:</strong> September 20<sup>th</sup>, 2024<br />
			<strong>Transaction ID:</strong>
			<a href="#" style="color: #3cf; text-decoration: underline;">
				0a9bba72293377aee6989204c709da76011e3c26273325465cae9186dbb6df80
			</a>
		</p>
		<p>
			<strong>Details:</strong><br />
			1. PHP Box contained 0.0011 ERG and PHP Token. Insufficient ERG, entire box claimed.<br />
			2. Another Wallet had 956.18151291 ERG, thus 0.1 ERG rent was claimed.
		</p>
	</section>

	<section style="margin-top: 30px;">
		<h2 style="font-size: 2rem; text-transform: uppercase;">Storage Rent FAQs</h2>
		<p>
			<strong>Purpose:</strong> Storage rent incentivizes active participation by charging a small fee every 4 years for unspent UTXOs.<br />
			<strong>Fee:</strong> 0.14 ERG every 4 years per box. If insufficient funds, miners can claim other assets.<br />
			<strong>Solution:</strong> Consolidate using a mobile wallet or Nautilus.
		</p>
	</section>

	<img src="/Ergonaut.png" alt="Ergonaut" style="margin-top: 20px; max-width: 100px; display: block; margin-left: auto; margin-right: auto;" />
</main> -->

<style>
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
