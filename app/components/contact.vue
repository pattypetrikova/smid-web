<template>
	<div id="services" class="services section--bg">
		<div class="row">
			<div class="contact__column column">
				<h2 class="section__title">
					Kontakt
				</h2>
			</div>
		</div>

		<div class="row">
			<div class="contact__column" />
			<div class="contact__column">
				<div class="section__perex section__perex--small">
					<p>
						Neváhejte a kontaktujte nás! <br />
						+420 775 143 332 <br />
						+420 604 958 832 <br />
						info@cikr.cz
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

	.services {
		color: white;
		width: 100vw;
		height: rem(700);
		overflow: hidden;
		background: url('/images/contact.jpg');
		background-size: cover;
		position: relative;

		// &::after {
		//	 position: absolute;
		//	 display: block;
		//	 width: 100%;
		//	 height: rem(350);
		//	 content: '';
		//	 bottom: 0;
		//	 background: linear-gradient(0deg, rgba(0 0 0 / 100%) 0%, rgba(0 0 0 / 0%) 100%);
		// }

		&__column {
			@include flex-column(12);

			@include breakpoint(md up) {
				@include flex-column(6);
			}
		}

		&__subtitle {
			@include typo(d3)
		}
	}
</style>
