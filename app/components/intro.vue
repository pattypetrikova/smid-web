<template>
	<div class="section intro__section">
		<div class="row intro__row">
			<div class="intro__column--bigger column">
				<partials-image
					src="intro.jpg"
					alt="Japan"
				/>
			</div>

			<div class="intro__column column intro__text">
				<h2 class="section__title section__title--small">
					Úvodem
				</h2>

				<div class="section__perex">
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

</script>

<style scoped lang="scss">
	.intro {
		&__row {
			padding: 0;

			@include breakpoint(md up) {
				padding: initial;
			}
		}

		&__column {
			@include flex-column(12);

			@include breakpoint(md up) {
				@include flex-column(5);
			}

			&--bigger {
				@include flex-column(12);

				padding: 0 !important;
				order: 2;

				@include breakpoint(md up) {
					@include flex-column(7);

					order: -1;
				}
			}
		}

		&__section {
			margin-bottom: 0;

			@include breakpoint(md up) {
				margin-bottom: rem(100);
			}

			&__title {
				margin: auto;
				max-width: fit-content;
			}
		}

		&__text {
			padding: rem(0) rem(10) rem(50);

			@include breakpoint(md up) {
				background-color: $color-white;
				margin-left: -200px;
				margin-top: 100px;
				padding: rem(50) 0 rem(50) rem(60);
				z-index: 200;
			}
		}
	}
</style>
