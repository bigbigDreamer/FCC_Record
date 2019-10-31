# 公司开发常用Git命令

## 常用【日常必须】

### git开发前提

检查自己的配置，这里小小的科普一下，用户名跟用户邮箱会影响你在`github`的提交记录。


```bash
# 查看现在的git环境详细配置

$ git config -l

# 查看系统的config

$ git config --system --list

# 查看当前用户的配置

$ git config --global --list

## 查看当前仓库的配置信息

$ git config --local --list

```

### 设置用户名与邮箱

```bash

$ git config --global user.name "名称"
$ git config --global user.email "your email"

```

**注意：** 如果你想在当前的项目设置特定的用户名以及用户密码，请不要加`--config`，默认`--local`

### Git工作原理

![alt](https://images2017.cnblogs.com/blog/63651/201709/63651-20170905201017069-171460014.png)

### 初始化仓库

```bash
$ git init [project-name]
```

### 克隆仓库

```bash
$ git clone [url]
```

### 添加文件与目录

```bash
$ git add [file|dir|.]
```

**注意：** 其实`添加文件也只是把文件添加至暂存区，如果想取消，可使用如下命令：`

```bash
$ git reset HEAD <file>

```
### 

