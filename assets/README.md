# assets/

放你的头像照片到这个文件夹，例如 `profile.jpg`。

然后打开 `index.html`，找到这一段（在 Hero 头图区）：

```html
<div class="avatar">YZ</div>
```

换成：

```html
<div class="avatar"><img src="assets/profile.jpg" alt="Yifei Zhang"></div>
```

照片会自动裁剪成圆形。建议用正方形、至少 400×400px 的照片效果最好。
