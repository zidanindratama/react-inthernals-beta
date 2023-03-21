import {
  archiveBook,
  mouseSquare,
  people,
} from "../assets/Iconsax_Linear/Used/index";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "explore",
    title: "Explore",
  },
  {
    id: "api",
    title: "API Documentation",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  },
];

export const reasons = [
  {
    id: 1,
    title: "Akses gratis",
  },
  {
    id: 2,
    title: "Akses tanpa buat akun",
  },
  {
    id: 3,
    title: "Selalu perbarui referensi",
  },
  {
    id: 4,
    title: "Jumlah referensi yang banyak",
  },
  {
    id: 5,
    title: "Akses API gratis untuk developer",
  },
];

export const referenceType = [
  {
    id: 1,
    referenceCount: 100,
    referenceTitle: "Learning References",
    referenceText:
      "Kumpulan referensi alat digital untuk membantu tugas dan pekerjaanmu",
    referenceLink: "#",
    referenceIcon: archiveBook,
  },
  {
    id: 2,
    referenceCount: 150,
    referenceTitle: "Tool References",
    referenceText:
      "Kumpulan referensi belajar untuk meningkatkan ilmu pengetahuanmu",
    referenceLink: "#",
    referenceIcon: mouseSquare,
  },
  {
    id: 3,
    referenceCount: 10,
    referenceTitle: "Event References",
    referenceText:
      "Aktif dalam berbagai acara seperti webinar, pelatihan, dan lain-lain",
    referenceLink: "#",
    referenceIcon: people,
  },
];
