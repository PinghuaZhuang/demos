import React from 'react'
class Son extends React.Component{
  shouldComponentUpdate(nextProps,nextState){
     //旧的number Object对象的number属性 == 新的number Object对象的number属性
      if(nextProps.numberObject.number == this.props.numberObject.number){
        return false
      }
      return true
  }
  render(){
    const {index,numberObject,handleClick} = this.props
    //在每次渲染子组件时，打印该子组件的数字内容
    console.log(numberObject.number);
    return <h1 onClick ={ handleClick.bind( this, index ) }>{numberObject.number}</h1>
  }
}
class Father extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      numberArray:[{number:0 /*对象中其他的属性*/},
                   {number:1 /*对象中其他的属性*/},
                   {number:2 /*对象中其他的属性*/}
                   ]
    }
  }
  //点击后使numberArray中数组下标为index的数字值加一，重渲染对应的Son组件
  handleClick (index) {
     let preNumberArray = this.state.numberArray
     //把做修改的number Object先拷贝到一个新的对象中，替换原来的对象
     preNumberArray[index] = Object.assign({},preNumberArray[index])
     //使新的number Object对象的number属性加一，旧的number Object对象属性不变
     preNumberArray[index].number += 1;
     this.setState({numberArray:preNumberArray})
  }
  render(){
    return(<div style ={{margin:30}}>{
              this.state.numberArray.map(
                (numberObject,key) => {
                 return <Son
                           key = {key}
                           index = {key}
                           numberObject ={numberObject}
                           handleClick ={this.handleClick.bind( this )}/>
                }
                )
              }
           </div>)
  }
}
export default Father
