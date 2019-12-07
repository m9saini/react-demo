import React from 'react';


class Header extends React.Component {
  constructor(props){
    super(props);//inside props of super used for 'this.props'
    this.props=props;
    
  }

  render()
  {
    console.log("---------->>",this.props)
  return (
    <div className="App">
    
      Heading...........{this.props.greeting}
      
    </div>
  );
}
}




export default HomeMain;
