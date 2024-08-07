<template>
	<div class="intro">
		<div class="intro__inner">
			<div class="intro__wrap">
				<div class="intro__bg" />
				<div class="intro__title-wrap">
					<p class="intro__subtitle">
						Advokátní kancelář
					</p>
					<h1 class="intro__title">
						DAVID ŠMÍD
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.intro {
	position: relative;
	height: rem(700);

	&__inner {
		position: relative;
	}

	&__title {
		@include typo(d1);
	}

	&__subtitle {
		@include typo(d3);

		text-align: center;
		font-weight: 300;
		font-size: rem(24);
		margin-bottom: rem(20);
	}

	&__bg {
		width: 100vw;
		height: rem(700);
		overflow: hidden;
		background: url('/images/intro-desktop.jpg');
		background-size: cover;
	}

	&__wrap {
		position: absolute;
		top: -80px;
		height: rem(700);

		// ::after {
		//	position: absolute;
		//	display: block;
		//	width: 100%;
		//	height: rem(150);
		//	margin-top: rem(-150);
		//	content: '';
		//	background: linear-gradient(0deg, rgba(255 255 255 / 100%) 0%, rgba(255 255 255 / 0%) 100%);
		// }
	}

	&__title-wrap {
		position: absolute;
		margin: auto;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $color-white;
	}
}

</style>
