import Image from 'next/image'
import logoKutim from 'public/logoKutim.png'
import gapuraSangkima from 'public/gapuraSangkima.jpeg'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react';
import { Doughnut, Paper, Grid } from '@/components/chartjs-components/chartjs-components';
import parse from 'html-react-parser';
import balaiDesa from 'public/balaidesa.jpeg'
import gorBultang from 'public/gorbultang.jpeg'
import indomaret from 'public/indomaret.jpeg'
import kantorDesa from 'public/kantordesa.jpeg'
import lapanganBasket from 'public/lapanganbasket.jpeg'
import kantorPertamina from 'public/kantorpertamina.jpeg'
import lapanganFutsal from 'public/lapanganfutsal.jpeg'
import sangattaField from 'public/sangattafield.jpeg'
import lapanganVoli from 'public/lapanganvoli.jpeg'
import posPenyuluhan from 'public/pospenyuluhan.jpeg'
import mangrove from 'public/mangrove.jpeg'
import tamanBermainAnak from 'public/tamanbermainanak.jpeg'
import { Spinner } from '@/components/flowbite-components/flowbite-components'

const dataStat = {
    labels: [
      'Perempuan',
      'Laki-Laki',
  ],
  datasets: [{
    data: [1502, 1664],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
  };

  async function getData() {
    const res = await fetch(`${process.env.URL_LOCAL}/api/latestblog`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

const Home = async () => {
  const data = await getData()

  return (
    <>
    {/* Jumbotron */}
    <section className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/bLQvtQr/teluk-lombok2.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Selamat Datang di Desa Sangkima</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Temukan informasi dan berita terkini terkait desa kami.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Explore
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </a> */}
        </div>
      </div>
    </section>

    {/* data */}
    <div className="flex justify-center items-center invisible sm:visible">
      <div className="bg-white m-12 max-w-5xl py-4 mx-12 rounded-lg border-gray-200 dark:bg-gray-900 shadow-lg shadow-green-100/50">
        <div className="text-cyan-700 max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <div className="mx-12 grid grid-cols-3 gap-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 w-10 h-10">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
            <p className="text-2xl text-green-500 font-extrabold pt-1">1664 Pria</p>
            <p className="text-2xl text-green-500 font-extrabold pt-1">1502 Perempuan</p>
          </div>
        </div>
      </div>
    </div>

    {/* tentang sangkima */}
    <div id='home' className="flex justify-center items-center
    sm:mt-5
    ">
      <span className="font-bold text-3xl text-green-700 mr-3">Tentang</span>
      <span className="font-bold text-3xl text-gray-700 mr-3">Sangkima</span>
    </div>
    <div className="grid grid-cols-1 gap-2 mx-12 py-10 mt-5 gap-12
    sm:grid-cols-2 sm:mx-12
    ">
      <div className="col-span-1 object-center
      sm:ml-16 sm:mt-5">
        <Image width={520} height={520} src={gapuraSangkima} alt="gapaura sangkima" />
      </div>
      <div className="col-span-1 mt-5">
        <p className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
          Desa Sangkima 
        </p>
        <p className="mt-6 mb-8 text-justify text-gray-500 font-normal text-l
        sm:mr-12 sm:pr-12
        ">
          Sekitar Tahun 1970, Sangkima merupakan sebuah kampung 
          dengan segala kegiatan administrasi berpusat di Kota Bontang 
          sebagai ibukota kecamatan. Pada saat itu, Kampung Sangkima 
          dipimpin oleh Bapak Untung Suropati.
          Tahun 1972 Pertamina mulai masuk dan beroperasi di daerah 
          Sangkima. Sebelum itu wilayah Sangkima pernah dijadikan lahan 
          penambangan oleh Belanda pada Tahun 1932 yang kemudian 
          ditinggalkan. Kisaran Tahun 1972-1973 warga Sangkima terjangkit 
          penyakit beri-beri dan kolera yang sempat menewaskan 30 orang. 
          Hingga Tahun 1982 pusat administrasi masih berada di Bontang, 
          pada saat itu pemerintahan kampung sempat terhenti karena 
          kepala kampung memiliki tugas ganda yaitu sebagai kepala 
          kampung serta merangkap menjadi koordinator hansip.

        </p>
          <Link href="/profile">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Lebih Lanjut
              </span>
            </button>
          </Link>
      </div> 
    </div>

    {/* fasilitas */}
    <div>
            <div id='fasilitas' className="mx-12 mt-12">
                <span className="font-bold text-3xl text-gray-700 mr-3">Galeri</span>
            </div>
            <div className="mx-12 py-10 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={768} src={balaiDesa} alt="gapaura sangkima" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={500} src={gorBultang} alt="gor bultang" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={566} src={indomaret} alt="indomaret" />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={598} src={kantorDesa} alt="kantor desa" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={854} src={lapanganBasket} alt="lapangan basket" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={382} src={kantorPertamina} alt="kantor pertamina" />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={850} src={lapanganFutsal} alt="lapangan futsal"/>
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={464} src={sangattaField} alt="sangatta field" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={520} src={lapanganVoli} alt="lapangan voli" />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={422} src={posPenyuluhan} alt="pos penyuluhan" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={1024} src={tamanBermainAnak} alt="taman bermain anak" />
                </div>
                <div>
                  <Image className="transition duration-300 ease-in-out hover:scale-110 h-auto max-w-full rounded-lg" width={610} height={388} src={mangrove} alt="mangrove" />
                </div>
              </div>
            </div>
    </div>

    {/* blog */}
    <div id='berita' className="mx-12 mt-12">
      <span className="font-bold text-3xl text-gray-700 mr-3">Berita</span>
    </div>
    <div className="overflow-x-auto mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 mx-12">
      {
        data ? (
          data?.map((blog) => (
            <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={blog._id} >
              <a href="#">
                <Image className="rounded-t-lg" src={blog.image} alt={blog.title} width={700} height={400}/>
              </a>
              <div className="p-5">
                <a href={`/blog/${blog._id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                </a>
                <div className="h-[144px] text-elipsis overflow-hidden mb-3 font-normal text-gray-700 ">{parse(blog.content)}</div>
                {/* <a href={`/blog/${blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </a> */}
                <Link href={`/blog/${blog._id}`}>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Lebih Lanjut
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))
          ) : (
            <div className='text-center mt-[50vh]'>
              <Spinner
                aria-label="Extra large spinner example"
                size="xl"
                color='success'
              />
            </div>
        )
      }
    </div>
    <hr className="h-px my-8 mx-12 bg-gray-200 border-2 dark:bg-gray-700"/>

    {/* statistik */}
      <div id='statistik' className="ml-12 mt-12">
        <span className="font-bold text-3xl text-gray-700 mr-3">Statistik</span>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mx-12 sm:py-10 sm:mt-5 gap-12">
        <div className="col-span-1">
          <p className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
            Statistik Desa Sangkima
          </p>
          <p className="mt-6 mb-8 pr-12 sm:mr-12 text-gray-500 font-normal text-l">
          Statistik adalah bidang ilmu yang mempelajari tentang pengumpulan data, analisis data, penyajian data, hingga pengambilan kesimpulan untuk mengungkap pola dan suatu trend tertentu. fungsi statistik adalah untuk memberikan keterangan atau penjelasan deskriptif mengenai data dari suatu peristiwa yang sebelumnya dikumpulkan melalui berbagai proses penelitian. berikut statistik desa sangkima
          </p>
          <Link href="/statistik">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Lihat Semua Data Statistik
              </span>
            </button>
          </Link>
        </div>
        <div className="col-span-1">
          <div>
            <h2 className='text-green-500 text-2xl font-extrabold'>Data Kependudukan</h2>
            {/* <Grid item xs={12}>
              <Paper>
                <Doughnut data={data}/>
              </Paper>
            </Grid> */}
            <div className="h-35 w-35 mb-5">
              <Doughnut
                className='pt-5'
                  data={dataStat}
                  width={100}
                  height={50}
                />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home