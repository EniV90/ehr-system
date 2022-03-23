export const userColums = [{ field: 'id', headerName: 'ID', width: 70 }, {
    field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
                {params.row.username}
            </div>
        )
    }
},
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}
                </div>
            )
        }
    },

]

export const userRows = [
    {
        id: 1,
        username: "Motolani Akingbade",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'MotolaniA@yahoo.com',
        age: 60,
    },
     {
        id: 2,
        username: "Lawal Kbair",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'kabirlawal@gmail.com',
        age: 20,
    },
      {
        id: 3,
        username: "Eformeh Wisdom",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'pending',
        email: 'Eformeh@gmai.com',
        age: 20,
    },
       {
        id: 4,
        username: "Taofeek Durojaiye",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'Taoduro@gmail.com',
        age: 55,
    },
        {
        id: 5,
        username: "Arijaka Borky",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'passive',
        email: 'BorkyA@yahoo.com',
        age: 20,
    },
         {
        id: 6,
        username: "Pizzle Mike",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'pizzlemike@gmail.com',
        age: 32,
    },
     {
        id: 7,
        username: "Titiloye Michael",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'passive',
        email: 'michaelT@yahoo.com',
        age: 28,
    },
      {
        id: 8,
        username: "Shabi Dolapo",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'pending',
        email: 'shabidolapo@gmail.com',
        age: 50,
    },
       {
        id: 9,
        username: "Ajao Semiloore",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'pending',
        email: 'Ajaosemi@yahoo.com',
        age: 15,
    },
        {
        id: 10,
        username: "Adegbite Praise",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'PraiseA@gmail.com',
        age: 29,
    },
        {
        id: 11,
        username: "Adetayo Timi",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'Adetayo99@yahoo.com',
        age: 30,
    },
        {
        id: 12,
        username: "Okhifo Daniel",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'passive',
        email: 'DanielO@yahoo.com',
        age: 23,
    },
        {
        id: 13,
        username: "Omis Dami",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'OmisD@gmail.com',
        age: 20,
    },
        {
        id: 14,
        username: "Adebayo Gunna",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'passive',
        email: 'AdeBG@yahoo.com',
        age: 27,
    },
        {
        id: 15,
        username: "Nnamdi Okorie",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'pending',
        email: 'NnamdiO@gmail.com',
        age: 29,
    },
        {
        id: 16,
        username: "Tobe Gerald",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'TobeG@gmail.com',
        age: 20,
    },
         {
        id: 17,
        username: "Ariori Erioluwa",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'active',
        email: 'AriEri@gmail.com',
        age: 18,
    },
          {
        id: 18,
        username: "Benson Money",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'passisve',
        email: 'Bmoney@yahoo.com',
        age: 28,
    },
           {
        id: 19,
        username: "Oyima Kamsy",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'passive',
        email: 'KamsyO@gamil.com',
        age: 22,
    },
            {
        id: 20,
        username: "Fafure David",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        status: 'pending',
        email: 'FafD@gmail.com',
        age: 25,
    },
]