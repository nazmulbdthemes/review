/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TabPanel} from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';
import './editor.scss';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const { titleColor, descriptionColor, designationColor, boxBgColor, titleHoverColor, descriptionHoverColor, designationHoverColor, boxBgHoverColor, ratingColor } = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<TabPanel
					className="bdt-tab-panel"
					activeClass="active-tab"
					initialTabName="bdt_general"
					tabs={[
						{
							name: 'bdt_general',
							title: __('Generral', 'text-domain'),
							className: 'bdt-tab bdt-general',
						},
						{
							name: 'bdt_advanced',
							title: __('Advanced', 'text-domain'),
							className: 'bdt-tab bdt-advanced',
						},
					]}
				>
					{(tabMain) => {
						if (tabMain.name === 'bdt_general') {
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
												'Grid Columns',
												'bdt-review-blocks'
											)}
											controlName={GRID_COLUMNS}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={4}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Image Setting',
											'bdt-review-blocks'
										)}
										initialOpen={false}
									></PanelBody>
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
														<PanelColorSettings
															title={__(
																'Color Settings',
																'bdt-review-blocks'
															)}
															initialOpen={false}
															colorSettings={[
																{
																	value: titleColor,
																	onChange: (
																		value
																	) =>
																		setAttributes(
																			{
																				titleColor:
																					value,
																			}
																		),
																	label: __(
																		'Title Color',
																		'bdt-review-blocks'
																	),
																},
																{
																	value: designationColor,
																	onChange: (
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
																	onChange: (
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
														<PanelColorSettings
															title={__(
																'Color Settings',
																'bdt-review-blocks'
															)}
															initialOpen={false}
															colorSettings={[
																{
																	value: boxBgColor,
																	onChange: (
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
						} else if (tabMain.name === 'bdt_advanced') {
							return <div>Advanced</div>;
						}
					}}
				</TabPanel>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
