<template>
	<div class="section">
		<div class="row">
			<div class="adress__column column">
				<h2 class="section__title section__title--small">
					Adresa
				</h2>

				<div class="section__perex section__perex--small">
					<p>
						Rumunská 12, Praha 2, 120 00
					</p>
				</div>
			</div>
			<div class="adress__column column">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9314.548482276155!2d14.45198801244776!3d50.09606514293016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a37f56ea29%3A0xf7ff64bb9dfe1d71!2zS8WZacW-w61rb3Zh!5e0!3m2!1scs!2scz!4v1722949493244!5m2!1scs!2scz" width="1200" height="330" style="border:0; min-width: 820px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
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
	&__column {
		@include flex-column(12);

		@include breakpoint(md up) {
			@include flex-column(6);
		}
	}
}
</style>
