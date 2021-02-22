Patch script to allow Discord-Samba's custom typedoc theme to work. Load the function
in the typedoc-runner script and pass it the Handlebars singleton. Should be called
before generating the documentation (obviously).

```js
require('@discord-samba/typedoc-patch')(require('handlebars'));
```

