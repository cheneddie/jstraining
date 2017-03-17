import React,{Component} from 'react';
 class MyInput extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
        pro_id:'商品編號',
        pro_name:'商品名稱',
        price:'商品價格',
        amount:'商品數量',
        sale_time:'上架時間',
        pro_Introduction:'商品簡介',
        art_id:'創作者ID',
        hash_tag:'分類標籤'
      };
    }
    handleChange(e) {
        let prod_id = e.target.value;
        let pro_name = e.target.value;
        let price = e.target.value;
        let amount = e.target.value;
        let sale_time = e.target.value;
        let pro_Introduction = e.target.value;
        let art_id = e.target.value;
        let hash_tag = e.target.value;
        this.setState({
        prod_id: prod_id
      });    
    }
render() {
      return <from>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <p>你好，{t_id.state.product}</p>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <p>你好，{t_id.state.product}</p>
      </from>;    }
  };
ReactDOM.render(
    <MyInput/>,
    document.getElementById('infor')
    );
