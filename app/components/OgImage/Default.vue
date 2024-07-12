<!-- Styles have to be inlined for share image to be rendered properly. -->

<template>
	<div
		:style="{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			width: '100%',
			height: '100%',
			padding: '64px 48px',
			backgroundImage: 'url(/share-image.png)'
		}"
	>
		<h1
			:style="{
				margin: 0,
				color: 'white',
				fontSize: '64px',
				fontWeight: 'bold'
			}"
		>
			{{ title }}
		</h1>

		<p
			:style="{
				color: 'white',
				fontSize: '24px',
				fontWeight: 'bold'
			}"
		>
			{{ siteName }}
		</p>
	</div>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			required: true
		},
		siteName: {
			type: String,
			required: true
		}
	});
</script>
