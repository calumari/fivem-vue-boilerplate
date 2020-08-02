# fivem-vue-boilerplate
## Notice
I am no longer involved in FiveM and apart from the occasional dependency bump this project is unmaintained. PRs highly encouraged!

## Quick start
You need [vue-cli](https://cli.vuejs.org/) 3.x.
```
npm install -g @vue/cli
```
### 1. Clone repo
```
git clone https://github.com/calumari/fivem-vue-boilerplate.git html
```

### 2. Install dependencies
```
cd html
npm install
```

### 3. Build
```
npm run build
```

### 4. Add to your resource manifest!
```
...

files {
    'html/dist/index.html'
}

ui_page 'html/dist/index.html'
```
## Commands
### Run locally for development
```
npm run serve
```
