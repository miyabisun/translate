# translate

## Installation

require Node.js

```bash
$ npm install -g miyabisun/translate
```

### set auth-file

This command line tool uses the [DeepL API](https://www.deepl.com/ja/docs-api) service.  
When you register the service, an authentication key will be issued, so please prepare and store the following JSON file.

Configuration files are found in order from the top.

- `~/.config/.deepl.json`
- `~/.deepl.json`

```bash
$ cat ~/.config/.deepl.json
{
  "free_api": true,
  "auth_key": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx"
}
```

For free version developer accounts, a free_api key is required.  
Reference Site: [deepl - npm](https://www.npmjs.com/package/deepl)

## Usage

These commands will be available.

- `2en <message>`
- `2jp <message>`

DeepL may present multiple phrases in case of shaky translation results, and the results can be retrieved in array format.  
This library outputs the first result returned to standard output.

```bash
$ 2en "超つかれた"
extremely tired
```
