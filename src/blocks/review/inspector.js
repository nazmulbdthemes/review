/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TabPanel, CardDivider} from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

import './editor.scss';
import Alignment from '../../controls/alignment/alignment';
import aligns from '../../options/align';
const { ResRangleControl } = Controls;
const { GRID_COLUMNS, GRID_GAP, ROW_GAP, NAME_FONT_SIZE, DESG_FONT_SIZE, DESC_FONT_SIZE, RATING_SIZE, IMAGE_SIZE, ITEM_PADDING, ITEM_BORDER_RADIUS } = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const { titleColor, descriptionColor, designationColor, boxBgColor, titleHoverColor, descriptionHoverColor, designationHoverColor, boxBgHoverColor, ratingColor, textAlign} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };
	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<TabPanel
					className="bdt-tab-panel"
					activeClass="active-tab"
					initialTabName="bdt_content"
					tabs={[
						{
							name: 'bdt_settings',
							title: __('Settings', 'bdt-review-blocks'),
							className: 'bdt-tab bdt-advanced',
						},
					]}
				>
					{(tabMain) => {
						  if (tabMain.name === 'bdt_settings') {
							return (
								<Fragment>
									<PanelBody
										title={__(
											'Column Settings',
											'bdt-review-blocks'
										)}
									>
										<ResRangleControl
											label={__(
												'Column Number',
												'bdt-review-blocks'
											)}
											controlName={GRID_COLUMNS}
											objAttrs={objAttrs}
											noUnits={true}
											min={1}
											max={4}
										/>
										<CardDivider />
										<ResRangleControl
											label={__(
												'Column Gap',
												'bdt-review-blocks'
											)}
											controlName={GRID_GAP}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={100}
										/>
										<CardDivider />
										<ResRangleControl
											label={__(
												'Row Gap',
												'bdt-review-blocks'
											)}
											controlName={ROW_GAP}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={100}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Image Setting',
											'bdt-review-blocks'
										)}
										initialOpen={false}
									>
										<ResRangleControl
											label={__(
												'Image Size',
												'bdt-review-blocks'
											)}
											controlName={IMAGE_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={200}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Content',
											'bdt-review-blocks'
										)}
										initialOpen={false}
									>
										<TabPanel
											className="bdt-tab-panel"
											activeClass="active-tab"
											initialTabName="bdt_review_normal"
											tabs={[
												{
													name: 'bdt_review_normal',
													title: __(
														'Normal',
														'bdt-review-blocks'
													),
													className:
														'bdt-tab bdt-general',
												},
												{
													name: 'bdt_review_hover',
													title: __(
														'Hover',
														'bdt-review-blocks'
													),
													className:
														'bdt-tab bdt-style',
												},
											]}
										>
											{(tabContent) => {
												if (
													tabContent.name ===
													'bdt_review_normal'
												) {
													return (
														<Fragment>
															<PanelColorSettings
																title={__(
																	'Color Settings',
																	'bdt-review-blocks'
																)}
																initialOpen={
																	false
																}
																colorSettings={[
																	{
																		value: titleColor,
																		onChange:
																			(
																				value
																			) =>
																				setAttributes(
																					{
																						titleColor:
																							( value === undefined ? '#000000' : value )
																					}
																				),
																		label: __(
																			'Title Color',
																			'bdt-review-blocks'
																		),
																	},
																	{
																		value: designationColor,
																		onChange:
																			(
																				value
																			) =>
																				setAttributes(
																					{
																						designationColor:
																							value,
																					}
																				),
																		label: __(
																			'Designation Color',
																			'bdt-review-blocks'
																		),
																	},
																	{
																		value: descriptionColor,
																		onChange:
																			(
																				value
																			) =>
																				setAttributes(
																					{
																						descriptionColor:
																							value,
																					}
																				),
																		label: __(
																			'Description Color',
																			'bdt-review-blocks'
																		),
																	},
																]}
															/>
															<ResRangleControl
																label={__(
																	'Name Font Size',
																	'bdt-review-blocks'
																)}
																controlName={
																	NAME_FONT_SIZE
																}
																objAttrs={
																	objAttrs
																}
																noUnits={false}
																min={1}
																max={100}
															/>
															<CardDivider />
															<ResRangleControl
																label={__(
																	'Designation Font Size',
																	'bdt-review-blocks'
																)}
																controlName={
																	DESG_FONT_SIZE
																}
																objAttrs={
																	objAttrs
																}
																noUnits={false}
																min={1}
																max={100}
															/>
															<CardDivider />
															<ResRangleControl
																label={__(
																	'Description Font Size',
																	'bdt-review-blocks'
																)}
																controlName={
																	DESC_FONT_SIZE
																}
																objAttrs={
																	objAttrs
																}
																noUnits={false}
																min={1}
																max={100}
															/>
															<Alignment
																label={__(
																	'Alignment',
																	'bdt-review-blocks'
																)}
																attribute={
																	textAlign
																}
																attributeName="textAlign"
																setAttributes={
																	setAttributes
																}
																options={aligns}
															/>
														</Fragment>
													);
												} else if (
													tabContent.name ===
													'bdt_review_hover'
												) {
													return (
														<PanelColorSettings
															title={__(
																'Color Settings',
																'bdt-review-blocks'
															)}
															initialOpen={false}
															colorSettings={[
																{
																	value: titleHoverColor,
																	onChange: (
																		value
																	) =>
																		setAttributes(
																			{
																				titleHoverColor:
																					value,
																			}
																		),
																	label: __(
																		'Title Color',
																		'bdt-review-blocks'
																	),
																},
																{
																	value: designationHoverColor,
																	onChange: (
																		value
																	) =>
																		setAttributes(
																			{
																				designationHoverColor:
																					value,
																			}
																		),
																	label: __(
																		'Designation Color',
																		'bdt-review-blocks'
																	),
																},
																{
																	value: descriptionHoverColor,
																	onChange: (
																		value
																	) =>
																		setAttributes(
																			{
																				descriptionHoverColor:
																					value,
																			}
																		),
																	label: __(
																		'Description Color',
																		'bdt-review-blocks'
																	),
																},
															]}
														/>
													);
												}
											}}
										</TabPanel>
									</PanelBody>
									<PanelBody
										title={__(
											'Rating',
											'bdt-review-blocks'
										)}
										initialOpen={false}
									>
										<PanelColorSettings
											title={__(
												'Rating Color',
												'bdt-review-blocks'
											)}
											initialOpen={false}
											colorSettings={[
												{
													value: ratingColor,
													onChange: (value) =>
														setAttributes({
															ratingColor: value,
														}),
													label: __(
														'Rating Color',
														'bdt-review-blocks'
													),
												},
											]}
										/>
										<ResRangleControl
											label={__(
												'Rating Size',
												'bdt-review-blocks'
											)}
											controlName={RATING_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Item Box',
											'bdt-review-blocks'
										)}
										initialOpen={false}
									>
										<TabPanel
											className="bdt-tab-panel"
											activeClass="active-tab"
											initialTabName="bdt_review_normal"
											tabs={[
												{
													name: 'bdt_review_normal',
													title: __(
														'Normal',
														'bdt-review-blocks'
													),
													className:
														'bdt-tab bdt-general',
												},
												{
													name: 'bdt_review_hover',
													title: __(
														'Hover',
														'bdt-review-blocks'
													),
													className:
														'bdt-tab bdt-style',
												},
											]}
										>
											{(tabBox) => {
												if (
													tabBox.name ===
													'bdt_review_normal'
												) {
													return (
														<Fragment>
															<PanelColorSettings
																title={__(
																	'Color Settings',
																	'bdt-review-blocks'
																)}
																initialOpen={
																	false
																}
																colorSettings={[
																	{
																		value: boxBgColor,
																		onChange:
																			(
																				value
																			) =>
																				setAttributes(
																					{
																						boxBgColor:
																							value,
																					}
																				),
																		label: __(
																			'background Color',
																			'bdt-review-blocks'
																		),
																	},
																]}
															/>
															<ResRangleControl
																label={__(
																	'Padding',
																	'bdt-review-blocks'
																)}
																controlName={
																	ITEM_PADDING
																}
																objAttrs={
																	objAttrs
																}
																noUnits={false}
																min={1}
																max={100}
															/>
															<CardDivider />
															<ResRangleControl
																label={__(
																	'Border Radius',
																	'bdt-review-blocks'
																)}
																controlName={
																	ITEM_BORDER_RADIUS
																}
																objAttrs={
																	objAttrs
																}
																noUnits={false}
																min={1}
																max={100}
															/>
														</Fragment>
													);
												} else if (
													tabBox.name ===
													'bdt_review_hover'
												) {
													return (
														<PanelColorSettings
															title={__(
																'Color Settings',
																'bdt-review-blocks'
															)}
															initialOpen={false}
															colorSettings={[
																{
																	value: boxBgHoverColor,
																	onChange: (
																		value
																	) =>
																		setAttributes(
																			{
																				boxBgHoverColor:
																					value,
																			}
																		),
																	label: __(
																		'Background Color',
																		'bdt-review-blocks'
																	),
																},
															]}
														/>
													);
												}
											}}
										</TabPanel>
									</PanelBody>
								</Fragment>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>
			
		</div>
	);
};

export default Inspector;
