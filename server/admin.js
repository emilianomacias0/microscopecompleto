var tom = Meteor.users.findOne({username: "tom"});
Roles.addUserToRoles(tom._id, ["admin"]);