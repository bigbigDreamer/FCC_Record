# 应用视觉设计指导

> 1.可以使用U标签给文字添加下划线
>> 例如：`<p> <u>武则天是女帝</u> </p>` <p> <u>武则天是女帝</u> </p>

> 2.可以使用s标签给文字添加删除线
>> 例如：`<p> <s>你是蔡徐坤</s> </p>` <p> <s>你是蔡徐坤</s> </p>

> 3.可以使用`text-transform`给文本添加大写效果
>> 例如：`<p style="text-transform: capitalize"> ericwang </p>` <p style="text-transform: capitalize"> ericwang </p>
<table>
 <thead>
    <tr>
      <th>Value
      </th>
      <th>Result
      </th>
    </tr>
 </thead>

 <tbody>
    <tr>
      <td>lowercase</td>
      <td>"ericwang"</td>
    </tr>
    <tr>
      <td>uppercase</td>
      <td>"ERICWANG"</td>
    </tr>
    <tr>
      <td>capitalize</td>
      <td>"EricWang"</td>
    </tr>
    <tr>
      <td>initial</td>
      <td>使用默认值</td>
    </tr>
 </tbody>
</table>

> 4.调整颜色的色像（hsl()函数）

- 色相值：色环里面对应的0~360度的角度值；
- 饱和度：指色彩的纯度，也就是颜色里面的灰色的占比越高越纯，取0~100%；
- 亮度：决定颜色的明暗程度，也就是颜色里面的白色或灰色；
- 例如：`hsl(0,100%,50%)`

> 5.创建线性渐变
- `linear-gradient(gradient-direction, color1, color2, color3......)`