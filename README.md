# 🎟 WTM Asturias 2019

[Live](http://wtm.gdgasturias.com)

## 🚧 Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## ⚙️ Configuration

You must add the firebase config on _plugins/firebase.js_ in order to make the web work with the following things enabled:

- Authentication:
  - Anonymous
  - Email and password
- Firestore
- Cloud Store
