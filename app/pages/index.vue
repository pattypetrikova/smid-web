<template>
	<div class="home page">
		<div class="section">
			<div class="row">
				<div class="column">
					<h1 class="home__title section__title">
						Nuxt 3 Template from Dentsu
					</h1>

					<div class="home__perex section__perex">
						<p>
							Welcome to the new Nuxt 3 template! Check out the features:
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="section">
			<div class="row">
				<div class="home__column column">
					<h2 class="section__title section__title--small">
						VueUse
					</h2>

					<div class="section__perex section__perex--small">
						<p>
							Collection of Vue composition utilities,
							<br />
							see more in
							<a href="https://vueuse.org/">
								VueUse documentation
							</a>
						</p>
					</div>

					<pre :style="{whiteSpace: 'pre-line'}">
						Mouse position: {{ x }}, {{ y }}
					</pre>
				</div>

				<div class="home__column column">
					<h2 class="section__title section__title--small">
						Other examples
					</h2>

					<div class="section__perex section__perex--small">
						<p>Our webpage composable gives you a reactive way to detect device type.</p>
					</div>

					<pre :style="{whiteSpace: 'normal'}">
						{{ webpage }}
					</pre>

					<div class="section__perex section__perex--small">
						<p>And this is a button.</p>
					</div>

					<partials-button :to="$routes.path('page.contact')" type="primary">
						click
					</partials-button>

					<div class="section__perex section__perex--small">
						<p>
							That button uses routes plugin. You should use it too. Define routes in ~/config/routes.js
							and get them by using $routes.path('page.path.to.object')
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="section">
			<div class="home__row row">
				<div class="home__column column">
					<h2 class="section__title section__title--small">
						Optimized images
					</h2>

					<div class="section__perex section__perex--small">
						<p>
							Image component has possibility to use different images for different breakpoints.
							Use only retina sizes as regular size gets created automatically.
							Webp and avif formats are also generated automatically.
						</p>
					</div>
				</div>
			</div>

			<div class="home__row row">
				<div class="home__column column">
					<div class="section__perex section__perex--small">
						<h3>
							Simple usage
						</h3>

						<pre>
&lt;partials-image
	src=&quot;japan/japan-desktop.jpg&quot;
	alt=&quot;Japan&quot;
/&gt;
						</pre>

						<p>
							If you want to use the same image for all breakpoints, you can use the simple version.
							Default usage also automatically calculates the aspect ratio and generates the placeholder and turns on lazy loading.
						</p>
					</div>
				</div>

				<div class="home__column column">
					<partials-image
						src="japan/japan-desktop.jpg"
						alt="Japan"
					/>
				</div>
			</div>

			<div class="home__row row">
				<div class="home__column column">
					<div class="section__perex section__perex--small">
						<h3>
							Advanced usage
						</h3>

						<pre>
&lt;partials-image
	:src=&quot;{
		xxs: 'japan/japan-phone.jpg',
		sm: 'japan/japan-tablet.jpg',
		lg: 'japan/japan-desktop.jpg'
	}&quot;
	alt=&quot;Japan&quot;
	:lazy=&quot;true&quot;
	:keep-aspect-ratio=&quot;true&quot;
	:placeholder=&quot;true&quot;
/&gt;
						</pre>

						<p>
							If you need to use different images for different breakpoints, you can use the advanced version.
							Breakpoints are defined in config/index.js and must be the same as in variables.scss.
							Also if needed, you can turn off lazy loading, aspect ratio and/or placeholder.
						</p>
					</div>
				</div>

				<div class="home__column column">
					<partials-image
						:src="{
							xxs: 'japan/japan-phone.jpg',
							sm: 'japan/japan-tablet.jpg',
							lg: 'japan/japan-desktop.jpg'
						}"
						alt="Japan"
						:lazy="false"
						:keep-aspect-ratio="false"
						:placeholder="false"
					/>
				</div>
			</div>
		</div>

		<div class="section">
			<div class="row">
				<div class="column">
					<h2 class="section__title section__title--small">
						Accordion example
					</h2>

					<div class="section__perex section__perex--small">
						<p>For FAQs and such.</p>
					</div>

					<div class="home__accordion">
						<partials-accordion v-for="(accordion, index) in data.accordions" :key="index">
							<template #title>
								{{ accordion.title }}
							</template>

							<template #content>
								{{ accordion.text }}
							</template>
						</partials-accordion>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const config = useRuntimeConfig();
	const webpage = useWebpage();
	const {x, y} = useMouse();
	const {$meta} = useNuxtApp();

	$meta.setMetaData({
		title: 'Home',
		description: 'Welcome to the new Nuxt 3 template! Check out the features.'
	});

	const data = reactive({
		accordions: [
			{
				title: 'Random title for accordion',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.'
			},
			{
				title: 'And yet another title',
				text: 'Dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.'
			}
		]
	});
</script>

<style lang="scss" scoped>
	.home {
		$this: &;

		&__row {
			& + #{$this}__row {
				margin-top: spacer(lg);

				@include breakpoint(sm up) {
					margin-top: spacer(xl);
				}
			}
		}

		&__column {
			@include flex-column(12);

			@include breakpoint(sm up) {
				@include flex-column(6);
			}

			& + #{$this}__column {
				margin-top: spacer(lg);

				@include breakpoint(sm up) {
					margin-top: 0;
				}
			}
		}

		&__accordion {
			margin-top: spacer(lg);
		}

		pre {
			tab-size: 4;
		}
	}
</style>
