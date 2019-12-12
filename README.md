### npm
```
import RPTurn from 'rpturn;
import 'my-library/build/index.css' // If you import a css file in your library

let libraryInstance = new MyLibrary();
...
```

### self-host/cdn
```
<link href="build/index.css" rel="stylesheet">
<script src="build/index.js"></script>

let MyLibrary = window.MyLibrary.default;
let libraryInstance = new MyLibrary();
...
```