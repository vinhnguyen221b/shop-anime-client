import _ from "lodash";

export function paginate(items, current, size) {
  const startIndex = (current - 1) * size;
  return _(items).slice(startIndex).take(size).value();
}
