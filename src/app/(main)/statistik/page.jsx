import Image from 'next/image'
import logoKutim from 'public/logoKutim.png'
import React from 'react';
import {Doughnut, Bar} from '@/components/chartjs-components/chartjs-components';

const data = {
    labels: [
      'Perempuan',
      'Laki-Laki',
  ],
  datasets: [{
    data: [1502, 1664],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    ]
    }]
};

    const dataAgama = {
    labels: [
        'Islam',
        'Kristen Protestan',
        'Katolik',
    ],
    datasets: [{
    data: [2862, 217, 87],
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

    const dataUsia = {
    labels: [
        '0 - 4 tahun',
        '5 - 10 tahun',
        '11 - 15 tahun',
        '16 - 20 tahun',
        '21 - 25 tahun',
        '26 - 30 tahun',
        '31 - 35 tahun',
        '36 - 40 tahun',
        '41 - 45 tahun',
        '46 - 50 tahun',
        '51 - 55 tahun',
        '56 - 60 tahun',
        '61 - 65 tahun',
],
    datasets: [{
    // label: false,
    data: [62, 11, 97, 102, 81, 73, 75, 8, 72, 68, 74, 46, 58],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#78C1F3',
    '#9BE8D8',
    '#E2F6CA',
    '#F8FDCF',
    '#AAC8A7',
    '#C3EDC0',
    '#E9FFC2',
    '#FDFFAE',
    '#FF9B9B',
    '#FFD6A5'

    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#78C1F3',
    '#9BE8D8',
    '#E2F6CA',
    '#F8FDCF',
    '#AAC8A7',
    '#C3EDC0',
    '#E9FFC2',
    '#FDFFAE',
    '#FF9B9B',
    '#FFD6A5'

    ]
    }],
};

    const dataPekerjaan = {
    labels: [
        'Petani',
        'TNI/POLRI',
        'karyawan Swasta',
        'Tukang Kayu/Batu',
        'Bidan',
        'Guru',
        'PNS',
        'Nelayan',
        'Lainnya',
    ],
    datasets: [{
    data: [512, 3, 590, 38, 2, 40, 45, 115, 396],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#78C1F3',
    '#9BE8D8',
    '#E2F6CA',
    '#F8FDCF',
    '#AAC8A7',
    '#C3EDC0',
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#78C1F3',
    '#9BE8D8',
    '#E2F6CA',
    '#F8FDCF',
    '#AAC8A7',
    '#C3EDC0',
    ]
  }]
  };
  
  const dataPendidikan = {
    labels: [
      'Belum Sekolah',
      'Tidak Tamat SD',
      'Tamat SD ',
      'Tamat SMP',
      'Tamat SMA',
      'Tamat DI/DII',
      'Tamat DIII',
      'Tamat S1 ',
      'Tamat S2',
      'PAUD',
      'SD/Setingkat',
      'SMP/Setingkat',
      'SMA/Setingkat',
  ],
  datasets: [{
    data: [347, 353, 485, 350, 646, 16, 60, 162, 7, 20, 359, 158, 143],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#78C1F3',
    '#9BE8D8',
    '#E2F6CA',
    '#F8FDCF',
    '#AAC8A7',
    '#C3EDC0',
    '#E9FFC2',
    '#FDFFAE',
    '#FF9B9B',
    '#FFD6A5'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#78C1F3',
    '#9BE8D8',
    '#E2F6CA',
    '#F8FDCF',
    '#AAC8A7',
    '#C3EDC0',
    '#E9FFC2',
    '#FDFFAE',
    '#FF9B9B',
    '#FFD6A5'
    ]
  }]
  };
  
  const dataSuku = {
    labels: [
      'Bugis',
      'Jawa',
      'Kutai',
      'Dayak',
      'Banjar',
      'Makassar',
      'Sunda',
      'Batak',
      'Tator',
      'Manado',
      'Madura',
      'NTT/NTB',
      'Mandar',
      'Mamuju',
      'Bali',
      'Minangkabau',
      'Padang',
      'Aceh',
      'Bengkulu',
  ],
  datasets: [{
    data: [805, 972, 58, 232, 221, 25, 38, 43, 29, 17, 7, 10, 188, 508, 1, 1, 5, 2, 4],
    backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#78C1F3',
        '#9BE8D8',
        '#E2F6CA',
        '#F8FDCF',
        '#AAC8A7',
        '#C3EDC0',
        '#E9FFC2',
        '#FDFFAE',
        '#FF9B9B',
        '#FFD6A5',
        '#FF78C4',
        '#E1AEFF',
        '#FFBDF7',
        '#FFECEC',
        '#FF90BB',
        '#FF2171'
    ],
    hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#78C1F3',
        '#9BE8D8',
        '#E2F6CA',
        '#F8FDCF',
        '#AAC8A7',
        '#C3EDC0',
        '#E9FFC2',
        '#FDFFAE',
        '#FF9B9B',
        '#FFD6A5',
        '#FF78C4',
        '#E1AEFF',
        '#FFBDF7',
        '#FFECEC',
        '#FF90BB',
        '#FF2171'
    ]
  }]
  };

const Statistik = () => {
    return (
        <>
        {/* jumbotron */}
            <section className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/bLQvtQr/teluk-lombok2.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Selamat Datang di Desa Sangkima</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Statistik Desa Sangkima</p>
                </div>
            </section>

        {/* Gender dan Agama */}
        <p className="mt-12 text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
                Jumlah Penduduk
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-12 py-10">
            <div className="col-span-1">
                <div className='flex justify-center sm:px-8'>
                    <h2 className='text-green-500 text-xl font-semibold'>Gender</h2>
                    <div className='h-1/2 w-1/2 mt-16'>
                        <Doughnut
                            data={data}
                            width={1200}
                            height={1200}
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className='flex justify-center'>
                    <h2 className='text-green-500 text-xl font-semibold'>Agama</h2>
                    <div className='h-1/2 w-1/2 mt-16'>
                        <Doughnut
                            data={dataAgama}
                            width={1200}
                            height={1200}
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Usia */}
        <p className="mt-16 text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
            Usia
        </p>
        <div className="grid grid-cols-2 gap-4 mx-16">
            <Bar options={{
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            }} data={dataUsia} />
        </div>

        {/* Tingkat Pendidikan dan Pekerejaan */}
        <p className="mt-12 text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
                Tingkat Pendidikan dan Pekerjaan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-12 py-10">
            <div className="col-span-1">
                <div className='flex justify-center'>
                    <h2 className='text-green-500 text-xl font-semibold'>Pendidikan</h2>
                    <div className='h-3/5 w-3/5 mt-16'>
                        <Doughnut
                            data={dataPendidikan}
                            width={1200}
                            height={1200}
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className='flex justify-center'>
                    <h2 className='text-green-500 text-xl font-semibold'>Pekerjaan</h2>
                    <div className='h-3/5 w-3/5 mt-16'>
                        <Doughnut
                            data={dataPekerjaan}
                            width={1200}
                            height={1200}
                        />
                    </div>
                </div>
            </div>
        </div>
        
        
        {/* Suku */}
        <p className="mt-16 text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
            Suku
        </p>
        <div className="grid grid-cols-2 gap-4 mx-16 mb-12">
            <Bar
            options={{
                plugins: {
                    legend: {
                    display: false,
                    },
                }
              }} 
            data={dataSuku} />
        </div>
        
        </>
    )
}

export default Statistik