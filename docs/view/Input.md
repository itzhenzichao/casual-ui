
<div>
    <div class="example">可清空的输入框的值：{{ value }}</div>
    <ca-input 
        @change="handleChange"
        @input="handleInputChange"
        v-model="value"
        placeholder="输入你喜欢的内容吧"
        suffix-icon=""
        prefix-icon=""
        clearable
        type=""
    />
    <div class="example">密码输入框的值：{{ value1 }}</div>
    <ca-input  
        v-model="value1"
        suffix-icon=""
        prefix-icon=""
        show-password
    />
    <div class="example">带icon的输入框的值：{{ value2 }}</div>
    <ca-input  
        v-model="value2"
        suffix-icon="ca-icon-date"
        prefix-icon="ca-icon-search"
    />
    <div class="example">禁用状态的输入框</div>
    <ca-input  
        v-model="value2"
        :disabled="true"
    />
    <div class="example">限制字数的输入框</div>
    <ca-input  
        v-model="value4"
        :maxlength="4"
        show-word-limit
    />
</div>

---
#### Input Attributes

| 参数         | 说明        | 类型           | 可选值         | 默认值         |
| :---        |  :----      | :----         | :----         | :----         |
| v-model     | 绑定值       | string/number |   - |  -|
| type     | 类型       | string |   text，textarea 和其他 原生 input 的 type 值 |  text|
| suffix-icon     | 输入框尾部图标       | string |   - |  - |
| prefix-icon     | 输入框头部图标       | string |   - |  - |
| placeholder     | 输入框占位文本       | string |   - |  - |
| clearable     | 是否可清空      | boolean |   - |  false |
| show-password     | 是否显示切换密码图标       | boolean |   - |  false |
| readonly     | 原生属性，是否只读       | boolean |   - |  false |
| disabled     | 禁用       | boolean |   - |  false |
| maxlength     | 原生属性，最大输入长度       | number |   - |  - |
| show-word-limit     | 是否显示输入字数统计       | boolean |   - |  false |

#### Input Events

| 事件名称      | 说明 |    回调参数    |
| :---        |  :----      | :----         |
| change      | 仅在输入框失去焦点或用户按下回车时触发       |    (value: string/number)   |
| input      | 在 Input 值改变时触发       |   ( value: string/number)   |
---
<script>
  import Vue from 'vue'
  import Input from '../../src/packages/input'
  import "../../src/lib/theme-chalk/icon.css";
  import "../../src/lib/theme-chalk/ca-icon.css";
  Vue.use(Input)
  export default {
    data(){
        return {
            value:'',
            value1:'',
            value2:'',
            value4:'',
        }
    },
    methods: {
        handleChange(val) {
        console.log("handleChange", val);
        },
        handleInputChange(val) {
        console.log("handleInputChange", val);
        },
    },
    // components: { Input }
  }
</script>
<style>
.example {
    margin: 10px 0px;
}
</style>