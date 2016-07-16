(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingCtrl', LandingCtrl)

  function LandingCtrl () {
    var vm = this;
    vm.data = 'World!';
    vm.title = 'Simple Scrollbox';
    vm.image = '../assets/reddit.png'
    vm.list = [];
    for(var i = 0; i < 15; i++) {
      vm.list.push({
        face: vm.image,
        what: 'Reddit',
        who: 'ents',
        notes: 'When does the norwhal bacon?'
      })
    }
  }

})();
