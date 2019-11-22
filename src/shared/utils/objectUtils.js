function isEmpty(obj) {
  return (
    obj === null ||
    obj === undefined ||
    obj === '' ||
    (obj instanceof Array && obj.length === 0) ||
    (obj instanceof Object && Object.keys(obj).length === 0)
  );
}

export default {isEmpty};
