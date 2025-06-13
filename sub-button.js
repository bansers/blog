"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonComponent;
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
function ButtonComponent(_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#007AFF' : _ref$backgroundColor,
    onPress = _ref.onPress;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      style: [styles.button, {
        backgroundColor: backgroundColor
      }],
      onPress: onPress,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.buttonText,
        children: "\u5B9A\u5236\u7EC4\u4EF6\u4E2D\u7684\u6309\u94AE~"
      })
    })
  });
}
var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 20
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});
module.exports = exports.default;
