# GitHubCheckBoxes

![License: WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)

Tired of checking off GFM checkboxes in issue or pull request templates? This
extension to the rescue.

## What it does

This extension basically does `perl -pe 's/^(\s*)-\s+[ ]/\1- [x]/g'` on all
textareas of a GitHub page, including hidden ones.

## How to use

Just click the check button.

## Caution

1. All `textarea` tags are affected by this extension. At the time of writing,
   there is one `textarea` associated with each comment that belongs to the
   user, even if it is not being edited, and the modifications will show up if
   you later click the edit button. Be aware of unwanted edits.

2. A line like

   ```markdown
       - [ ] Lorem ipsum
   ```

   will be checked by this extension, although it could either be part of a
   code block (which probably shouldn't be touched) or a checklist item in an
   indented region (e.g. within a list item). It's impossible to tell the
   difference without parsing entire textareas as Markdown, so just beaware.

## Packaging

[`extensionator`](https://github.com/Zensight/extensionator) may be used for
packing the extension. You'll need a PEM key for packing. You may generate the
key with `openssl` if you don't yet have one:

```bash
openssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt -out key.pem
```

Then,

```bash
gem install extensionator
extensionator --directory="source" --identity="key.pem" --output="dist/GitHubCheckBoxes-$(git describe 2>/dev/null).crx"
```

## License

Copyright © 2016 Zhiming Wang <zmwangx@gmail.com>

This work is free. You can redistribute it and/or modify it under the terms of
the Do What The Fuck You Want To Public License, Version 2, as published by Sam
Hocevar. See the COPYING file for more details.
