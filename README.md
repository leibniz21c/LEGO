![logo](./pic/logo.png)<br>
Welcome to __LEGO__  git repository!<br>
Here are some useful information about LEGO service.<br>
### 0. Docker image
Link : [https://hub.docker.com/r/leibniz21c/legogames](https://hub.docker.com/r/leibniz21c/legogames)

### 1. Enjoy!
Link : [http://legogames.iptime.org/](http://legogames.iptime.org/)

### 2. What is LEGO?
LEGO is open web game community that contains a lot of games. The games in LEGO are always updated and new games are always enjoyable! __Enjoy LEGO__ : )

### 3. Architecture
![architecture](./pic/architecture.png)

### 4. DB Model
![dbmodel](./pic/models.png)

### 5. Dependency Tree
```
lego@1.0.0 /usr/src/app
├─┬ bcrypt@5.0.1
│ ├─┬ @mapbox/node-pre-gyp@1.0.5
│ │ ├── detect-libc@1.0.3
│ │ ├─┬ https-proxy-agent@5.0.0
│ │ │ ├─┬ agent-base@6.0.2
│ │ │ │ └─┬ debug@4.3.1
│ │ │ │   └── ms@2.1.2
│ │ │ └─┬ debug@4.3.1
│ │ │   └── ms@2.1.2
│ │ ├─┬ make-dir@3.1.0
│ │ │ └── semver@6.3.0
│ │ ├── node-fetch@2.6.1
│ │ ├─┬ nopt@5.0.0
│ │ │ └── abbrev@1.1.1
│ │ ├─┬ npmlog@4.1.2
│ │ │ ├─┬ are-we-there-yet@1.1.5
│ │ │ │ ├── delegates@1.0.0
│ │ │ │ └─┬ readable-stream@2.3.7
│ │ │ │   ├── core-util-is@1.0.2
│ │ │ │   ├── inherits@2.0.3 deduped
│ │ │ │   ├── isarray@1.0.0
│ │ │ │   ├── process-nextick-args@2.0.1
│ │ │ │   ├── safe-buffer@5.1.2 deduped
│ │ │ │   ├─┬ string_decoder@1.1.1
│ │ │ │   │ └── safe-buffer@5.1.2 deduped
│ │ │ │   └── util-deprecate@1.0.2
│ │ │ ├── console-control-strings@1.1.0
│ │ │ ├─┬ gauge@2.7.4
│ │ │ │ ├── aproba@1.2.0
│ │ │ │ ├── console-control-strings@1.1.0 deduped
│ │ │ │ ├── has-unicode@2.0.1
│ │ │ │ ├── object-assign@4.1.1 deduped
│ │ │ │ ├── signal-exit@3.0.3
│ │ │ │ ├─┬ string-width@1.0.2
│ │ │ │ │ ├── code-point-at@1.1.0
│ │ │ │ │ ├─┬ is-fullwidth-code-point@1.0.0
│ │ │ │ │ │ └── number-is-nan@1.0.1
│ │ │ │ │ └── strip-ansi@3.0.1 deduped
│ │ │ │ ├─┬ strip-ansi@3.0.1
│ │ │ │ │ └── ansi-regex@2.1.1
│ │ │ │ └─┬ wide-align@1.1.3
│ │ │ │   └─┬ string-width@2.1.1
│ │ │ │     ├── is-fullwidth-code-point@2.0.0 deduped
│ │ │ │     └─┬ strip-ansi@4.0.0
│ │ │ │       └── ansi-regex@3.0.0
│ │ │ └── set-blocking@2.0.0
│ │ ├─┬ rimraf@3.0.2
│ │ │ └─┬ glob@7.1.7
│ │ │   ├── fs.realpath@1.0.0
│ │ │   ├─┬ inflight@1.0.6
│ │ │   │ ├── once@1.4.0 deduped
│ │ │   │ └── wrappy@1.0.2
│ │ │   ├── inherits@2.0.3 deduped
│ │ │   ├── minimatch@3.0.4 deduped
│ │ │   ├─┬ once@1.4.0
│ │ │   │ └── wrappy@1.0.2 deduped
│ │ │   └── path-is-absolute@1.0.1
│ │ ├─┬ semver@7.3.5
│ │ │ └── lru-cache@6.0.0 deduped
│ │ └─┬ tar@6.1.0
│ │   ├── chownr@2.0.0
│ │   ├─┬ fs-minipass@2.1.0
│ │   │ └── minipass@3.1.3 deduped
│ │   ├─┬ minipass@3.1.3
│ │   │ └── yallist@4.0.0 deduped
│ │   ├─┬ minizlib@2.1.2
│ │   │ ├── minipass@3.1.3 deduped
│ │   │ └── yallist@4.0.0 deduped
│ │   ├── mkdirp@1.0.4
│ │   └── yallist@4.0.0 deduped
│ └── node-addon-api@3.2.1
├─┬ body-parser@1.19.0
│ ├── bytes@3.1.0
│ ├── content-type@1.0.4
│ ├─┬ debug@2.6.9
│ │ └── ms@2.0.0
│ ├── depd@1.1.2
│ ├─┬ http-errors@1.7.2
│ │ ├── depd@1.1.2 deduped
│ │ ├── inherits@2.0.3
│ │ ├── setprototypeof@1.1.1 deduped
│ │ ├── statuses@1.5.0 deduped
│ │ └── toidentifier@1.0.0
│ ├─┬ iconv-lite@0.4.24
│ │ └── safer-buffer@2.1.2
│ ├─┬ on-finished@2.3.0
│ │ └── ee-first@1.1.1
│ ├── qs@6.7.0
│ ├─┬ raw-body@2.4.0
│ │ ├── bytes@3.1.0 deduped
│ │ ├── http-errors@1.7.2 deduped
│ │ ├── iconv-lite@0.4.24 deduped
│ │ └── unpipe@1.0.0
│ └─┬ type-is@1.6.18
│   ├── media-typer@0.3.0
│   └─┬ mime-types@2.1.30
│     └── mime-db@1.47.0
├─┬ cors@2.8.5
│ ├── object-assign@4.1.1
│ └── vary@1.1.2
├─┬ ejs@3.1.6
│ └─┬ jake@10.8.2
│   ├── async@0.9.2
│   ├─┬ chalk@2.4.2
│   │ ├─┬ ansi-styles@3.2.1
│   │ │ └─┬ color-convert@1.9.3
│   │ │   └── color-name@1.1.3
│   │ ├── escape-string-regexp@1.0.5
│   │ └── supports-color@5.5.0 deduped
│   ├─┬ filelist@1.0.2
│   │ └── minimatch@3.0.4 deduped
│   └── minimatch@3.0.4 deduped
├─┬ express@4.17.1
│ ├─┬ accepts@1.3.7
│ │ ├── mime-types@2.1.30 deduped
│ │ └── negotiator@0.6.2
│ ├── array-flatten@1.1.1
│ ├── body-parser@1.19.0 deduped
│ ├─┬ content-disposition@0.5.3
│ │ └── safe-buffer@5.1.2 deduped
│ ├── content-type@1.0.4 deduped
│ ├── cookie@0.4.0
│ ├── cookie-signature@1.0.6
│ ├── debug@2.6.9 deduped
│ ├── depd@1.1.2 deduped
│ ├── encodeurl@1.0.2
│ ├── escape-html@1.0.3
│ ├── etag@1.8.1
│ ├─┬ finalhandler@1.1.2
│ │ ├── debug@2.6.9 deduped
│ │ ├── encodeurl@1.0.2 deduped
│ │ ├── escape-html@1.0.3 deduped
│ │ ├── on-finished@2.3.0 deduped
│ │ ├── parseurl@1.3.3 deduped
│ │ ├── statuses@1.5.0 deduped
│ │ └── unpipe@1.0.0 deduped
│ ├── fresh@0.5.2
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├── on-finished@2.3.0 deduped
│ ├── parseurl@1.3.3
│ ├── path-to-regexp@0.1.7
│ ├─┬ proxy-addr@2.0.6
│ │ ├── forwarded@0.1.2
│ │ └── ipaddr.js@1.9.1
│ ├── qs@6.7.0 deduped
│ ├── range-parser@1.2.1
│ ├── safe-buffer@5.1.2
│ ├─┬ send@0.17.1
│ │ ├── debug@2.6.9 deduped
│ │ ├── depd@1.1.2 deduped
│ │ ├── destroy@1.0.4
│ │ ├── encodeurl@1.0.2 deduped
│ │ ├── escape-html@1.0.3 deduped
│ │ ├── etag@1.8.1 deduped
│ │ ├── fresh@0.5.2 deduped
│ │ ├── http-errors@1.7.2 deduped
│ │ ├── mime@1.6.0
│ │ ├── ms@2.1.1
│ │ ├── on-finished@2.3.0 deduped
│ │ ├── range-parser@1.2.1 deduped
│ │ └── statuses@1.5.0 deduped
│ ├─┬ serve-static@1.14.1
│ │ ├── encodeurl@1.0.2 deduped
│ │ ├── escape-html@1.0.3 deduped
│ │ ├── parseurl@1.3.3 deduped
│ │ └── send@0.17.1 deduped
│ ├── setprototypeof@1.1.1
│ ├── statuses@1.5.0
│ ├── type-is@1.6.18 deduped
│ ├── utils-merge@1.0.1
│ └── vary@1.1.2 deduped
├─┬ express-session@1.17.2
│ ├── cookie@0.4.1
│ ├── cookie-signature@1.0.6 deduped
│ ├── debug@2.6.9 deduped
│ ├── depd@2.0.0
│ ├── on-headers@1.0.2
│ ├── parseurl@1.3.3 deduped
│ ├── safe-buffer@5.2.1
│ └─┬ uid-safe@2.1.5
│   └── random-bytes@1.0.0
├─┬ mysql2@2.2.5
│ ├── denque@1.5.0
│ ├─┬ generate-function@2.3.1
│ │ └── is-property@1.0.2
│ ├─┬ iconv-lite@0.6.3
│ │ └── safer-buffer@2.1.2 deduped
│ ├── long@4.0.0
│ ├─┬ lru-cache@6.0.0
│ │ └── yallist@4.0.0
│ ├─┬ named-placeholders@1.1.2
│ │ └─┬ lru-cache@4.1.5
│ │   ├── pseudomap@1.0.2
│ │   └── yallist@2.1.2
│ ├── seq-queue@0.0.5
│ └── sqlstring@2.3.2
├─┬ nodemon@2.0.7
│ ├─┬ chokidar@3.5.1
│ │ ├─┬ anymatch@3.1.2
│ │ │ ├── normalize-path@3.0.0 deduped
│ │ │ └── picomatch@2.3.0
│ │ ├─┬ braces@3.0.2
│ │ │ └─┬ fill-range@7.0.1
│ │ │   └─┬ to-regex-range@5.0.1
│ │ │     └── is-number@7.0.0
│ │ ├── UNMET OPTIONAL DEPENDENCY fsevents@2.3.2
│ │ ├─┬ glob-parent@5.1.2
│ │ │ └── is-glob@4.0.1 deduped
│ │ ├─┬ is-binary-path@2.1.0
│ │ │ └── binary-extensions@2.2.0
│ │ ├─┬ is-glob@4.0.1
│ │ │ └── is-extglob@2.1.1
│ │ ├── normalize-path@3.0.0
│ │ └─┬ readdirp@3.5.0
│ │   └── picomatch@2.3.0 deduped
│ ├─┬ debug@3.2.7
│ │ └── ms@2.1.3
│ ├── ignore-by-default@1.0.1
│ ├─┬ minimatch@3.0.4
│ │ └─┬ brace-expansion@1.1.11
│ │   ├── balanced-match@1.0.2
│ │   └── concat-map@0.0.1
│ ├── pstree.remy@1.1.8
│ ├── semver@5.7.1
│ ├─┬ supports-color@5.5.0
│ │ └── has-flag@3.0.0
│ ├─┬ touch@3.1.0
│ │ └─┬ nopt@1.0.10
│ │   └── abbrev@1.1.1 deduped
│ ├─┬ undefsafe@2.0.3
│ │ └── debug@2.6.9 deduped
│ └─┬ update-notifier@4.1.3
│   ├─┬ boxen@4.2.0
│   │ ├─┬ ansi-align@3.0.0
│   │ │ └─┬ string-width@3.1.0
│   │ │   ├── emoji-regex@7.0.3
│   │ │   ├── is-fullwidth-code-point@2.0.0
│   │ │   └─┬ strip-ansi@5.2.0
│   │ │     └── ansi-regex@4.1.0
│   │ ├── camelcase@5.3.1
│   │ ├── chalk@3.0.0 deduped
│   │ ├── cli-boxes@2.2.1
│   │ ├─┬ string-width@4.2.2
│   │ │ ├── emoji-regex@8.0.0
│   │ │ ├── is-fullwidth-code-point@3.0.0
│   │ │ └─┬ strip-ansi@6.0.0
│   │ │   └── ansi-regex@5.0.0
│   │ ├── term-size@2.2.1
│   │ ├── type-fest@0.8.1
│   │ └─┬ widest-line@3.1.0
│   │   └── string-width@4.2.2 deduped
│   ├─┬ chalk@3.0.0
│   │ ├─┬ ansi-styles@4.3.0
│   │ │ └─┬ color-convert@2.0.1
│   │ │   └── color-name@1.1.4
│   │ └─┬ supports-color@7.2.0
│   │   └── has-flag@4.0.0
│   ├─┬ configstore@5.0.1
│   │ ├─┬ dot-prop@5.3.0
│   │ │ └── is-obj@2.0.0
│   │ ├── graceful-fs@4.2.6
│   │ ├── make-dir@3.1.0 deduped
│   │ ├─┬ unique-string@2.0.0
│   │ │ └── crypto-random-string@2.0.0
│   │ ├─┬ write-file-atomic@3.0.3
│   │ │ ├── imurmurhash@0.1.4
│   │ │ ├── is-typedarray@1.0.0
│   │ │ ├── signal-exit@3.0.3 deduped
│   │ │ └─┬ typedarray-to-buffer@3.1.5
│   │ │   └── is-typedarray@1.0.0 deduped
│   │ └── xdg-basedir@4.0.0 deduped
│   ├── has-yarn@2.1.0
│   ├── import-lazy@2.1.0
│   ├─┬ is-ci@2.0.0
│   │ └── ci-info@2.0.0
│   ├─┬ is-installed-globally@0.3.2
│   │ ├─┬ global-dirs@2.1.0
│   │ │ └── ini@1.3.7
│   │ └── is-path-inside@3.0.3
│   ├── is-npm@4.0.0
│   ├── is-yarn-global@0.3.0
│   ├─┬ latest-version@5.1.0
│   │ └─┬ package-json@6.5.0
│   │   ├─┬ got@9.6.0
│   │   │ ├── @sindresorhus/is@0.14.0
│   │   │ ├─┬ @szmarczak/http-timer@1.1.2
│   │   │ │ └── defer-to-connect@1.1.3
│   │   │ ├─┬ cacheable-request@6.1.0
│   │   │ │ ├─┬ clone-response@1.0.2
│   │   │ │ │ └── mimic-response@1.0.1 deduped
│   │   │ │ ├─┬ get-stream@5.2.0
│   │   │ │ │ └── pump@3.0.0 deduped
│   │   │ │ ├── http-cache-semantics@4.1.0
│   │   │ │ ├─┬ keyv@3.1.0
│   │   │ │ │ └── json-buffer@3.0.0
│   │   │ │ ├── lowercase-keys@2.0.0
│   │   │ │ ├── normalize-url@4.5.1
│   │   │ │ └─┬ responselike@1.0.2
│   │   │ │   └── lowercase-keys@1.0.1 deduped
│   │   │ ├─┬ decompress-response@3.3.0
│   │   │ │ └── mimic-response@1.0.1 deduped
│   │   │ ├── duplexer3@0.1.4
│   │   │ ├─┬ get-stream@4.1.0
│   │   │ │ └─┬ pump@3.0.0
│   │   │ │   ├─┬ end-of-stream@1.4.4
│   │   │ │   │ └── once@1.4.0 deduped
│   │   │ │   └── once@1.4.0 deduped
│   │   │ ├── lowercase-keys@1.0.1
│   │   │ ├── mimic-response@1.0.1
│   │   │ ├── p-cancelable@1.1.0
│   │   │ ├── to-readable-stream@1.0.0
│   │   │ └─┬ url-parse-lax@3.0.0
│   │   │   └── prepend-http@2.0.0
│   │   ├─┬ registry-auth-token@4.2.1
│   │   │ └─┬ rc@1.2.8
│   │   │   ├── deep-extend@0.6.0
│   │   │   ├── ini@1.3.7 deduped
│   │   │   ├── minimist@1.2.5
│   │   │   └── strip-json-comments@2.0.1
│   │   ├─┬ registry-url@5.1.0
│   │   │ └── rc@1.2.8 deduped
│   │   └── semver@6.3.0
│   ├─┬ pupa@2.1.1
│   │ └── escape-goat@2.1.1
│   ├─┬ semver-diff@3.1.1
│   │ └── semver@6.3.0
│   └── xdg-basedir@4.0.0
└─┬ sequelize@6.6.2
  ├─┬ debug@4.3.1
  │ └── ms@2.1.2
  ├── dottie@2.0.2
  ├── inflection@1.12.0
  ├── lodash@4.17.21
  ├── moment@2.29.1
  ├─┬ moment-timezone@0.5.33
  │ └── moment@2.29.1 deduped
  ├─┬ retry-as-promised@3.2.0
  │ └── any-promise@1.3.0
  ├─┬ semver@7.3.5
  │ └── lru-cache@6.0.0 deduped
  ├── sequelize-pool@6.1.0
  ├── toposort-class@1.0.1
  ├── uuid@8.3.2
  ├── validator@10.11.0
  └─┬ wkx@0.5.0
    └── @types/node@15.6.1
```
