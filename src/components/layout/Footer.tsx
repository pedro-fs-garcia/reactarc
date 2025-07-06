import { Mail, MapPin, Phone } from "lucide-react"
import { globalInfo, socials } from "../../data/globalInfo"
import { formatAddress } from "@/utils/globalInfoUtils"
import { services } from "@/data/services"
import Tooltip from "../ui/Tooltip"

const footerNavigation = [
    { href: "#hero", label: "Home" },
    { href: "#implementation", label: "Implementations" },
    { href: "#themes", label: "Themes" },
    { href: "#ui-components", label: "UI Components" },
]

const contactIconsClass = "h-5 w-5 mr-2 flex-shrink-0"
const contactRoutes = [
    { route: globalInfo.maps, label: formatAddress(), icon: <MapPin className={contactIconsClass} /> },
    { route: `tel:${globalInfo.phone}`, label: globalInfo.phone, icon: <Phone className={contactIconsClass} /> },
    { route: `mailto:${globalInfo.email}`, label: globalInfo.email, icon: <Mail className={contactIconsClass} /> },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-surface text-secondary pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">{globalInfo.name}</h3>
                        <p className="mb-4">
                            {globalInfo.description}
                        </p>
                        <div className="flex space-x-4">
                            {socials.map((social) => (
                                social.profile.length > 0 && (
                                    <a href={social.profile} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors" key={social.profile} >
                                        {social.icon}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Features</h3>
                        <ul className="space-y-2">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.title}>
                                    <Tooltip content={service.description}>
                                        <button className="text-accent rounded-lg inline-flex gap-2">
                                            {/* {service.icon}  */}
                                            {service.title}
                                        </button>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Quick Access</h3>
                        <ul className="space-y-2">
                            {footerNavigation.map((navItem) => (
                                <li key={navItem.href}>
                                    <a href={navItem.href} className="hover:text-accent transition-colors">
                                        {navItem.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Contact</h3>
                        <ul className="space-y-4">
                            {contactRoutes.map((item) => (
                                <li className="flex items-center" key={item.route}>
                                    {item.icon}
                                    <a href={item.route} target="_blank" rel="noopener noreferrer">
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-light pt-8 mt-8 text-sm text-tertiary">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {currentYear} {globalInfo.name}. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        Developed by Pedro Garcia
                    </div>
                </div>
            </div>
        </footer>
    )
}
