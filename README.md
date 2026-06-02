# 智数维科技官网

本项目是一个可本地访问的静态官网，整合了：

- Auto3D Engine 平台页
- EV3D Lab 产品页
- 框架落地页
- 新能源汽车动力电池原理课堂三级页面
- 原始 Auto3D / EV3D / Mindmap 页面入口

## 本地预览

```powershell
python -m http.server 8026 -b 127.0.0.1
```

打开：

```text
http://localhost:8026/
```

## 页面结构

```text
index.html                                  公司官网首页
platform/auto3d-engine.html                 二级页：Auto3D Engine 平台
solutions/ev3d-lab.html                     二级页：EV3D Lab 产品
strategy/framework.html                     二级页：框架与落地
solutions/ev3d-lab/battery-classroom.html   三级页：动力电池原理课堂
EV3D_Lab_Web.html                           原 EV3D 三维演示页
EV3D_Lab_Mindmap.html                       原框架页
Auto3D_Engine.html                          原 Auto3D 路演页
```
