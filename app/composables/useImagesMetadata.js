export default () => {
	const folderImages = import.meta.glob('../public/images/*.*', {
		query: 'as=metadata',
		import: 'default',
		eager: true
	});

	const subfolderImages = import.meta.glob('../public/images/*/*.*', {
		query: 'as=metadata',
		import: 'default',
		eager: true
	});
	const images = {...folderImages, ...subfolderImages};

	const getImageDimensions = (imagePath) => {
		const image = images[`../public/images/${imagePath}`];

		if (image) {
			const {height, width} = image;
			return {height, width};
		}
		console.warn(`Wasn't able to read ${imagePath} dimensions.`);
		return {height: 100, width: 100};
	};

	return {
		images,
		getImageDimensions
	};
};
