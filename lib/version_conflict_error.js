if (Package['cmather:iron-core']) {
  throw new Error("\n\n\
    The iron-core package name has changed. Please uninstall the previous version like this:\n \
    \n\
    > meteor remove cmather:iron-core\n\
    \n\
    Thank you! \
    \n\n\
  ");
}
