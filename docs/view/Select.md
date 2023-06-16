

<div>
<div class="example">基础下拉框的值：{{ value }}</div>
<ca-select v-model="value" :options="optionsList" placeholder="喜欢什么水果?"  @input="selectInput" ></ca-select>
</div>
<div class="example">定义选项字段的下拉框的值：{{ value2 }}</div>
<ca-select v-model="value2" optionsLabelKey="name" optionsValueKey="color" :options="optionsList2" placeholder="喜欢什么颜色?"></ca-select>
<div class="example">禁用下拉框的值：{{ value3 }}</div>
<ca-select v-model="value3" disabled :options="optionsList3"></ca-select>
</div>

<script>
  import Vue from 'vue'
  import CaSelect from '../../src/packages/select'
  import "../../src/lib/theme-chalk/icon.css";
  import "../../src/lib/theme-chalk/ca-icon.css";
  Vue.use(CaSelect)
  export default {
    data() {
      return {
        value:'',
        value2:'',
        value3:'',
        optionsList: [
          {
            value: "apple",
            label: "苹果",
          },
          {
            value: "banana",
            label: "香蕉",
          },
          {
            value: "watermelon",
            label: "西瓜",
          },
          {
            value: "orange",
            label: "橘子",
          },
          {
            value: "pear",
            label: "梨子",
          },
        ],
        optionsList2: [
          {
            name:'红色',
            color:'red'
          },
          {
            name:'绿色',
            color:'green' 
          },
          {
            name:'蓝色',
            color:'blue' 
          }
        ],
        optionsList3:[]
      }
    },
    methods:{
      selectInput() {
        console.log('selectInput')
      }
    }
  }
</script>

<style>
  .example {
    margin: 10px 0px;
  }
</style>

---
#### Select Attributes

| 参数         | 说明        | 类型           | 可选值         | 默认值         |
| :---        |  :----      | :----         | :----         | :----         |
| v-model     | 绑定值       | string/number |   - |  -|
| placeholder     | 输入框占位文本       | string |   - |  - |
| options     | 选项列表       | array |   - |  [] |
| optionsLabelKey     | 选项名指定的字段       | string |   - |  label |
| optionsValueKey     | 选项值指定的字段       | string |   - |  value |
| disabled     | 禁用       | boolean |   - |  false |

#### options Attributes
| 参数         | 说明        | 类型           | 可选值         | 默认值    
| :---        |  :----      | :----         | :----         | :----         |
| label     | 选项名       | string/number |   - |  - |
| value     | 选项值       | string/number |   - |  - |

#### Select Events
| 事件名称      | 说明 |    回调参数    |
| :---        |  :----      | :----         |
| input      | 在 Select 值改变时触发       |   ( value: string/number)   |