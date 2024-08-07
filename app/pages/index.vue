<template>
	<div class="home page">
		<hero />

		<intro	/>

		<services	/>

		<adress />

		<contact />
	</div>
</template>

<script setup>
	const config = useRuntimeConfig();
	const webpage = useWebpage();
	const {x, y} = useMouse();
	const {$meta} = useNuxtApp();

	$meta.setMetaData({
		title: 'Home',
		description: 'Welcome to the new Nuxt 3 template! Check out the features.'
	});

	const data = reactive({
		accordions: [
			{
				title: 'Random title for accordion',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.'
			},
			{
				title: 'And yet another title',
				text: 'Dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.'
			}
		]
	});
</script>

<style lang="scss" scoped>
	.home {
		$this: &;

		&__row {
			& + #{$this}__row {
				margin-top: spacer(lg);

				@include breakpoint(sm up) {
					margin-top: spacer(xl);
				}
			}
		}

		&__column {
			@include flex-column(12);

			@include breakpoint(sm up) {
				@include flex-column(6);
			}

			& + #{$this}__column {
				margin-top: spacer(lg);

				@include breakpoint(sm up) {
					margin-top: 0;
				}
			}
		}

		&__accordion {
			margin-top: spacer(lg);
		}

		pre {
			tab-size: 4;
		}
	}
</style>
