import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { CiMobile1 } from 'react-icons/ci'
import { MdWorkspacesOutline } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'

export const projectExperience = [
  {
    nameUZ: 'Grafik Dizayn',
    nameEN: 'Graphic Design',
    projectsUZ: 'SMM Dizayn',
    projectsEN: 'SMM Design',
    icon: HiOutlineDesktopComputer,
    bg: '#286F6C',
  },
  {
    nameUZ: 'Flayer Dizayn',
    nameEN: 'Flayer Design',
    projectsUZ: 'Roll up dizayn',
    projectsEN: 'Roll up Design',
    icon: CiMobile1,
    bg: '#EEC048',
  },
  {
    nameUZ: 'Billboard Dizayn',
    nameEN: 'Billboard Design',
    projectsUZ: 'Brochure Dizayn',
    projectsEN: 'Brochure Design',
    icon: MdWorkspacesOutline,
    bg: '#F26440',
  },
  {
    nameUZ: 'Animation Logo',
    nameEN: 'Animation Logo',
    projectsUZ: 'Photo Slideshow ',
    projectsEN: 'Photo Slideshow ',
    icon: MdWorkspacesOutline,
    bg: '#F26440',
  },
]

export const WhatDoIHelp = [
  {
    quoteUZ:
      "Men sizga muammo hal qilishda yordam beraman , shaxsiy beznisingiz rivojlantirish uchun qo'llab quvvatlayman",
    quoteEN:
      'I can help you to solve the problem , I will support you for developing your own business',
  },
  {
    quoteUZ: 'Sifatli dizayn albatta tajribali dizayner talab qiladi',
    quoteEN: 'Quality design certainly requires an experienced designer',
  },
]

export const workExp = [
  {
    place: 'IT park , Navoiy filiali',
    tenure: 'Jan 2023 - hozirgacha',
    role: 'Grafik dizayner',
    detail:
      "O'quvchilarga grafik dizaynerlik soxasi bo'yicha bilimlar berish va IT Park uchun dizayn ishlarni bajarish",
  },
  {
    place: 'Malika Education',
    tenure: 'Jan 2021 - hozirgacha',
    role: 'Grafik dizayner',
    detail:
      "O'quv markaz uchun har xil turdagi grafik dizayn ishlari va SMM postlar tayyorlash",
  },
  {
    place: 'IT Park, Konimex filiali',
    tenure: 'Aug 2021 - Sep 2023',
    role: 'Ish boshqaruvchi, Grafik dizayner',
    detail:
      "Filialni to'g'ri strukturada boshqarish hamda Grafik dizayn yo'nalishi bo'yicha o'quvchilarga ta'lim berish",
  },
]

export const comments = [
  {
    name: 'Fazliddin Ismoilov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people2.jpg',
  },
  {
    name: 'Fayzulla Xujaqulov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people1.jpg',
  },
  {
    name: 'Abduhamid Xujaqulov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people3.jpg',
  },
  {
    name: 'Hojimurod Fayzullayev',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people4.jpg',
  },
  {
    name: 'Abduhamid Xujaqulov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people3.jpg',
  },
  {
    name: 'Fazliddin Ismoilov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people2.jpg',
  },
  {
    name: 'Abduhamid Xujaqulov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people3.jpg',
  },
  {
    name: 'Hojimurod Fayzullayev',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people4.jpg',
  },
  {
    name: 'Fayzulla Xujaqulov',
    post: 'Creative Manager',
    comment:
      "Abdumalik men birga ishlagan xodimlar orasida uzining tajribasi va kreativligi bilan ajralib turadi va doim o'z maslaxatlarini bergan",
    img: './people1.jpg',
  },
]

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
