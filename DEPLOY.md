# Deploy

本地改完后：

```bash
npm install
npm run build
rm -rf docs && mkdir docs && cp -a dist/. docs/
git add -A && git commit -m "deploy" && git push
```

GitHub Pages 源：`master` / `docs`。
