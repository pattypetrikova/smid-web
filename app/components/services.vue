<template>
	<div class="services section--bg">
		<div class="row">
			<div class="column">
				<h2 class="section__title">
					advokátní služby
				</h2>
			</div>
		</div>

		<div class="row">
			<div class="services__column">
				<div class="section__perex section__perex--small">
					<svg-icon class="services__icon" />
					<h3 class="services__subtitle">
						Trestní právo a přestupky
					</h3>
					<p>
						Our webpage composable gives you a reactive way to detect device type.Our webpage composable gives you a reactive way to
						detect device type. Our webpage composable gives you a reactive way to detect device type.
					</p>
				</div>
			</div>

			<div class="services__column">
				<div class="section__perex section__perex--small">
					<svg-icon class="services__icon" />
					<h3 class="services__subtitle">
						Smlouvy
					</h3>
					<p>
						Our webpage composable gives you a reactive way to detect device type.Our webpage composable gives you a reactive way to
						detect device type. Our webpage composable gives you a reactive way to detect device type.
					</p>
				</div>
			</div>

			<div class="services__column">
				<div class="section__perex section__perex--small">
					<svg-icon class="services__icon" />
					<h3 class="services__subtitle">
						Dědické právo
					</h3>
					<p>
						Our webpage composable gives you a reactive way to detect device type.Our webpage composable gives you a reactive way to
						detect device type. Our webpage composable gives you a reactive way to detect device type.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const SvgIcon = defineAsyncComponent(() => import('~/assets/svg/icon-services.svg'));

</script>

<style scoped lang="scss">

	.services {
		color: white;
		width: 100vw;
		height: rem(700);
		overflow: hidden;
		background: url('/images/services.jpg');
		background-size: cover;
		position: relative;

		&::after {
			position: absolute;
			display: block;
			width: 100%;
			height: rem(350);
			content: '';
			bottom: 0;
			background: linear-gradient(0deg, rgba(0 0 0 / 100%) 0%, rgba(0 0 0 / 0%) 100%);
		}

		&__column {
			@include flex-column(12);

			@include breakpoint(md up) {
				@include flex-column(6);
			}

			@include breakpoint(lg up) {
				@include flex-column(4);
			}
		}

		&__subtitle {
			@include typo(d3)
		}

		&__icon {
			max-width: rem(50);
		}
	}

</style>
