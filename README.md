# 北京数据地图 智能搜索模块

这是可直接嵌入 Next.js 页面的一期“规则检索兜底”模块，解决当前搜索无结果、业务问题无响应的问题。

## 已实现能力

- 关键词与自然语言业务问题的意图识别
- 对资源名称、领域、描述、字段、标签和场景的综合匹配
- 按企业授信、车辆交通、医疗保险、养老服务、绿色低碳生成资源组合
- 无直接命中时按场景兜底推荐，并提示待拓展资源

## 接入方式

1. 将 `lib/smartSearch.ts` 与 `components/SmartSearchResults.tsx` 放到项目对应目录。
2. 在首页智能搜索提交成功后，引入并渲染：

```tsx
<SmartSearchResults query={searchQuery} resources={resources} />
```

3. `resources` 需转换为 `DataResource[]`。每项至少包含：`id`、`name`、`domain`、`description`、`fields`、`tags`、`scenarios`。

## 下一步接入 DeepSeek RAG

保留页面不变，将 `buildSearchPlan()` 中的 `matches` 替换为后端 API 返回的向量召回结果；再把资源、表、字段和场景作为上下文提交给 DeepSeek 生成“需求拆解、推荐组合、缺口识别、合规提示”。
