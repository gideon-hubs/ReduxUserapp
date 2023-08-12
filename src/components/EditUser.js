import React, { Component } from 'react'
import { editUser,closeModal } from '../store/userReducer'
import { connect } from 'react-redux'

 class EditUser extends Component {

    constructor(props){
        super(props)
        this.state={
            id : props.editInfo.id,
            name: props.editInfo.name,
            email : props.editInfo.email,
            gen : props.editInfo.gen

        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.name == '' && this.state.email == ''&& this.state.gen == ''){
            return
        }

        this.props.editData({id:this.state.id, editData:this.state})
        // console.log(this.state)

        this.setState({
            name:'',
            email:'',
            gen:'',
        })
        this.props.closeModal()

    }



  render() {
    return (
      <div className='px-4 py-4 '>
        <h3>Edit user info</h3>
        <form action="" onSubmit={this.handleSubmit}>
            <div className='form-group my-3'>
                <label htmlFor="">Name</label>
                <input type="text" className='form-control' name='name' onChange={this.handleChange} value={this.state.name}/>
            </div>
            <div className='form-group my-3'>
                <label htmlFor="">Email</label>
                <input type="text" className='form-control' name='email' onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div className='form-group my-3'>
                <label htmlFor="">Gen</label>
                <input type="number" className='form-control' name='gen' onChange={this.handleChange} value={this.state.gen}/>
            </div>
            <div className='form-group my-3'>
                <input type="submit" className='form-control btn btn-primary' value={'submit'}/>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatch=(dispatch)=>{
    return {
        editData:(id, data)=>{
            dispatch(editUser(id,data))
        },
    }
}


export default connect(null,mapDispatch) (EditUser)