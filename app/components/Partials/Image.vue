<template>
	<figure
		class="image"
		:class="`image--${filename}`"
	>
		<component
			:is="'style'"
			v-if="props.keepAspectRatio"
		>
			{{ style }}
		</component>

		<picture
			class="image__picture"
		>
			<template
				v-for="(size, sizeIndex) in sizes"
			>
				<source
					v-for="(format, formatType) in size.formats"
					:key="`${sizeIndex}-${formatType}`"
					:media="size.query"
					:srcset="`${format.x1} 1x, ${format.x2} 2x`"
					:type="`image/${formatType}`"
				/>
			</template>

			<img
				:src="sizes[sizes.length - 1].formats.default.x1"
				:alt="props.alt"
				:lazy="props.lazy ? 'lazy' : null"
				:style="props.placeholder ? {backgroundImage: `url(${sizes[0].placeholder})`} : null"
			/>
		</picture>
	</figure>
</template>

<script setup>
	import config from '~/config';

	const img = useImage();

	const {getImageDimensions} = useImagesMetadata();

	const props = defineProps({
		src: {
			type: [String, Object],
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		lazy: {
			type: Boolean,
			default: true
		},
		keepAspectRatio: {
			type: Boolean,
			default: true
		},
		placeholder: {
			type: Boolean,
			default: true
		}
	});

	let sizes = {};

	// convert simple image config to advanced
	if (typeof props.src === 'string') {
		sizes.xxs = props.src;
	} else {
		sizes = props.src;
	}

	// store first filename for later usage in css class
	const filename = sizes.xxs.split('/').pop().split('.').shift();

	// transform sizes object to array of objects, each object contains breakpoint name and src
	sizes = Object.entries(sizes).map(([breakpointName, src]) => ({
		breakpointName,
		src
	}));

	// sort sizes from smallest to largest per config and add media queries
	sizes = sizes.sort((a, b) => {
		const aIndex = config.breakpoints.findIndex((breakpoint) => breakpoint.layout === a.breakpointName);
		const bIndex = config.breakpoints.findIndex((breakpoint) => breakpoint.layout === b.breakpointName);

		return aIndex - bIndex;
	}).map((size, index, array) => {
		const currentBreakpoint = config.breakpoints.find((breakpoint) => breakpoint.layout === size.breakpointName);
		const nextBreakpoint = config.breakpoints.find((breakpoint) => breakpoint.layout === array[index + 1]?.breakpointName);

		const dimensions = getImageDimensions(size.src);

		// generate settings so it doesn't need to be repeated for each format
		const formatSettings = (format, isRetina) => ({
			format,
			width: Math.round(dimensions.width / (isRetina ? 1 : 2)),
			height: Math.round(dimensions.height / (isRetina ? 1 : 2))
		});

		const defaultFileFormat = size.src.split('.').pop();

		return {
			breakpointName: size.breakpointName,
			src: size.src,
			formats: {
				avif: {
					x1: img(`images/${size.src}`, formatSettings('avif', false)),
					x2: img(`images/${size.src}`, formatSettings('avif', true)),
				},
				webp: {
					x1: img(`images/${size.src}`, formatSettings('webp', false)),
					x2: img(`images/${size.src}`, formatSettings('webp', true)),
				},
				default: {
					x1: img(`images/${size.src}`, formatSettings(defaultFileFormat, false)),
					x2: img(`images/${size.src}`, formatSettings(defaultFileFormat, true)),
				},
			},
			placeholder: img(`images/${size.src}`, {
				format: defaultFileFormat,
				width: 20,
				height: 20,
				blur: 2
			}),
			width: dimensions.width,
			height: dimensions.height,
			aspectRatio: dimensions.width / dimensions.height,
			query: `${currentBreakpoint.queryMin}${nextBreakpoint ? ` and ${nextBreakpoint.queryPre}` : ''}`
		};
	});

	// generate style with media queries to keep aspect ratio
	const style = sizes.map((size) => `
		@media ${size.query} {
			.image--${filename} img {
				aspect-ratio: ${size.aspectRatio};
			}
		}
	`).join('');
</script>

<style lang="scss" scoped>
	.image {
		margin: 0;

		&__picture {
			position: relative;
			min-height: min-content;
			overflow: hidden;

			img {
				display: block;
				width: 100%;
				background-size: cover;
			}
		}
	}
</style>
