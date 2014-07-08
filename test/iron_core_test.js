Tinytest.add('Utils - inherits', function (test) {
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

Tinytest.add('Utils - extend', function (test) {
  var calls = [];
  Parent = function () {
    calls.push('Parent');
  };
  Parent.parentStaticProp = true;
  Parent.prototype.parentProp = true;

  // test constructor overloading
  Child = Iron.utils.extend(Parent, {
    constructor: function () {
      calls.push('Child');
    },

    childProp: true
  });

  test.equal(Child.__super__, Parent.prototype);
  test.isTrue(Child.prototype.childProp);
  test.isTrue(Child.parentStaticProp);


  // test regular constructor
  calls = [];
  Child = Iron.utils.extend(Parent);
  var c = new Child;
  test.equal(calls.length, 1);
});
