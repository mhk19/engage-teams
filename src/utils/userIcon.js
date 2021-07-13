export function getInitials(displayName) {
  let matches = displayName.match(/\b(\w)/g);
  return matches.join('');
}
