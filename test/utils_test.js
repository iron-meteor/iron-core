Tinytest.add('Utils - inheritance', function (test) {
  var calls = [];

  Parent = function () {};
  Parent.parentStaticProp = true;
  Parent.prototype.parentProp = true;

  Child = function () {};

  Iron.utils.inherits(Child, Parent, {
    childProp: true
  });

  test.equal(Child.__super__, Parent.prototype);
  test.isTrue(Child.prototype.childProp);
  test.isTrue(Child.parentStaticProp);

  var c = new Child;
  test.isTrue(c.childProp);
  test.isTrue(c.parentProp);
});
