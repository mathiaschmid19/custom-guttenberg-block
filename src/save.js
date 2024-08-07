import { InnerBlocks } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { backgroundImage, backgroundColor, gapSize, layout } = attributes;

	return (
		<div className="mba-wrapper" style={{ display: layout }}>
			<div
				className="mba-background"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			></div>
			<div
				className="mba-content-wrapper"
				style={{ backgroundColor, gap: gapSize }}
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
