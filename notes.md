## Study Notes

### 关键要点

1.创建谷歌地图

2.引入火灾标记icon

3.点击出现信息浮窗

### 步骤分解

1.创建Map组件：

引入google-map-react，`rafce`快捷键创建组件框架，`Map.defaultProps`设置默认参数。

2.创建LocationMarker组件：

i.引入Icon组件和具体要使用的`fire-alert` icon，需传入参数`lat`和`lng`。

ii.在`Map`组件中引入，命名为marker，因为后面需要对数据进行筛选处理，最后再以`{标签}`的形式插入显示在父组件中。

3.获取API数据

i.在`App.js`中，从react引入`useState`和`useEffect`；

ii.使用`useState`初始化对象，在`useEffect`中获取数据：`fetch`获取API数据，`res.json()`格式化数据赋值给`eventData`。

iii.引入`useState`，在`map`需要传入的参数中加上`eventData`，对其进行遍历(map)，只对火灾事件进行标记。

```js
const fetchEvents = async () => {
  setLoading(true);
  const res = await fetch(
    "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
  );
  const { events } = await res.json();

  setEventData(events);
  setLoading(false);
};
fetchEvents();
```

> useEffect第一个参数是一个函数，组件渲染一次函数执行一次；本次使用时函数无需依赖项，第二个参数默认为[]。

4.创建Loading组件：引入图片，设置样式，导出组件。

5.创建LocationInfoBox组件：

i.在LocationInfoBox中，默认传参`info`，显示数据，设置样式。

ii.在Map组件中，对LocationInfo初始化，给LocationMarker绑定点击事件，setLocationInfo改变数据。

6.样式优化：Header组件。