import {
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	SelectControl,
	Button,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const Edit = ({ attributes, setAttributes }) => {
	const { backgroundImage, backgroundColor, gapSize, layout } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Background Settings", "toigo-gutenberg-block")}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ backgroundImage: media.url })
							}
							allowedTypes={["image"]}
							value={backgroundImage}
							render={({ open }) => (
								<Button
									onClick={open}
									className="components-button button button-large"
								>
									{backgroundImage
										? __("Change Background Image", "toigo-gutenberg-block")
										: __("Upload Background Image", "toigo-gutenberg-block")}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__("Layout Settings", "toigo-gutenberg-block")}>
					<SelectControl
						label={__("Layout", "toigo-gutenberg-block")}
						value={layout}
						options={[
							{ label: "Flex", value: "flex" },
							{ label: "Block", value: "block" },
						]}
						onChange={(value) => setAttributes({ layout: value })}
					/>
					<RangeControl
						label={__("Gap Size", "toigo-gutenberg-block")}
						value={parseInt(gapSize, 10)}
						onChange={(value) => setAttributes({ gapSize: `${value}px` })}
						min={0}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="mba-wrapper" style={{ display: layout }}>
				<div
					className="mba-background"
					style={{ backgroundImage: `url(${backgroundImage})` }}
				></div>
				<div
					className="mba-content-wrapper"
					style={{ backgroundColor, gap: gapSize }}
				>
					<InnerBlocks
						allowedBlocks={["core/heading", "core/paragraph"]}
						template={[
							["core/heading", { level: 5, placeholder: "Add a heading..." }],
							["core/paragraph", { placeholder: "Add text here..." }],
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
