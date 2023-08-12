import React,{Component} from 'react'
// import UserCard from './components/UserCard'
import AddUser from './components/AddUser'
import Users from './components/Users'
// import EditUser from './components/EditUser'
import { connect } from 'react-redux'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      users:props.users.users
    }

  }

  // addUser=(user)=>{
  //   this.setState({
  //     users: [...this.state.users,user]
  //   })
  // }

  // deleteUser=(id)=>{
  //   const deleted = this.state.users.filter((user,index)=> index != id)
  //   this.setState({
  //     users: deleted
  //   })
  // }

  // editUser = (id,editdData )=>{
  //   this.setState({
  //     users : this.state.users.map((user) => user.id === id ? editdData : user)
  //   })

  // }

  



  render(){
    return(
      <>
    <div className='row flex-wrap container-fluid'>
      <div className='col-md-3'>
          <AddUser adduser={this.addUser}/>
        </div>
        <div className='col-md-9'>
          <Users usersData={this.props.users} deleteUser={this.deleteUser} editData={this.editUser}/>
        </div>
      </div>
      
    </>
    )
  }
}

const mapState=(state)=>{
  return{
    users:state.users.users
  }
}



export default connect(mapState)(App)