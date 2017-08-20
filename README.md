### step1

> git clone https://github.com/hunterlord/ng4-demo.git


### step2 

> cd ng4-demo

### step3

> npm install

### step 4

> npm run start


[gitbook 参考地址](https://hunterlord.gitbooks.io/angular/content/chuang-jian-lu-you.html) 

> 仅供参考， 部分代码并不能直接使用

### 学习es6可以提高百分之200%开发效率， 但是不使用也没关系，可以锻炼毅力

[es6教程](http://es6.ruanyifeng.com/#docs/reference)

> 深入去看set map, promise, async, let ,const 其他的可以快速阅读， 有用到再回头学习

[typescript教程](https://www.gitbook.com/book/zhongsp/typescript-handbook/details)

> 随便看， 看到实在看不懂位置就放弃，项目做不下去再继续看

### 没有jquery的时候如何生存， 请认真看下面文章

[you dont need jquery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md)

### windows 模拟终端工具 babun, 安装完就可以愉快地玩耍了

[babun下载地址](http://babun.github.io/) 

### 屏幕分割的工具其实是tmux, mac和windows用户都可以使用

```
pact install tmux
```

> 安装完还需要配置一下

```
vim ~/.tmux.conf
```
> 以下代码格式因复制有点乱， 但不影响使用

```
set -g default-terminal 'screen-256color'                                 
set -g prefix2 C-s                                                                                                                                         
bind-key -r C-h select-window -t :-                                                                                                                          
bind-key -r C-l select-window -t :+                                                                                                                          
bind h select-pane -L                                                                                                                                        
bind j select-pane -D                                                                                                                                        
bind k select-pane -U                                                                                                                                        
bind l select-pane -R                                                                                                                                        
setw -g mode-keys vi                                                                                                                                         
set -g base-index 1                                                                                                                                          
set-window-option -g pane-base-index 1                                                                                                                       
                                                                                                                                                             
set -g renumber-windows on                                                                                                                                   
                                                                                                                                                             
set -g status-bg '#666666'                                                                                                                                   
set -g status-fg '#aaaaaa'                                                                                                                                   
                                                                                                                                                             
set -g history-limit 10000                                                                                                                                   
                                                                                                                                                             
bind-key C-b send-prefix                                                                                                                                     
bind-key C-s send-prefix -2                                                                                                                                  
unbind-key C-z                                                                                                                                               
                                                                                                                                                             
if-shell "[ -f ~/.tmux.conf.local ]" 'source ~/.tmux.conf.local'                                                                                             
                                                                                                                     
bind -r H resize-pane -L 2                                                                                        
bind -r J resize-pane -D 2                                                                                        
bind -r K resize-pane -U 2                                                                                        
bind -r L resize-pane -R 2
```


### tmux 教学

#### 会话，窗口，面板
根据tmux的定义，在开启了tmux服务器后，会首先创建一个会话，而这个会话则会首先创建一个窗口，其中仅包含一个面板；也就是说，这里看到的所谓终端控制台应该称作tmux的一个面板，虽然其使用方法与终端控制台完全相同。

> tmux使用C/S模型构建，主要包括以下单元模块：

* server服务器：输入tmux命令时就开启了一个服务器。
* session会话：一个服务器可以包含多个会话。
* window窗口：一个会话可以包含多个窗口。
* pane面板：一个窗口可以包含多个面板。

#### 常用快捷键

```
#显示帮助
{前缀} ?           显示快捷键帮助
#会话相关
{前缀} d           休眠
{前缀} s           以菜单方式显示和选择会话
{前缀} L           切换回上一次的会话
#窗口相关
{前缀} c           创建新窗口
{前缀} n           选择下一个窗口
{前缀} p           选择前一个窗口
{前缀} l           最近一次活跃窗口之间进行切换
{前缀} 0~9         选择几号窗口
{前缀} ,           重命名窗口
{前缀} .           更改窗口的编号，但只能更改成未使用的编号，所以要交换窗口的话，得更改多次进行交换
{前缀} &           关闭窗口
{前缀} w           以菜单方式显示及选择窗口
{前缀} f           在所有窗口中查找内容
#面板相关
{前缀} "           模向分隔面板
{前缀} %           纵向分隔面板
{前缀} o           跳到下一个分隔面板
{前缀} x           关闭面板
{前缀} ;           切换到最后一个使用的面板
{前缀} 上下键      上一个及下一个分隔面板
{前缀} 空格键      切换面板布局
#显示时间
{前缀} t           显示时钟
```

#### 常用命令

```
## 在正常终端模式下，列出当前有哪些tmux会话
tmux ls
## 直接新建一会话，并进入
tmux
## 记编号总是不那么容易的，所以一般会在新建会话时，给会话命名，方便记忆，以后也好操作
## 新建一命名为 abc 的会话
tmux new -s abc
## 连接回以前的某个编号的 tmux 会话，编号用的是 tmux ls 命令时所列出的每一行的最前面的那个编号
tmux attach -t 编号
## 也可简写成
tmux a -t 编号
## 连接上 abc 会话
tmux attach -t abc
## 或者
tmux a -t abc
## 在正常终端模式下，使某个编号的会话强制休眠，编号用的是 tmux ls 命令时所列出的每一行的最前面的那个编号
tmux detach -t 编号
tmux detach -s 名称
## 休眠 abc 会话
tmux detach -s abc
## 重命名 abc 会话名称为 cba
tmux rename -t abc cba
##  杀死整个 cba 会话
tmux kill-session -t cba
```

#### 配置弄好后，windows下需要update一下， 比较耗时

```
#到默认安装目录，如:
C:\Users\{your user name}\.babun
#执行
update.bat
```

### MAC的同学

> vim 配置参考这篇文章, 有问题可以留言

> vim 攻略看这里， vim可以提高50%编程效率， 但是学习时间会长一些

> [vim教程](http://coolshell.cn/articles/5426.html), 请务必先看完“第一级 – 存活”然后再去安装配置

```
http://qec7.com/2017/04/12/First-Blood/
```

### vim下typescript自动格式化需要安装

```
npm i -g prettier

找到 augroup fmt ，把下面的autocmd BufWritePre * Neoformat改成

autocmd BufWritePre *.ts, *.js Neoformat

上面的Plugin ...列表下添加

Plugin 'leafgarland/typescript-vim'
Plugin 'HerringtonDarkholme/yats.vim'

保存后退出

再输入vim

输入 :PluginInstall  注意先打冒号
```





