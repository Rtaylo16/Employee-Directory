import React from 'react';
import Tabledata from "./components/tabledata";


// class filterdata extends Component{
// state = {
//     search: ''

// };

// updateSearch(event){
//     this.setState({search: event.target.value});
// }

// render(){
// let filtertable = this.props.Tabledata.filter(
//     (Tabledata) => {
//         return
//     }
// );

// <Form.Control type="text" value={this.state.search} 
// onChange={this.updateSearch.bind(this)}
// />
// }


// }

// export default filterdata;

class FilterList extends React.Component {
    render () {
      const { elements } = this.props;
      const { filterStr } = this.state;
  
      const filteredElements = elements
        .filter(e => e.includes(filterStr))
        .map(e => <li>{ e }</li>)
  
      return (
        <div>
          <input
            type="text"
            value={ filterStr }
            onChange={ e => this.setState({ filterStr: e.target.value }) } />
          <ul>
            { filteredElements }
          </ul>
        </div>
      );
    }
  }