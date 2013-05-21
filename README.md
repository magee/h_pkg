Installation
====================

To test the package, create a "hypothes.is" folder in your in the /Packages folder of your local Meteor installation.

Copy these three files into that folder:

1  package.js
2  package.json
3  smart.json

To install in your application, move to the root of your Meteor application and type:

"mrt install hypothes.is"

If that doesn't work, you may have to add the following to the smart.json file in your apps's root.

>{
>  "meteor": {
>    "git": "https://github.com/meteor/meteor.git",
>    "branch": "devel"
>  },
>  "packages": {
>    "hypothes.is" : {
>      "path": "../meteor/packages/hypothes.is"
>    }
>  }
>}

Note
------------
All content of these files are in draft and will require review and testing.