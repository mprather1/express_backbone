Backbone.Model.prototype.idAttribute = '_id';

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var User = Backbone.Model.extend({
  urlRoot: "http://localhost:8000/api/users",
});

var Users = Backbone.PageableCollection.extend({
  url: "http://localhost:8000/api/users",
})