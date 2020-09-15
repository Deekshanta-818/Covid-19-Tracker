import axios from 'axios'


export const fetchData = async (country) => {

  let changeableUrl = 'https://covid19.mathdro.id/api'
  if(country) {
    changeableUrl = `https://covid19.mathdro.id/api/countries/${country}`
  }
try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios(changeableUrl)
    
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    }
    return modifiedData

} catch (error) {
    console.log(error)
}
}

export const fetchDailyData = async () => {
  try {
    const {data} = await axios('https://covid19.mathdro.id/api/daily')
   const modifiedData = data.map(dailyData => ({
     confirmed:dailyData.confirmed.total,
     deaths: dailyData.confirmed.total,
     date: dailyData.reportDate
   }))
   return modifiedData

  } catch (error) {
    console.log(error)
  }
}
export const fetchCountries = async () => {
try {
  const {data:{countries}} = await axios('https://covid19.mathdro.id/api/countries')
  return countries.map(country => country.name)

} catch (error) {
  console.log(error)
}
}