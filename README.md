# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
# HCI 面试系统 (HCI_InterviewSystem_v2)

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.x-brightgreen" alt="Vue">
  <img src="https://img.shields.io/badge/Node.js-18+-green" alt="Node.js">
  <img src="https://img.shields.io/github/last-commit/ChuZihanaaa/HCI_InterviewSystem_v2" alt="最后提交">
  <img src="https://img.shields.io/github/languages/code-size/ChuZihanaaa/HCI_InterviewSystem_v2" alt="代码大小">
</p>

一个人机交互课程相关的面试系统，基于 Vue 3 开发。

## 📋 目录

- [功能特性](#功能特性)
- [快速开始](#快速开始)
  - [环境要求](#环境要求)
  - [安装与运行](#安装与运行)
- [项目结构](#项目结构)
- [使用说明](#使用说明)
- [常见问题](#常见问题)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

## ✨ 功能特性

- **面试管理**：创建和管理面试会话
- **实时交互**：提供流畅的面试体验
- **响应式设计**：适配多种设备屏幕
- **用户友好界面**：直观易用的操作界面

## 🚀 快速开始

### 环境要求

在运行本项目前，请确保你的开发环境中已安装：

- **Node.js** (版本 18 或以上) [下载地址](https://nodejs.org/)
- **npm** (通常随 Node.js 一同安装)
- **Git**

### 安装与运行

按照以下三步即可在本地启动系统：

1. **克隆代码仓库**
bash
git clone https://github.com/ChuZihanaaa/HCI_InterviewSystem_v2.git
2. **安装项目依赖**
bash
cd HCI_InterviewSystem_v2
npm install
3. **启动本地开发服务器**
bash
npm run dev
命令执行成功后，控制台会显示访问地址（通常是 `http://localhost:5173`），在浏览器中打开即可访问系统[3,4](@ref)。

## 📁 项目结构
HCI_InterviewSystem_v2/

├── public/ # 静态资源

├── src/ # 源代码

│ ├── components/ # Vue 组件
│ ├── views/ # 页面视图
│ ├── router/ # 路由配置
│ ├── assets/ # 资源文件
│ └── main.js # 项目入口
├── package.json # 项目配置和依赖
└── README.md # 项目说明


## ❓ 常见问题

**Q: 运行 `npm install` 时出现错误怎么办？**  
A: 请确保 Node.js 版本符合要求，并尝试清除缓存后重新安装：
bash
npm cache clean --force
npm install

**Q: 端口已被占用怎么办？**  
A: 可以指定其他端口：
bash
npm run dev 
