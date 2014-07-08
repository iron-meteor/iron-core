Iron = Iron || {};
Iron.utils = {};

/**
 * Make one constructor function inherit from another. Optionally provide
 * prototype properties for the child.
 *
 * @param {Function} Child The child constructor function.
 * @param {Function} Parent The parent constructor function.
 * @param {Object} [props] Prototype properties to add to the child
 */
Iron.utils.inherits = function (Child, Parent, props) {
  // copy static fields
  for (var key in Parent) {
    if (_.has(Parent, key))
      Child[key] = Parent[key];
  }

  var Middle = function () {
    this.constructor = Child;
  };

  // hook up the proto chain
  Middle.prototype = Parent.prototype;
  Child.prototype = new Middle;
  Child.__super__ = Parent.prototype;

  // copy over the prototype props
  if (_.isObject(props))
    _.extend(Child.prototype, props);

  return Child;
};
