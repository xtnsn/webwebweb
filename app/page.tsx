"use client"
import { useState, useEffect } from "react"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Button } from "@/components/ui/button"
import { Youtube, Menu, X, Play, ChevronDown, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

// Profile image URL - using Imgur with local fallback
const PROFILE_IMAGE_URL = "https://i.imgur.com/4RoWWM7.png"
const FALLBACK_IMAGE_URL = "/images/profile.png"

export default function Home() {
  // YouTube video data
  const videos = [
    {
      id: "tQOCka-RhTQ",
      title: "MENGENAL 15 KAIJU BERNOMOR DI KAIJU NO 8",
      views: "71K",
    },
    {
      id: "DYalNwBHlIo",
      title: "10 URUTAN KARAKTER TERKUAT, WIND BREAKER",
      views: "126K",
    },
    {
      id: "rbk6syZ8oCY",
      title: "TOP 50 KARAKTER TERKUAT DI CROWS ZERO FULL PART",
      views: "69K",
    },
    {
      id: "lJxfYPzWpj4",
      title: "10 URUTAN MONSTER TERKUAT KAIJU NO 8",
      views: "147K",
    },
    {
      id: "qrfSrA6RQmk",
      title: "10 URUTAN PASUKAN PERTAHANAN TERKUAT, KAIJU NO 8",
      views: "48K",
    },
    {
      id: "0A1Pt5RvmbE",
      title: "MENGENAL 4 LEGENDA WIND BREAKER",
      views: "16K",
    },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-700">
              <ImageWithFallback
                src={PROFILE_IMAGE_URL || "/placeholder.svg"}
                fallbackSrc={FALLBACK_IMAGE_URL}
                alt="XTENSION"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl dark:text-white">ANIMMOMEN</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex gap-8 font-medium">
                <li>
                  <a
                    href="#home"
                    className="text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    className="text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="rounded-full">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4"
          >
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col gap-4 font-medium">
                <li>
                  <a
                    href="#home"
                    className="block py-2 text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    className="block py-2 text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-2 text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(135,206,250,0.2)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
          <div className="absolute -top-[40%] -right-[30%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(135,206,250,0.1)_0%,rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,rgba(0,0,0,0)_70%)] blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-700 dark:from-sky-400 dark:to-blue-500">
                ANIMMOMEN
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                sebuah momen yang tak terlupakan
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  className="rounded-full px-8 py-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                  onClick={() => window.open("https://www.youtube.com/@animmomen", "_blank")}
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 dark:border-gray-700 dark:text-white"
                  onClick={() => window.open("https://www.youtube.com/watch?v=jna-ACoIoGw&t", "_blank")}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Latest Video
                </Button>
              </div>
              <div className="mt-12 flex items-center gap-4 justify-center md:justify-start">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-200 dark:bg-gray-700"
                    ></div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-900 dark:text-white">100K</span> subscribers
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-1"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
                  <ImageWithFallback
                    src={PROFILE_IMAGE_URL || "/placeholder.svg"}
                    fallbackSrc={FALLBACK_IMAGE_URL}
                    alt="XTENSION Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-full p-2">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
            <a
              href="#videos"
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Featured Videos</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore my latest creations and immerse yourself in captivating stories
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <Button
                          variant="default"
                          className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={PROFILE_IMAGE_URL || "/placeholder.svg"}
                          fallbackSrc={FALLBACK_IMAGE_URL}
                          alt="XTENSION"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">ANIMMOMEN • {video.views} views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 border-2 dark:border-gray-700 dark:text-white"
              onClick={() => window.open("https://www.youtube.com/@animmomen", "_blank")}
            >
              View All Videos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-sky-50/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">TENTANG ANIMMOMEN</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Kisah di balik Konten Kreator</p>
            </motion.div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <ImageWithFallback
                    src={PROFILE_IMAGE_URL || "/placeholder.svg"}
                    fallbackSrc={FALLBACK_IMAGE_URL}
                    alt="XTENSION Profile"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">SEBUAH MOMEN YANG TAK TERLUPAKAN</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    ANIMMOMEN adalah kreator konten kreatif yang khusus membahas analisis dan ulasan anime dengan perspektif unik. Setiap videonya menawarkan pandangan mendalam tentang karakter, alur cerita, serta makna tersembunyi dari berbagai judul populer seperti Naruto dengan eksplorasi dunia ninja dan perkembangannya, Tokyo Revengers yang mengupas drama perjalanan waktu dan konflik geng, Wind Breaker yang membahas semangat balap jalanan dan rivalitas, serta Crows yang menggali kehidupan keras para delinquent dengan nilai persaudaraannya. Dengan gaya penyampaian yang menarik, ANIMMOMEN memberikan insight segar bagi para pecinta anime!
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Bergabunglah dengan komunitas penggemar anime kami yang terus berkembang dan temukan cara baru untuk mengapresiasi serial favorit Anda melalui konten bentuk pendek kami.
                  </p>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="rounded-full px-6 border-2 dark:border-gray-700 dark:text-white"
                      onClick={() => window.open("https://www.youtube.com/@animmomen", "_blank")}
                    >
                      <Youtube className="mr-2 h-5 w-5" />
                      Subscribe
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">SOCIAL MEDIA KAMI</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Follow ANIMMOMEN on social media and join our community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {/* Discord */}
            <motion.a
              href="https://discord.gg/Vq8pQbmzxk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#5865F2] text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.977-.608 1.414a17.27 17.27 0 0 0-5.487 0 12.623 12.623 0 0 0-.617-1.414.077.077 0 0 0-.079-.036 19.798 19.798 0 0 0-4.885 1.49.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Discord</span>
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://youtube.com/@animmomen"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#FF0000] text-white rounded-full mb-4">
                <Youtube className="w-8 h-8" />
              </div>
              <span className="font-medium dark:text-white">YouTube</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/animmomen"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 2 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Instagram</span>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://tiktok.com/@animmomen"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 3 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.82-.05-3.37 0-6.13 2.69-6.13 6s2.75 6 6.13 6c3.37 0 6.13-2.69 6.13-6v-7.15a6.923 6.923 0 0 0 4.077 1.35h1.03V5.82h-1.03c-1.36 0-2.37-.48-3.37-1.28z" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">TikTok</span>
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="https://twitter.com/animmomen"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 4 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#1DA1F2] text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Twitter</span>
            </motion.a>

            {/* Threads */}
            <motion.a
              href="https://www.threads.net/@animmomen"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 5 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 192 192"
                  fill="currentColor"
                >
                  <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.076-10.548h.23c8.152.054 14.364 2.455 18.469 7.156 2.952 3.376 4.94 8.073 5.925 14.063-6.123-1.227-12.761-1.703-19.887-1.437-20.13.752-33.057 12.56-32.315 29.64.355 8.171 3.61 15.01 9.161 19.27 5.187 3.994 11.916 5.898 18.98 5.367 9.334-.698 16.505-4.775 21.837-12.113 3.892-5.367 6.521-12.043 7.957-20.029 4.553 2.164 7.916 5.48 9.915 9.862 3.5 7.666 3.223 20.693-6.983 31.645-9.157 9.814-19.811 14.013-35.4 14.118-18.668-.104-32.862-6.422-42.23-18.74C34.1 120.204 30.66 105.11 31.515 88.196c.856-16.915 5.955-31.547 15.176-43.528 11.8-15.313 28.685-23.387 50.196-24.058 21.802-.67 39.39 6.436 51.951 21.1 10.002 11.694 15.976 27.904 17.821 48.343l-16.764 2.252c-1.333-15.458-5.519-27.912-12.462-37.075-7.937-10.474-19.57-15.784-34.702-15.784v.004c-16.673.52-29.265 6.185-37.424 16.98-6.81 9.037-10.522 20.48-11.134 34.039-.612 13.559 1.968 24.755 7.678 33.314 6.527 9.807 16.21 14.619 29.28 14.619.717 0 1.447-.023 2.199-.066 10.156-.427 17.277-3.169 23.35-8.97 6.6-6.307 8.458-13.165 6.962-16.433-1.12-2.455-3.72-4.448-7.76-5.95-2.445-8.2-6.452-16.166-18.357-16.166-6.92 0-12.869 4.289-13.088 10.066-.203 5.356 3.564 10.152 9.254 10.152 5.143 0 9.288-3.377 9.288-8.363 0-1.78-.543-3.277-1.573-4.34-.72-.741-1.557-1.181-2.566-1.346.375-.275.953-.435 1.716-.435 3.906 0 5.838 4.07 7.08 8.587a75.671 75.671 0 0 0-2.924-.2c-8.89-.284-15.825 4.408-15.958 10.778-.133 6.318 6.542 11.5 15.433 11.784 8.89.284 16.055-4.477 16.187-10.795.023-1.132-.223-2.232-.7-3.249 1.062.182 2.144.293 3.248.332 6.887.24 12.665-1.986 16.634-6.414 3.767-4.208 5.274-10.117 4.24-16.692zM98.4 146.338c-5.318-.17-9.95-2.778-9.888-5.823.06-3.044 4.806-5.359 10.123-5.19 5.318.17 9.95 2.777 9.888 5.823-.062 3.045-4.806 5.359-10.123 5.19zm23.538-30.486c-.168 3.108-1.653 5.962-4.188 8.052-2.345 1.928-5.485 3.132-9.043 3.462-3.137.292-6.009-.283-8.098-1.62-2.24-1.437-3.517-3.67-3.597-6.307-.202-6.565 6.459-11.584 14.95-11.305 8.492.28 10.177 7.153 9.976 7.718z" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Threads</span>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/animmomen7"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 6 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#1877F2] text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Facebook</span>
            </motion.a>

            {/* Bilibili */}
            <motion.a
              href="https://www.bilibili.tv/id/space/1817907921"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 7 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#00A1D6] text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Bilibili</span>
            </motion.a>

            {/* Donation */}
            <motion.a
              href="https://sociabuzz.com/animmomen/tribe"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 8 * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#FF5722] text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="font-medium dark:text-white">Donate</span>
            </motion.a>
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="default"
              className="rounded-full px-8 py-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
              onClick={() => window.open("https://discord.gg/Vq8pQbmzxk", "_blank")}
            >
              Join Our Discord Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
                  <ImageWithFallback
                    src={PROFILE_IMAGE_URL || "/placeholder.svg"}
                    fallbackSrc={FALLBACK_IMAGE_URL}
                    alt="XTENSION"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-2xl">ANIMMOMEN</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                sebuah momen yang tak terlupakan
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@animmomen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://discord.gg/Vq8pQbmzxk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.977-.608 1.414a17.27 17.27 0 0 0-5.487 0 12.623 12.623 0 0 0-.617-1.414.077.077 0 0 0-.079-.036 19.798 19.798 0 0 0-4.885 1.49.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/animmomen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@animmomen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.82-.05-3.37 0-6.13 2.69-6.13 6s2.75 6 6.13 6c3.37 0 6.13-2.69 6.13-6v-7.15a6.923 6.923 0 0 0 4.077 1.35h1.03V5.82h-1.03c-1.36 0-2.37-.48-3.37-1.28z" />
                  </svg>
                </a>
                <a
                  href="https://www.threads.net/@animmomen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 192 192"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.076-10.548h.23c8.152.054 14.364 2.455 18.469 7.156 2.952 3.376 4.94 8.073 5.925 14.063-6.123-1.227-12.761-1.703-19.887-1.437-20.13.752-33.057 12.56-32.315 29.64.355 8.171 3.61 15.01 9.161 19.27 5.187 3.994 11.916 5.898 18.98 5.367 9.334-.698 16.505-4.775 21.837-12.113 3.892-5.367 6.521-12.043 7.957-20.029 4.553 2.164 7.916 5.48 9.915 9.862 3.5 7.666 3.223 20.693-6.983 31.645-9.157 9.814-19.811 14.013-35.4 14.118-18.668-.104-32.862-6.422-42.23-18.74C34.1 120.204 30.66 105.11 31.515 88.196c.856-16.915 5.955-31.547 15.176-43.528 11.8-15.313 28.685-23.387 50.196-24.058 21.802-.67 39.39 6.436 51.951 21.1 10.002 11.694 15.976 27.904 17.821 48.343l-16.764 2.252c-1.333-15.458-5.519-27.912-12.462-37.075-7.937-10.474-19.57-15.784-34.702-15.784v.004c-16.673.52-29.265 6.185-37.424 16.98-6.81 9.037-10.522 20.48-11.134 34.039-.612 13.559 1.968 24.755 7.678 33.314 6.527 9.807 16.21 14.619 29.28 14.619.717 0 1.447-.023 2.199-.066 10.156-.427 17.277-3.169 23.35-8.97 6.6-6.307 8.458-13.165 6.962-16.433-1.12-2.455-3.72-4.448-7.76-5.95-2.445-8.2-6.452-16.166-18.357-16.166-6.92 0-12.869 4.289-13.088 10.066-.203 5.356 3.564 10.152 9.254 10.152 5.143 0 9.288-3.377 9.288-8.363 0-1.78-.543-3.277-1.573-4.34-.72-.741-1.557-1.181-2.566-1.346.375-.275.953-.435 1.716-.435 3.906 0 5.838 4.07 7.08 8.587a75.671 75.671 0 0 0-2.924-.2c-8.89-.284-15.825 4.408-15.958 10.778-.133 6.318 6.542 11.5 15.433 11.784 8.89.284 16.055-4.477 16.187-10.795.023-1.132-.223-2.232-.7-3.249 1.062.182 2.144.293 3.248.332 6.887.24 12.665-1.986 16.634-6.414 3.767-4.208 5.274-10.117 4.24-16.692zM98.4 146.338c-5.318-.17-9.95-2.778-9.888-5.823.06-3.044 4.806-5.359 10.123-5.19 5.318.17 9.95 2.777 9.888 5.823-.062 3.045-4.806 5.359-10.123 5.19zm23.538-30.486c-.168 3.108-1.653 5.962-4.188 8.052-2.345 1.928-5.485 3.132-9.043 3.462-3.137.292-6.009-.283-8.098-1.62-2.24-1.437-3.517-3.67-3.597-6.307-.202-6.565 6.459-11.584 14.95-11.305 8.492.28 10.177 7.153 9.976 7.718z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#videos" className="text-gray-400 hover:text-white transition-colors">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#social" className="text-gray-400 hover:text-white transition-colors">
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="https://sociabuzz.com/animmomen/tribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ANIMMOMEN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

