# 【小程序主页】抽取幸运儿 - 随机抽取一列下单元格的人名

## 💡 小程序信息

> 😆 这是由为爱发电的「vika 实验室」荣誉出品的小程序。

> 😆 研发大大们都在攻坚，一些小场景小工具，由非研发部门的小伙伴们放飞自我，灵魂敲码～

> (￣ ω ￣(￣ ω ￣〃 (￣ ω ￣〃)ゝ

> 😆 大家可以把我们当成第三方开发者看待，一些使用问题或者意见反馈，请在本页面反馈哦~~不然我们可能看不到

发布人： vika 实验室

发布日期：2022 年 1 月 13 日

最新版本：v0.0.11

**🎨 功能介绍**

本小程序源自于我们公司内部的年会抽奖需求，为了达到 “drama” 的效果，随机抽取的结果把人名拆成了“姓”与“名”，先抽取“姓”再抽取“名”。

以往都是需要找到一个外部的工具，然后从头搭建，这个过程比较繁琐，且好多都需要额外付费。

使用本小程序后，只需要两列：一列来存放要抽取的人名（建议中文名），另一列用来标记中奖人，剩下的事情就交给小程序来随机抽取，配合视图的能力，还能快速生成中奖人名单以及不允许重复参与抽选。

**🚀 快速上手（现成模板）**

为了让大家可以快速体验到这款小程序的用途，这里已经提前做好了一个维格表模板，浏览器打开即可体验

体验地址：https://vika.cn/share/shrGLKPNG0NqrVjuq24Eb

**❓ 如何在自己空间站内使用**

1. 首先你需要进入上方的模板链接，将我的模板另存到你的空间站里
2. 另存完之后，点击表格右上角的「小程序」，找到该小程序
3. 根据指引先选择一列（用来确定要参与抽奖的人），再选择一个「勾选」列（用来标记被抽中的人）
4. 选择完毕之后就可以点击下方开始抽奖了

**🙋‍♂️ 常见问题**

**能否把已经被抽中的人剔除出去不能再抽？**

答：你可以对抽奖的视图添加一个「筛选」，筛选「勾选」列为“空”，这样只要被抽中的人就会被标记并被筛出当前视图。当然你还能创建一个新的视图来确定中奖名单，添加一个「筛选」，筛选「勾选」列为“勾选”，这样新创建的视图就是你的中奖名单。

**如何将「抽取幸运儿」小程序添加到自己空间站的其他表格里？**
答：「抽取幸运儿」已经上架到小程序中心，你可以直接安装。
