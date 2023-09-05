import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Spinner } from '@/components/flowbite-components/flowbite-components'

async function getData() {
    const res = await fetch(`${process.env.URL_LOCAL}/api/potency`, {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

const Profile = async () => {
    const data = await getData()

    return (
    <>
    {/* Jumbotron */}
    <section className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/bLQvtQr/teluk-lombok2.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Selamat Datang di Desa Sangkima</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Tentang Sangkima</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        </div>
        </div>
    </section>

    {/* Sejarah */}
    <div className="sm:mx-12 pt-10 px-8 sm:px-16 mb-7 underline">
        <span className="font-bold text-3xl text-green-700 mr-3">Sejarah</span>
        <span className="font-bold text-3xl text-gray-700 mr-3">Sangkima</span>
    </div>

    <div className='sm:mx-12 px-8 sm:px-16 text-justify'>
        <p className="text-gray-500 dark:text-gray-400">
        Sekitar Tahun 1970, Sangkima merupakan sebuah kampung 
        dengan segala kegiatan administrasi berpusat di Kota Bontang 
        sebagai ibukota kecamatan. Pada saat itu, Kampung Sangkima 
        dipimpin oleh Bapak Untung Suropati.
        </p>
        <br/>
        <p className="text-gray-500 dark:text-gray-400">
        Tahun 1972 Pertamina mulai masuk dan beroperasi di daerah 
        Sangkima. Sebelum itu wilayah Sangkima pernah dijadikan lahan 
        penambangan oleh Belanda pada Tahun 1932 yang kemudian 
        ditinggalkan. Kisaran Tahun 1972-1973 warga Sangkima terjangkit 
        penyakit beri-beri dan kolera yang sempat menewaskan 30 orang. 
        Hingga Tahun 1982 pusat administrasi masih berada di Bontang, 
        pada saat itu pemerintahan kampung sempat terhenti karena 
        kepala kampung memiliki tugas ganda yaitu sebagai kepala 
        kampung serta merangkap menjadi koordinator hansip
        </p>
        <br/>
        <p className="text-gray-500 dark:text-gray-400">
        Tahun 1984 Sangkima menjadi dusun yang terdiri dari 5 (lima) 
        RT dan menjadi perwakilan Kecamatan Sangkima. Pada Tahun
        1987, empat tokoh masyarakat Sangkima yaitu, bapak Hamid, 
        Sukri Idar, Suwito dan H. Rustan berinisiatif mengupayakan Dusun 
        Sangkima untuk dapat menjadi Desa, setelah melalui perjuangan 
        panjang akhirnya pada Tahun 1995 Dusun Sangkima berubah 
        status menjadi Desa Persiapan Sangkima dan empat orang tokoh 
        tersebut menjadi Pjs (pejabat sementara) Desa persiapan.
        </p>
        <br/>
        <p className="text-gray-500 dark:text-gray-400">
        Tahun 1996 dengan SK Menteri No:140/SK.406.A/1996 
        Sangkima resmi menjadi Desa dengan kecamatan bukan lagi di 
        Kota Bontang melainkan masuk di Kecamatan Sangatta. Tahun 
        1997 berdasarkan surat Menteri No : 146.1/1331/PUOD Sangkima 
        menjadi desa definitif yang dipimpin oleh Bapak Sukri Idar. 
        Sangkima sendiri memiliki luas wilayah sebesar 10.473 Ha. dengan 
        penduduk sebanyak 2.771 jiwa dan terbagi menjadi 797 KK.
        </p>
        <br/>
        <p className="text-gray-500 dark:text-gray-400">
        Desa Sangkima melaksanakan Pemilihan Kepala Desa pertama 
        pada tanggal 03 Februari 1999 dengan menempatkan Bapak Drs. 
        Romadhon sebagai Kepala Desa terpilih. Tahun 2004 berdasarkan 
        Undang-Undang Nomor 22 Tahun 1999 tentang Otonomi Daerah, 
        maka Desa Sangkima dipecah menjadi 2 (dua) yaitu menjadi Desa 
        Sangkima dan Desa Persiapan Teluk Singkama. Hal ini 
        mengakibatkan luas wilayah Desa Sangkima berkurang sekitar 
        2.203 hektar yang menjadi bagian wilayah desa Persiapan Teluk 
        Singkama/Sangkima lama.
        </p>
        <br/>
        <p className="text-gray-500 dark:text-gray-400">
        Pada Tahun 2014 SK baru Desa Sangkima keluar dengan 
        Nomor 140/K.789/2014, desa ini resmi dalam lingkup kecamatan 
        Sangatta Selatan yang Luas wilayah sekitar 37.919,2 ha. Adapun 
        total penduduk sebanyak 3.166 jiwa. Secara administrasi, Desa 
        Sangkima terletak di Kecamatan Sangatta Selatan, Kabupaten 
        Kutai Timur. Keseluruhan wilayahnya masuk dalam kawasan 
        Taman Nasional Kutai (TNK), dengan luas wilayah 37.919,2 Ha (data 
        Tahun 2020).
        </p>
    </div>

    {/* visi misi */}
    <div className="grid grid-cols-1 text-justify sm:grid-cols-2 gap-4 px-8 sm:mx-12 sm:px-16 py-10 mt-5 gap-12">
        <div className="col-span-1 sm:mt-5">
            <p className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
            Visi
            </p>
            <p className="mt-6 mb-8 sm:pr-12 sm:mr-12 text-gray-500 font-normal text-l">
            Terciptanya Transparansi Tata Kelola 
            Pemerintahan untuk Desa Sangkima yang Profesional, 
            Mandiri, dan Aman
            </p>
        </div>
        <div className="col-span-1 sm:mt-5">
            <p className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
            Misi
            </p>
            <ol className="list-disc mt-6 sm:mb-8 sm:pr-12 sm:mr-12 text-gray-500 font-normal text-l">
                <li>Memperkuat tata kelola pemerintahan desa yang 
                efektif, demokratis, transparan, akuntabel, dan 
                professional melalui peningkatan kapasitas bagi 
                aparatur desa, kepala desa, BPD, LPM, KPMD;</li>
                <li>Memperkuat kemandirian ekonomi masyarakat 
                melalui kegiatan pertanian dan pemanfaatan potensi 
                sumberdaya alam yang tersedia;
                </li>
                <li>Percepatan pembangunan infrastruktur dan akses 
                layanan dasar untuk meningkatkan derajat 
                kehidupan masyarakat;</li>
                <li>Pelestarian lingkungan hidup dan potensi alam untuk 
                mewujudkan desa wisata yang berwawasan 
                lingkungan;</li>
                <li>Mengupayakan terwujudnya pemerataan kesempatan 
                kerja bagi masyarakat khususnya usia produktif;</li>
                <li>Meningkatkan kesejahteraan masyarakat desa 
                dengan mewujudkan Badan Usaha Milik Desa (BUMDes) dan program lainnya untuk membuka 
                peluang lapangan kerja bagi masyarakat;
                </li>
                <li>Meningkatkan sarana dan prasarana desa dari aspek 
                fisik, ekonomi, pendidikan, kesehatan, olahraga, 
                sosial budaya.</li>
            </ol>
        </div> 
    </div>

    {/* Kondisi Geo */}
    <div className="sm:mx-12 sm:pt-10 px-8 sm:px-16 mb-7 underline">
        <span className="font-bold text-3xl text-green-700 mr-3">Kondisi</span>
        <span className="font-bold text-3xl text-gray-700 mr-3">Geograifs</span>
    </div>
    <div className='sm:mx-12 sm:px-16 px-8 text-justify'>
        <p className="text-gray-500 dark:text-gray-400">
        Luas Wilayah Desa Sangkima Kecamatan Sangatta Selatan 
        Kabupaten Kutai Timur sebesar 37.912,2 Ha. Wilayah tersebut 
        terbagi menjadi 9 Dusun dan 26 RT. Desa Sangkima dalam struktur 
        pemerintahan daerah Kalimantan Timur merupakan desa yang 
        termasuk dalam wilayah Kecamatan Sangatta Selatan Kabupaten 
        Kutai Timur. Dengan batas-batas wilayah sebagai berikut:
        </p>
        <br/>
        <ol className="list-disc pl-4 text-gray-500 font-normal text-l">
                <li>Sebelah Utara : Desa Sangatta Selatan</li>
                <li>Sebelah Selatan : Desa Teluk Singkama</li>
                <li>Sebelah Barat : Muara Bengkal</li>
                <li>Sebelah Timur : Selat Makassar</li>
            </ol>
        <br/>
        <p className="text-gray-500 dark:text-gray-400">
        Jarak Desa Sangkima menuju Kecamatan ± 17 km dan 35 km 
        jarak dari pusat pemerintahan Kabupaten Kutai Timur dengan 
        jarak tempuh perjalanan darat ± 45 menit hingga 90 menit. Desa 
        Sangkima dapat ditempuh melalui darat dengan menggunakan 
        kendaraan mobil maupun motor. Kondisi jalan yang dilewati dari 
        ibukota Kabupaten ataupun Kecamatan menuju Desa sebagian 
        besar masih berupa jalan pengerasan dan tanah. Saat ini moda 
        transportasi umum yang digunakan di dalam Desa Sangkima belum 
        ada atau masih menggunakan kendaraan pribadi baik motor 
        ataupun mobil, hal ini menyebabkan tingkat kemudahan 
        aksesibilitas kawasan masih relatif rendah.
        </p>
    </div>

    {/* Potensi Desa */}
    <div class="sm:mx-12 pt-10 sm:px-16 px-8">
        <div className="mb-7 underline">
            <span className="font-bold text-3xl text-green-700 mr-3">Potensi</span>
            <span className="font-bold text-3xl text-gray-700 mr-3">Desa</span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 mb-5'>
        {
            data ? (
                data?.map((potency) => (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={potency._id}>
                    <a href="#">
                        <Image className="rounded-t-lg" src={potency.image} alt={potency.title} width={800} height={400}/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{potency.title}</h5>
                        </a>
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
    </div>
    </>
)
}

export default Profile