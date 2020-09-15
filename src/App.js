import React from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api/index'
import coronaImage from './images/image.png'
import styles from './App.module.css';

class App extends React.Component {

  state = {
    data:{},
    country:''
  }

  async componentDidMount() {
   const response = await fetchData()
   
   this.setState({data:response})
  }

  handleCountryChange = async (country) => {
const fetchedData = await fetchData(country)

this.setState({data:fetchedData,country:country})

  }

  render() {
    const {data} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage}  alt='Covid-19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={this.state.country} />
      </div>
    )
  }
}

export default App;
