Patch script to allow Discord-Samba's custom TypeDoc theme to work. Load the function
in the typedoc-runner script and pass it the Handlebars singleton. Should be called
before generating the documentation (obviously).

```js
require('@discord-samba/typedoc-patch')(require('handlebars'));
```

This script simply registers helper functions needed in Discord-Samba's TypeDoc theme.
These helper functions are used for tracking state for generating kind headers (Classes,
Enumerations, Interfaces, etc) in the Table of Contents. Because ToC members are
not grouped by kind by the parser when given to the generator, we can't iterate by
kind when building the ToC, but they are sorted by kind at least, so we can create
a kind header every time we see one that hasn't been seen yet, which requires tracking
state, hence this mess.
