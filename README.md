# C2C

> 一键转换（简体|繁体）项目到（繁体|简体）项目

## 使用

将需要转换的项目、文件夹等资源复制到根目录下的 `/input/` 文件夹下（如果不存在需手动创建），运行 `npm run start` 即可开始转换，期间会自动跳过二进制文件的转换，以免发生错误

## 忽略文件或文件夹

在根目录下的 `.c2cignore` 中添加需要忽略的内容即可，语法同 [.gitignore](https://git-scm.com/docs/gitignore)

## 转换方法

> 修改根目录下的 `config.js` 文件中的 `type` 选项，可以是以下参数

| Function name                   | Translation                               |
| ------------------------------- | ----------------------------------------- |
| `hongKongToSimplified`          | Hong Kong to Simplified Chinese           |
| `simplifiedToHongKong`          | Simplified Chinese to Hong Kong           |
| `simplifiedToTraditional`       | Simplified Chinese to Traditional Chinese |
| `simplifiedToTaiwan`            | Simplified Chinese to Taiwan              |
| `simplifiedToTaiwanWithPhrases` | Simplified Chinese to Taiwan with phrases |
| `traditionalToHongKong`         | Traditional Chinese to Hong Kong          |
| `traditionalToSimplified`       | Traditional Chinese to Simplified Chinese |
| `traditionalToTaiwan`           | Traditional Chinese to Taiwan             |
| `taiwanToSimplified`            | Taiwan to Simplified Chinese              |
| `taiwanToSimplifiedWithPhrases` | Taiwan to Simplified Chinese with phrases |
