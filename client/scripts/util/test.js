const templateAppUrl = 'https://edsapp.elmodev.com';

/**
 * Get the url of a component for visual regression testing
 *
 * @param component
 */
exports.getComponentUrl = function getComponentUrl(component) {
  return `${templateAppUrl}/sand-box/${camelCaseToDash(component)}`;
};

/**
 * regex to convert camelCase to dash
 * @param str
 */
function camelCaseToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
