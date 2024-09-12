<template>
	<div id="contact" class="contact section--bg">
		<div class="row">
			<div class="contact__column column">
				<h2 class="section__title">
					Kontakt
				</h2>
			</div>
			<div class="contact__column column ">
				<div class="section__perex section__perex">
					<h2 class="contact__name ">
						JUDr. David Šmíd, advokát
					</h2>
					<p v-aos="['animate__fadeIn']" data-aos-delay="0.3s" data-aos-duration=".5s">
						telefoní číslo: +420 775 143 332 <br />
					</p>
					<p v-aos="['animate__fadeIn']" data-aos-delay="0.3s" data-aos-duration=".5s">
						IČ: 07295413 DIČ: CZ07295413 <br />
					</p>
					<p v-aos="['animate__fadeIn']" data-aos-delay="0.3s" data-aos-duration=".5s">
						email: info@cikr.cz
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Contact'
	};
</script>

<style scoped lang="scss">

	.contact {
		color: white;
		width: calc(100vw);
		height: rem(400);
		overflow: hidden;
		background: url('/images/contact.jpg');
		background-size: cover;
		position: relative;

		@include breakpoint(sm up) {
			width: calc(100vw - 17px);
		}

		@include breakpoint(md up) {
			height: rem(500);
		}

		&__column {
			@include flex-column(12);

			@include breakpoint(md up) {
				@include flex-column(6);
			}
		}

		&__name {
			@include typo(d3)
		}

		&__subtitle {
			@include typo(d3)
		}
	}
</style>
