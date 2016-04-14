export default {
  child: function () { return {child: new Function} },
  on: function (event, callback, context) {
    callback.bind(context)({val: ()=>this.topLevel})
  },
  topLevel: {
    dockets: {foo: {}, bar: {}}
  }
};
