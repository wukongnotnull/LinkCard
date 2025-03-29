# LinkCard

## 项目简介
LinkCard 是一款轻量级的数字名片应用，专注于为用户提供简单而强大的个性化数字名片解决方案。它采用纯前端技术栈构建，无需后端服务支持，让用户可以轻松创建和分享个人数字名片。

## 自定义域名
> 提示：wukongnotnull.tech 是我自己的域名，你可以使用自己的域名来访问你的数字名片。
如果你想使用自己的域名来访问你的数字名片，可以按照以下步骤进行操作：
1. 购买一个域名，例如：`wukonnotnull.tech`。
2. 在域名提供商的后台，找到域名解析设置。
3. 添加两条 A 记录，将域名指向 GitHub Pages 提供的 IP 地址。
   - 记录类型：A
   - 主机记录：@
   - 值：185.199.108.153
   - 记录类型：A
   - 主机记录：@
   - 值：185.199.109.153
   - 保存设置。
4. 等待 DNS 解析生效，大约需要几分钟时间。
5. 在域名提供商的后台，找到域名设置。
6. 现在，你可以通过 `wukongnotnull.tech` 访问你的数字名片。 


## 在线预览
- 演示地址：[https://wukongnotnull.tech/](https://wukongnotnull.tech)

## 功能特点
- **个性化名片创建**：支持自定义姓名、职位、公司、签名等信息
- **多模板支持**：提供多种精美的卡片模板供选择
- **实时预览**：编辑时可实时预览效果，所见即所得
- **二维码分享**：自动生成包含名片信息的二维码，方便快速分享
- **社交媒体整合**：支持添加各类社交媒体账号链接
- **响应式设计**：完美适配各种设备屏幕尺寸

## 技术栈
- **前端框架**：Bootstrap 5.3.0
- **UI组件**：Bootstrap Icons 1.10.0
- **字体**：Google Fonts (Noto Sans SC)
- **功能实现**：原生JavaScript
- **二维码生成**：QRCode.js

## 项目结构
```
LinkCard/
├── css/
│   └── styles.css          # 自定义样式文件
├── js/
│   └── app.js              # 应用核心逻辑
├── images/                  # 图标和图片资源
├── index.html              # 主页面
├── resume.html             # 简历页面
└── README.md               # 项目文档
```

## 快速开始
1. 克隆项目到本地：
```bash
git clone https://github.com/wukongnotnull/LinkCard.git
```

2. 使用任意HTTP服务器启动项目，例如：
- 使用Python：`python -m http.server 8000`
- 使用Node.js：`npx serve`
- 使用VS Code Live Server插件

3. 在浏览器中访问对应地址（如：http://localhost:8000）

## 使用说明
1. 打开应用后，在表单中填写您的个人信息
2. 选择喜欢的卡片模板
3. 点击"预览"按钮查看效果
4. 使用生成的二维码或链接分享给他人

## 项目效果图
![LinkCard效果图](效果图.jpg)

## 贡献指南
1. Fork 本仓库
2. 创建新的功能分支：`git checkout -b feature/AmazingFeature`
3. 提交您的更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 提交Pull Request

## 开源协议
本项目基于 MIT 协议开源，详细信息请参阅 [LICENSE](LICENSE) 文件。


## 常见问题
报错：
```bash 
 (base) wukong@MacPro LinkCard % git push origin main
枚举对象中: 32, 完成.
对象计数中: 100% (32/32), 完成.
使用 10 个线程进行压缩
压缩对象中: 100% (27/27), 完成.
写入对象中: 100% (29/29), 1.06 MiB | 20.84 MiB/s, 完成.
总共 29（差异 3），复用 0（差异 0），包复用 0
错误：RPC 失败。HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
致命错误：远端意外挂断了
Everything up-to-date
```
解决方法：
```bash
git config --global http.postBuffer 524288000
```     


## github地址
https://github.com/wukongnotnull/LinkCard


## 项目上传到 GitHub 步骤
1. 提交更改：
   ```bash
   # 添加所有更改到暂存区
   git add .
   
   # 提交更改并添加描述信息
   git commit -m "Initial commit"
   ```

2. 将本地仓库与 GitHub 仓库关联：
   ```bash
   # 替换 <repository-url> 为你的 GitHub 仓库地址
   git remote add origin <repository-url>
   
   # 验证远程仓库是否添加成功
   git remote -v
   ```

3. 将代码推送到 GitHub：
   ```bash
   # 推送到主分支并建立关联
   git push -u origin main
   
   # 如果使用 master 分支，则使用:
   # git push -u origin master
   ```
