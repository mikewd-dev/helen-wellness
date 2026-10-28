'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer id="contact" className="w-full scroll-mt-20 pt-10 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Contact Info
          </h2>
          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-slate-600" />
            <span>Address: 123 This way</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-slate-600" />
            <span>Telephone: 123 456789</span>
          </div>
        </div>
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Opening Hours
          </h2>
          <p className="mt-4 text-muted-foreground">Monday - Sunday</p>
          <p className="mt-1 text-muted-foreground">By appointment</p>
          <p className="mt-1 text-muted-foreground">10:00 AM - 5:00 PM</p>
        </div>
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Social Media
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}