var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value

return object
}

function deleteFromObjectByKey(object, key, value) {
  delete key.object;
  return Object.assign({}, object, { [key]: value })
  }

function destructivelyDeleteFromObjectByKey(object, key, value) {
return Object.assign({}, 1, { [key]: value })
}
