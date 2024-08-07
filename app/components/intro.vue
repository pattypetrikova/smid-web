<template>
	<div class="section">
		<div class="row">
			<div class="intro__column column">
				<partials-image
					src="intro.jpg"
					alt="Japan"
				/>
			</div>

			<div class="intro__column column">
				<h2 class="section__title section__title--small">
					Úvodem
				</h2>

				<div class="section__perex section__perex--small">
					<p>
						Our webpage composable gives you a reactive way to detect device type.Our webpage composable gives you a reactive way to
						detect device type. Our webpage composable gives you a reactive way to detect device type.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Intro'
	};
</script>

<style scoped lang="scss">
	.intro {
		&__column {
			@include flex-column(12);

			@include breakpoint(md up) {
				@include flex-column(6);
			}
		}
	}
</style>
