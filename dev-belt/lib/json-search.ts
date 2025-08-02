// lib/json-search.ts

interface JsonObject {
[key: string]: any;
}

// This function will recursively search the JSON object
function findPaths(
  obj: JsonObject | any[],
  query: string,
  currentPath: (string | number)[] = []
): (string | number)[][] {
  let paths: (string | number)[][] = [];
  const lowerCaseQuery = query.toLowerCase();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newPath = [...currentPath, isNaN(Number(key)) ? key : Number(key)];
      const value = (obj as any)[key];

      let keyMatched = false;

      // Check if the key matches
      if (key.toLowerCase().includes(lowerCaseQuery)) {
        paths.push(newPath);
        keyMatched = true;
      }

      // Check if the value matches (if it's a string or number)
      if (
        !keyMatched &&
        typeof value !== 'object' &&
        value !== null &&
        String(value).toLowerCase().includes(lowerCaseQuery)
      ) {
        paths.push(newPath);
      }

      // If the value is an object or array, recurse
      if (typeof value === 'object' && value !== null) {
        paths = paths.concat(findPaths(value, query, newPath));
      }
    }
  }

  return paths;
}

export { findPaths };