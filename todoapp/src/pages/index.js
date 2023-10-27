import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/material'
import TaskTable from '@/component/taskTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Box sx={{height:"100vh"}} >

      <TaskTable></TaskTable>
    </Box>
    </>
  )
}
