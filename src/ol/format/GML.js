/**
 * @module ol/format/GML
 */
import GML3 from '../format/GML3.js';

/**
 * @classdesc
 * Feature format for reading and writing data in the GML format
 * version 3.1.1.
 * Currently only supports GML 3.1.1 Simple Features profile.
 *
 * @constructor
 * @param {olx.format.GMLOptions=} opt_options
 *     Optional configuration object.
 * @extends {ol.format.GMLBase}
 * @api
 */
const _ol_format_GML_ = GML3;


/**
 * Encode an array of features in GML 3.1.1 Simple Features.
 *
 * @function
 * @param {Array.<ol.Feature>} features Features.
 * @param {olx.format.WriteOptions=} opt_options Options.
 * @return {string} Result.
 * @api
 */
_ol_format_GML_.prototype.writeFeatures;


/**
 * Encode an array of features in the GML 3.1.1 format as an XML node.
 *
 * @function
 * @param {Array.<ol.Feature>} features Features.
 * @param {olx.format.WriteOptions=} opt_options Options.
 * @return {Node} Node.
 * @api
 */
_ol_format_GML_.prototype.writeFeaturesNode;
export default _ol_format_GML_;
