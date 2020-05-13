# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev  or npm run server
```

# 后端介绍
# 西安邮电大学电子信息工程学院知识图谱项目指北 version 0.1 
Author: mingxu.geng
Date: 2019.12.21

## Intro
这篇指北是为了让想加入我们的新人能够更快，更好，更容易的加入到项目中。此篇指北的思路根据我们平常的工作log的顺序来编写，你可以通过log看到我们日常工作，后面我会告诉你如何加入到我们的协同中。顺序可能不是知识的顺序，后期有精力在重新排版。语文不好，见谅。 -_-

## Log
下面是我们最近的log，后面的小节会选出来需要的知识点。这里贴出log是让大家能够了解我们的工作模式。新人入内不需要日报，但是可以参考我们日报作为方向。

github公开仓库删去log部分。

## 重点
上面的内容基本都是铺垫，现在我逐一介绍一些知识点。在这之前，请在心中默念三遍：不懂得地方问百度。

### 虚拟机环境
虚拟机：在物理机上使用虚拟化技术安装不同的操作系统环境。具体定义请百度。
这里的虚拟机环境指的是一个课程中的资料，**有一整套知识图谱的虚拟机环境和一些课件，资料比较大，20G左右，可以联系我们拷贝一下。**

课件在我们的github仓库中也有。课件中的内容是一些算法的模型的发展史，其实无需扣的很细，有需要的时候反复读就好了。

同时，这个[仓库](https://github.com/npubird/KnowledgeGraphCourse)中有汪鹏老师的完整版课件。

### git、github
git是一个代码协同的工具，相关资料移步百度。
我们协同的github仓库是下面这个地址，上面有一些我们沉淀的知识和指引，可以给你带来一些参考。这个仓库会一直更新，如果你想分享你的知识你可以一件一个PR(Push Request)，如果不了解，可以学习一下github的使用。
https://github.com/whip1ash/KnowledgeMapReadme 

### homebrew (Mac)
Mac的包管理工具。

### cmder (Windows)
Windows的一个命令行工具。

### markdown
一种标记性语言，此文档就是使用Markdown编写的，我们协同的log也是使用该语言编写。 语法非常简单，可以学习一下。
下面这个网址是learnxinyminutes，可以找到自己需要的语言然后进行快速学习。

>Learn X in Y minutes
Where X=markdown

>Markdown was created by John Gruber in 2004. It’s meant to be an easy to read and write syntax which converts easily to HTML (and now many other formats as well).

>Markdown also varies in implementation from one parser to a next. This guide will attempt to clarify when features are universal or when they are specific to a certain parser.

https://learnxinyminutes.com/

### VirtualBox
一个虚拟机软件，还有VMware等

### mangodb、redis、mysql、neo4j
mangodb和redis都是非关系型数据库。
mysql 关系型数据库。
neo4j 构建知识图谱所用的图数据库。

初期不需要了解，后面碰到了在进行学习就好。


## 知识储备
上面的知识都是比较杂的环境和组件知识，关于知识储备我觉得只有一点吧。

**Python3**

https://learnxinyminutes.com/docs/python3/

不懂的知识可以再扩展就好了。

## 结语

有的时候并没有你想象的那么困难，都是一些比较基础简单的东西。

#2020/03/04 碰头会
---
1. **为啥做打标平台**
	* 有针对性的建立自己的训练集
2. **造轮子**
	* 打标平台？（我没听清楚，华东师范的打标平台好像将实体识别跟关系抽取的做到一起去了，只需要改一下输入文本跟实体关系，还有输出的格式
3. **平台基本功能**
	* 输出两类训练集
		1. 实体识别训练集
		2. 关系抽取训练集
4. **实体识别基本流程**
	* 界定实体种类？
	* 标注训练集
	* 训练模型
	* 使用模型识别输入的语句中是否有实体
5. **关系抽取基本流程**
	* 对于输入文本先检测实体，标注实体所在位置
	* 界定几类实体之间的关系用于打标
	* 若输入文本中只有两个实体，若多个实体
	* 标注训练集
	* 训练模型
	* 使用模型识别输入的语句中是否有实体
6. **Django**
	* 不会，需要学习，可以搭建在服务器上
7. **架构**
	* 任务分发问题
		* mysql事务
		* redis缓存
		* 消息队列
	* 打标平台分两类
8. **数据格式**
	* 解决id的问题--是否对后期处理训练产生阻碍
	* 句子划分? 
    ```
	''.spilt
	```
	* 需要打标时标注head entity跟tail entity的位置（或许可以机器实现？
