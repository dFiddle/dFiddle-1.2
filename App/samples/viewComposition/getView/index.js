define(['module'], function(module) {

  var roles = ['default', 'role1', 'role2'];
  var role = ko.observable('default');
  var modulePath = module.id.substr(0, module.id.lastIndexOf('/') +1);

  var getView = ko.computed(function(){
        var roleViewMap = {
          'default': modulePath + 'index.html',
          role1: modulePath + 'role1.html',
          role2: modulePath + 'role2.html'
        };

        this.role = (role() || 'default');

        return roleViewMap[this.role];
  });


  return {
    showCodeUrl: true,
    roles: roles,
    role: role,
    getView: getView,
    propertyOne: 'This is a databound property from the root context.',
    propertyTwo: 'This property demonstrates that binding contexts flow through composed views.',
    moduleJSON: ko.toJSON(module)
  };


});