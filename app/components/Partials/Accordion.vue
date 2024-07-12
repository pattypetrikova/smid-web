<template>
	<div class="accordion">
		<div
			class="accordion__head"
			:class="{'is-active': data.isOpened}"
			@click="toggleQuestion()"
		>
			<div class="accordion__title">
				<slot name="title" />
			</div>

			<div class="accordion__head-icon svg">
				<svg-icon-caret-down />
			</div>
		</div>

		<div
			ref="accordion"
			class="accordion__content-wrapper"
		>
			<div class="accordion__content">
				<slot name="content" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const SvgIconCaretDown = defineAsyncComponent(() => import('~/assets/icons/caret-down.svg'));

	const accordion = ref(null);

	const data = reactive({
		isOpened: false,
	});

	const toggleQuestion = () => {
		const panel = accordion.value;

		if (data.isOpened) {
			data.isOpened = false;
			panel.style.height = null;
		} else {
			data.isOpened = true;
			panel.style.transitionDuration = panel.scrollHeight > 500 ? `${panel.scrollHeight * 0.7}ms` : `${panel.scrollHeight}ms`;
			panel.style.height = `${panel.scrollHeight}px`;
		}
	};
</script>

<style lang="scss" scoped>
	.accordion {
		$this: &;

		border-bottom: 1px solid $color-grey;

		&__head {
			display: flex;
			justify-content: space-between;
			padding: spacer(sm) 0;
			color: $color-black;
			cursor: pointer;
			background: $color-white;
			transition: $transition-default;

			&-icon {
				transition: $transition-default;
			}

			&.is-active {
				#{$this}__head-icon {
					transform: rotate(-180deg);
				}
			}
		}

		&__title {
			@include typo(b2);

			font-weight: $font-weight-bold;
		}

		&__content-wrapper {
			height: 0;
			overflow: hidden;
			color: $color-black;
			background: $color-white;
			transition: height 0.3s ease-out;
		}

		&__content {
			@include typo(b2);

			padding: 0 0 spacer(lg);
		}
	}
</style>
