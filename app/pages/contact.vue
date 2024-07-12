<template>
	<div class="contact page">
		<div class="section">
			<div class="row">
				<div class="column">
					<h1 class="contact__title section__title">
						Contact
					</h1>

					<p
						class="contact__perex section__perex"
						v-html="$helpers.addNbsp('Hey, this is a contact page. You can use it to display contact information or a contact form.')"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const {$meta} = useNuxtApp();

	$meta.setMetaData({
		title: 'Contact',
		description: 'Contact us for more information or to get in touch with us'
	});
</script>

<style lang="scss" scoped>
	.contact {
		&__title {
			@include typo(d1);
		}
	}
</style>
