<template>
	<header class="header" :class="{ 'header__scrolled': isScrolled }">
		<div class="header__row row">
			<div class="column">
				<nuxt-link :to="$routes.path('page.index')" class="header__name">
					<span class="header__name">
						DAVID SMID
					</span>
				</nuxt-link>
			</div>

			<div class="header__nav-wrap column">
				<button
					class="header__hamburger"
					:class="{'is-active': isMobileMenuOpen}"
					@click="toggleMenu()"
				>
					<span />
				</button>

				<transition>
					<nav v-show="isMobileMenuOpen" class="header__nav">
						<nuxt-link
							:to="$routes.path('page.index')"
							class="header__nav-item"
						>
							Advokátní Služby
						</nuxt-link>

						<nuxt-link
							:to="$routes.path('page.contact')"
							class="header__nav-item"
						>
							Adresa
						</nuxt-link>
						<partials-button to="#services" type="primary">
							kontakt
						</partials-button>
					</nav>
				</transition>
			</div>
		</div>
	</header>
</template>

<script setup>
	const {device, togglePageScrolling} = useWebpage();

	const isMobileMenuOpen = ref(false);
	const isScrolled = ref(false);
	const isWithMobileNavigation = computed(() => !device.isTablet && !device.isDesktop);

	const handleScroll = () => {
		isScrolled.value = window.scrollY > 130; // Přizpůsobte podle potřeby
	};

	console.log(isScrolled);

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	const toggleMenu = () => {
		if (isWithMobileNavigation.value) {
			isMobileMenuOpen.value = !isMobileMenuOpen.value;

			const body = document.getElementsByTagName('html')[0];

			if (isMobileMenuOpen.value) {
				togglePageScrolling(false);
			} else {
				togglePageScrolling(true);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.header {
		position: sticky;
		top: 0;
		z-index: $zindex-header;
		margin: 0;
		color: $color-white;
		transition: 0.4s;

		&__scrolled {
			background-color: rgba(0 0 0 / 80%);
			box-shadow: rgba(50 50 93 / 25%) rem(0) rem(10) rem(30) rem(-20), rgba(0 0 0 / 5%) rem(0) rem(30) rem(60) rem(-30);
		}

		&__row {
			align-items: center;
			height: $height-header;
		}

		&__name {
			@include typo(d3);

			font-size: rem(26);
			text-decoration: none;
			text-underline: none;

			@include breakpoint(md up) {
				font-size: rem(26);
			}
		}

		&__hamburger {
			position: relative;
			width: rem(40);
			height: rem(40);
			padding: 0;
			appearance: none;
			cursor: pointer;
			background: none;
			border: 0;
			z-index: 1000;

			@include breakpoint(sm up) {
				display: none;
			}

			span,
			span::before,
			span::after {
				position: absolute;
				display: block;
				width: 100%;
				height: 2px;
				background: $color-white;
				transition: $transition-default;
			}

			span::before {
				top: rem(-10);
				content: '';
			}

			span::after {
				top: rem(10);
				content: '';
			}

			&.is-active {
				span {
					transform: rotate(45deg);
				}

				span::before {
					top: 0;
					transform: rotate(0deg);
				}

				span::after {
					top: 0;
					transform: rotate(90deg);
				}
			}
		}

		&__nav-wrap {
			display: flex;
			justify-content: flex-end;
		}

		&__nav {
			@include position(fixed, 0 0 0);

			display: flex;
			flex-direction: column;
			gap: spacer(lg);
			align-items: center;
			justify-content: center;
			padding: spacer(lg) spacer(lg) spacer(xxl);
			margin: 0;
			color: $color-white;
			background-color: rgba(0 0 0 / 80% );

			@include breakpoint(sm up) {
				display: flex !important; // !important is needed to override v-show
			}

			@include breakpoint(sm up) {
				position: static;
				flex-direction: row;
				justify-content: flex-end;
				padding: 0;
				background: none;
			}

			&-item {
				font-size: rem(24);
				text-decoration: none;

				@include breakpoint(sm up) {
					font-size: rem(18);
				}

				&.router-link-active {
					color: $color-green;
				}

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
