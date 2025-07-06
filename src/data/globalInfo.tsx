import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"

export const globalInfo = {
    name: "ReactForge",
    alternativeName: "ReactForge",
    slogan: "Building Faster with Pre-built Components",
    description: "A comprehensive React foundation with theme system, UI components, accessibility features and responsive design.",
    site: "https://github.com/pedro-fs-garcia/baseReact",
    email: "company e-mail",
    address: {
        city: "city",
        state: "state",
        street: "street",
        number: "00",
        complement: "complement"
    },
    instagram: "https://www.instagram.com/company",
    facebook: "https://www.facebook.com/company",
    youtube: "https://www.youtube.com/@company",
    tiktok: "https://vm.tiktok.com/ZM8N6VJML/",
    linkedin: "https://www.linkedin.com/company/company/",
    whatsapp: "5512999999999",
    phone: "(12) 99999-9999",
    website: "https://github.com/pedro-fs-garcia/baseReact",
    maps: "https://www.google.com.br/maps",
    placeId: "google_place_id"
}

export const socials = [
    {icon: <FaFacebook size={20} />, profile:globalInfo.facebook},
    {icon: <FaInstagram size={20} />, profile: globalInfo.instagram},
    {icon: <FaLinkedin size={20} />, profile: globalInfo.linkedin},
    {icon: <FaYoutube size={20} />, profile: globalInfo.youtube},
    {icon: <FaTiktok size={20} />, profile: globalInfo.tiktok},
    {icon: <FaGlobe size={20} />, profile: globalInfo.site},
]