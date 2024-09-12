<template>
	<div class="adress">
		<div class="adress__container">
			<div class="adress__column adress__column--space column ">
				<div class="adress__wrap">
					<h2 class="section__title">
						Adresa
					</h2>

					<div class="section__perex section__perex--large">
						<p>
							Rumunská 12, <br />
							Praha 2, <br />
							120 00
						</p>
					</div>
				</div>
			</div>
			<div class="adress__column column">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9314.548482276155!2d14.45198801244776!3d50.09606514293016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a37f56ea29%3A0xf7ff64bb9dfe1d71!2zS8WZacW-w61rb3Zh!5e0!3m2!1scs!2scz!4v1722949493244!5m2!1scs!2scz" width="100%" height="100%" min-height="400" style="border:0;min-height: 400px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Adress'
	};
</script>

<style scoped lang="scss">
.adress {
	&__container {
		display: flex;
		flex-direction: column;

		@include breakpoint(sm up) {
			flex-direction: row;
		}
	}

	&__column {
		&--space {
			padding: rem(0) rem(15);
		}

		@include breakpoint(sm up) {
			@include flex-column(6);

			display: flex;
			justify-content: end;
		}
	}

	&__wrap {
		margin-top: spacer(lg);
		margin-bottom: spacer(lg);

		@include breakpoint (sm up) {
			width: rem(300);
		}

		@include breakpoint (md up) {
			margin-top: spacer(xl);
			margin-bottom: spacer(xl);
			width: rem(550);
		}

		@include breakpoint (lg up) {
			margin-top: rem(100);
			margin-bottom:  rem(300);
		}
	}
}
</style>
