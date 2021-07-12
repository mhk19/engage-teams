export function getInitials(displayName) {
  console.log(displayName);
  let matches = displayName.match(/\b(\w)/g);
  return matches.join('');
}
