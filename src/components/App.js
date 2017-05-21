
import React, { Component } from 'react';
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
        { this.props.children }
      </MuiThemeProvider>
    )
  }
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     setSocket: (socket) => {
//       dispatch(setSocket(socket));
//     }
//   }
// }


// export default connect(null, mapDispatchToProps)(App)
export default App
