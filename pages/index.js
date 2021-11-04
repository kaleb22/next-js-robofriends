import styles from '../styles/Home.module.css'
import 'tachyons'
import MainPage from '../components/mainPage'
import { Component } from 'react'

class Home extends Component {
  render() {
    return <MainPage { ...this.props } />
  }
}

export default Home;

export const getStaticProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      robots: data
    }
  }
}
