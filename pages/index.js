import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/comps/Navbar'
import Paper from '../comps/Paper'
import Footer from '@/comps/Footer'
import styles from '../styles/Home.module.css';
import SideBar from '@/comps/Sidebar'

export default function Home() {
  return (
    <>
      <title>
        Dashboard | DataViewer
      </title>
      <div>
        <Navbar />
      </div>
      <div className={styles.geral}>
        <SideBar />
        <Paper />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
