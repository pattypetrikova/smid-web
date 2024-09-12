<template>
	<div class="services section--bg">
		<div class="row">
			<div class="column services__wrap">
				<h2 class="section__title services__title">
					advokátní služby
				</h2>
			</div>
		</div>

		<div class="row">
			<div class="services__column">
				<div v-aos="['animate__fadeIn']" class="services__perex" data-aos-delay="0.3s" data-aos-duration="1s">
					<svg-icon class="services__icon" />
					<h3 class="services__subtitle">
						Trestní právo
					</h3>
					<p class="services__description">
						Our webpage composable gives you a reactive way to detect device type.
					</p>
				</div>
			</div>

			<div class="services__column">
				<div v-aos="['animate__fadeIn']" class="services__perex" data-aos-delay="0.6s" data-aos-duration="1s">
					<svg-icon class="services__icon" />
					<h3 class="services__subtitle">
						Smlouvy
					</h3>
					<p class="services__description">
						Our webpage composable gives you a reactive way to detect device type.
					</p>
				</div>
			</div>

			<div class="services__column">
				<div v-aos="['animate__fadeIn']" class="services__perex" data-aos-delay="0.9s" data-aos-duration="1s">
					<svg-icon class="services__icon" />
					<h3 class="services__subtitle">
						Dědické právo
					</h3>
					<p class="services__description">
						Our webpage composable gives you a reactive way to detect device type.Our webpage composable gives you a reactive
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
		width: calc(100vw);
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

		@include breakpoint(sm up) {
			width: calc(100vw - 17px);
		}

		&__column {
			@include flex-column(12);

			justify-content: center;

			@include breakpoint(sm up) {
				@include flex-column(6);
			}

			@include breakpoint(lg up) {
				@include flex-column(4);
			}

			z-index: 50;
		}

		&__description {
			margin-top: 0;

			@include breakpoint(md up) {
				margin-top: rem(10);
			}
		}

		&__perex {
			max-width: rem(300);
			margin: auto ;
		}

		&__wrap {
			display: flex;
			justify-content: center;
		}

		&__title {
			max-width: fit-content;
		}

		&__subtitle {
			@include typo(d3);
		}

		&__icon {
			max-width: rem(50);
			margin-bottom: rem(20);
			margin-top: rem(83);
		}
	}

</style>
