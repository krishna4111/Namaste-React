import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //in here the super props is important
    super(props);
    this.state = {
      userInfo: {
        name: "dummyName",
        location: "Default",
        avatar_url: "https://dummyUrl",
      },
    };

    // console.log(this.props.name, " child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name, " child component did mount");
    const data = await fetch("https://api.github.com/users/krishna4111");
    const user = await data.json();

    this.setState({
      userInfo: user,
    });
    console.log("user details", user);
  }

  componentDidUpdate() {
    console.log("component did Update");
  }
  render() {
    // console.log(this.props.name, " child Render");

    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: krishna@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
