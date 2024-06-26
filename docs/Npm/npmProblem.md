---
sidebar_label: 'npm小结'
sidebar_position: 3
id:npmProblem
title:使用npm过程中遇到的问题解决
---
#### 1.解决 npm ERR! could not determine executable to run
```

在当前项目文件下，操作如下两步就可；

删掉git下的hooks的所有文件 rm -rf .git/hooks

重新安装 npm install