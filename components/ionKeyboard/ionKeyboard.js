// Meteor.startup(function () {
//   if (Meteor.isCordova) {
//     IonKeyboard.disableScroll();
//   }
// });

// IonKeyboard = {
//   close: function () {
//     if (Meteor.isCordova) {
//       cordova.plugins.Keyboard.close();
//     }
//   },

//   show: function () {
//     if (Meteor.isCordova) {
//       cordova.plugins.Keyboard.show();
//     }
//   },

//   hideKeyboardAccessoryBar: function () {
//     if (Meteor.isCordova) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//   },

//   showKeyboardAccessoryBar: function () {
//     if (Meteor.isCordova) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
//     }
//   },

//   disableScroll: function () {
//     if (Meteor.isCordova) {
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//   },

//   enableScroll: function () {
//     if (Meteor.isCordova) {
//       cordova.plugins.Keyboard.disableScroll(false);
//     }
//   }
// };

// window.addEventListener('native.keyboardshow', function (event) {
//   if (Platform.isAndroid()) {
//     return;
//   }

//   $('body').addClass('keyboard-open');
//   var keyboardHeight = event.keyboardHeight;
//   // event.stopPropagation();

//   console.log("Moving up!", keyboardHeight)

//   $('[data-keyboard-attach]').each(function (index, el) {
//     $(el).velocity({
//       bottom: keyboardHeight
//     }, {
//       duration: 150
//     });

//     $('.content').css('padding-bottom', keyboardHeight);
//   });
// });

// window.addEventListener('native.keyboardhide', function (event) {
//   if (Platform.isAndroid()) {
//     return;
//   }

//   $('body').removeClass('keyboard-open');

//   $('[data-keyboard-attach]').each(function (index, el) {
//     $(el).velocity({
//       bottom: 0
//     }, {
//       duration: 0
//     });

//     $('.content').css('padding-bottom', '0px');
//   });
// });
