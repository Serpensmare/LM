import React, { useState } from 'react';

import { Linkedin, Twitter, Instagram, MessageCircle, ChevronDown } from 'lucide-react';



const Portfolio = () => {

  const [activeSection, setActiveSection] = useState('home');



  const ventures = [

    {

      year: '2023',

      name: 'DJ Domus',

      type: 'Artist Brand',

      status: 'Active',

      description: 'Personal brand as a music producer and DJ. Playing deep house, tech house, and Afro-house wherever opportunity strikes. Performed in UK, Switzerland, Tokyo, Chile—aiming for more countries.',

      highlights: ['International performances', 'Music production', 'Multi-country tour experience']

    },

    {

      year: '2024',

      name: 'Domus Nights',

      type: 'Event Series',

      status: 'Paused',

      description: 'Organized 2 successful events in Bath before venue closure. Planning full makeover and relaunch when back in Bath. Building a recurring electronic music night with local and international DJs.',

      highlights: ['2 successful events', 'Venue partnerships', 'Relaunch planned']

    },

    {

      year: '2025',

      name: 'WeshTee',

      type: 'Consumer Brand',

      status: 'Discontinued',

      description: 'French-language streetwear experiment. Tested meme culture meets Gen-Z brainrot concept. Learned and moved on.',

      highlights: ['Brand exploration', 'Market testing', 'Pivoted to other ventures']

    },

    {

      year: '2025',

      name: 'Zosa',

      type: 'Lifestyle Brand',

      status: 'Concept',

      description: 'Premium boardshorts with sun–moon iconography. Beach lifestyle, clean aesthetics.',

      highlights: ['Visual identity', 'Lifestyle positioning', 'Brand language']

    },

    {

      year: '2025',

      name: 'DegenGamez',

      type: 'Crypto Gaming',

      status: 'Concept',

      description: 'Crypto mini-games platform. DegenCellz (Agar.io-style) and DegenShowdown (cowboy duels). Equity-based dev competitions.',

      highlights: ['Browser-based games', 'Leaderboards', 'Developer equity model']

    },

    {

      year: '2025',

      name: 'Castello360',

      type: '360° Virtual Tours',

      status: 'Active',

      description: 'Virtual tour service for Airbnbs, restaurants, and real estate. Learned the hard way about SaaS dependencies—now building proprietary hosting.',

      highlights: ['Paying clients onboarded', 'Custom viewer in development', 'Portable tour formats'],

      website: 'https://castello360.com'

    },

    {

      year: '2025',

      name: 'Restaurant Websites',

      type: 'Web Development (LATAM)',

      status: 'Active',

      description: 'Building fast, modern websites for restaurants across Santiago. Cold-calling in Spanish, delivering custom sites with AI-assisted development.',

      highlights: ['Squisito (Italian restaurant)', 'TACU TACU Restaurante', 'Multiple cafés in pipeline']

    },

    {

      year: '2025',

      name: 'Receipt Bot',

      type: 'AI Utility',

      status: 'Deployed',

      description: 'WhatsApp bot for expense tracking. Send receipt photo → OCR/LLM extraction → auto-log to Google Sheets.',

      highlights: ['n8n workflow', 'WhatsApp Business API', 'Real-time expense tracking']

    },

    {

      year: '2025',

      name: 'Wesi Ltd',

      type: 'AI Automation & Local Agents',

      status: 'Active',

      description: 'Joined Wesi Ltd (founded by Thomas Wellor) to expand LATAM market. Building local AI agents for consulting and financial advisory firms. Focused on client acquisition across Chile and Latin America.',

      highlights: ['LATAM market expansion', 'AI Agents for consulting firms', 'Client acquisition'],

      website: 'https://wesi.ltd'

    },

    {

      year: '2025',

      name: 'Toliv Social',

      type: 'Startup Role',

      status: 'Active',

      description: 'Marketing and AI for Chilean event/ticketing app. Content strategy, social campaigns, automation concepts.',

      highlights: ['Emprende Tu Mente event', 'Instagram growth strategy', 'Content automation pipeline'],

      website: 'https://toliv.social'

    },

    {

      year: '2025',

      name: 'AutoFolder',

      type: 'Chrome Extension',

      status: 'Pending Chrome Store',

      description: 'Chrome extension that automatically organizes downloads into custom folders based on source website. Set folder preferences once, never manually sort files again.',

      highlights: ['Deployed and functional', 'Awaiting Google approval', 'Automated file management']

    }

  ];



  const scrollToSection = (section) => {

    setActiveSection(section);

    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });

  };



  return (

    <div className="min-h-screen bg-white text-black font-mono">

      {/* Navigation */}

      <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="text-2xl font-bold tracking-tighter">LM</div>

          <div className="flex gap-8 text-sm">

            {['HOME', 'TIMELINE', 'ABOUT', 'CONTACT'].map((item) => (

              <button

                key={item}

                onClick={() => scrollToSection(item.toLowerCase())}

                className="hover:text-red-600 transition-colors font-bold tracking-wide"

              >

                {item}

              </button>

            ))}

            <button

              onClick={() => scrollToSection('privacy')}

              className="hover:text-red-600 transition-colors font-bold tracking-wide"

            >

              PRIVACY

            </button>

          </div>

        </div>

      </nav>



      {/* Hero Section */}

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">

        <div className="max-w-5xl w-full">

          <div className="border-8 border-black p-12 bg-red-600 text-white">

            <h1 className="text-7xl font-black tracking-tighter leading-none mb-6">

              LUCA<br/>MARRELLA

            </h1>

            <div className="h-1 w-32 bg-white mb-6"></div>

            <p className="text-3xl font-bold tracking-tight mb-8">

              Building 5 businesses<br/>before graduation

            </p>

            <p className="text-lg leading-relaxed max-w-2xl">

              Swiss-Italian entrepreneur in Santiago. AI automation, web dev, 360° tours, consumer brands, and deep house nights. From cold-calling restaurants in Spanish to deploying AI agents for SMEs.

            </p>

          </div>

          

          <div className="flex gap-6 mt-8">

            <a href="https://www.linkedin.com/in/luca-marrella-591221289/" target="_blank" rel="noopener noreferrer" className="border-4 border-black p-4 hover:bg-black hover:text-white transition-all">

              <Linkedin size={24} />

            </a>

            <a href="https://x.com/Serpensmare" target="_blank" rel="noopener noreferrer" className="border-4 border-black p-4 hover:bg-black hover:text-white transition-all">

              <Twitter size={24} />

            </a>

            <a href="https://www.instagram.com/djdomus/?hl=en" target="_blank" rel="noopener noreferrer" className="border-4 border-black p-4 hover:bg-black hover:text-white transition-all">

              <Instagram size={24} />

            </a>

            <a href="https://wa.me/56971219394" target="_blank" rel="noopener noreferrer" className="border-4 border-black p-4 hover:bg-black hover:text-white transition-all">

              <MessageCircle size={24} />

            </a>

          </div>



          <button 

            onClick={() => scrollToSection('timeline')}

            className="mt-12 animate-bounce"

          >

            <ChevronDown size={48} className="text-red-600" />

          </button>

        </div>

      </section>



      {/* Timeline Section */}

      <section id="timeline" className="min-h-screen py-20 px-6 bg-black text-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-6xl font-black mb-16 tracking-tighter">

            <span className="text-red-600">VENTURE</span> TIMELINE

          </h2>

          

          <div className="space-y-12">

            {ventures.map((venture, index) => (

              <div key={index} className="border-l-8 border-red-600 pl-8 pb-8 relative">

                <div className="absolute -left-3 top-0 w-4 h-4 bg-red-600 rotate-45"></div>

                

                <div className="flex items-start justify-between mb-4">

                  <div>

                    <div className="text-red-600 text-sm font-bold mb-2">{venture.year}</div>

                    <h3 className="text-3xl font-black tracking-tight">{venture.name}</h3>

                    <div className="text-sm text-gray-400 mt-1">{venture.type}</div>

                  </div>

                  <div className={`px-4 py-1 text-xs font-bold border-2 ${

                    venture.status === 'Active' ? 'border-red-600 text-red-600' : 

                    venture.status === 'Deployed' ? 'border-green-400 text-green-400' :

                    venture.status === 'Pending Chrome Store' ? 'border-yellow-400 text-yellow-400' :

                    venture.status === 'Paused' ? 'border-blue-400 text-blue-400' :

                    'border-gray-500 text-gray-500'

                  }`}>

                    {venture.status}

                  </div>

                </div>

                

                <p className="text-gray-300 mb-4 leading-relaxed">{venture.description}</p>

                

                <div className="flex flex-wrap gap-2 mb-4">

                  {venture.highlights.map((highlight, i) => (

                    <span key={i} className="text-xs bg-red-600 text-white px-3 py-1 font-bold">

                      {highlight}

                    </span>

                  ))}

                </div>



                {venture.website && (

                  <a 

                    href={venture.website}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="inline-block border-2 border-white text-white px-4 py-2 text-xs font-bold hover:bg-white hover:text-black transition-all"

                  >

                    VISIT WEBSITE →

                  </a>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* About Section */}

      <section id="about" className="min-h-screen py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-6xl font-black mb-16 tracking-tighter">

            WHO <span className="text-red-600">AM I?</span>

          </h2>

          

          <div className="grid md:grid-cols-2 gap-12">

            <div className="border-4 border-black p-8">

              <h3 className="text-2xl font-black mb-4 text-red-600">BACKGROUND</h3>

              <div className="space-y-4 text-sm leading-relaxed">

                <p>University of Bath student (International Management & Spanish) on exchange at PUC Chile, funded by the Turing Scheme.</p>

                <p>Swiss-Italian dual national. Brazilian Jiu-Jitsu athlete for the Swiss national team.</p>

                <p>Based in Santiago, building across LATAM and Europe simultaneously.</p>

              </div>

            </div>

            

            <div className="border-4 border-black p-8">

              <h3 className="text-2xl font-black mb-4 text-red-600">APPROACH</h3>

              <div className="space-y-4 text-sm leading-relaxed">

                <p>Execution-first builder. Sell first, refine later. Cold-call restaurants, close deals in CLP, deploy fast.</p>

                <p>Heavy use of AI dev tools: Cursor, Lovable, Claude Code. From idea to MVP in days, not months.</p>

                <p>Building in public via Instagram, X, LinkedIn. Content as a growth channel.</p>

              </div>

            </div>

            

            <div className="border-4 border-black p-8 bg-red-600 text-white">

              <h3 className="text-2xl font-black mb-4">STACK</h3>

              <div className="space-y-2 text-sm">

                <div className="font-bold">Frontend:</div>

                <p className="text-xs mb-3">React, Vite, Vercel</p>

                

                <div className="font-bold">Backend:</div>

                <p className="text-xs mb-3">Node.js, Python, n8n workflows</p>

                

                <div className="font-bold">AI Tools:</div>

                <p className="text-xs mb-3">Cursor, Lovable, Claude, ChatGPT, Gemini, Higgsfield, Hera</p>

                

                <div className="font-bold">Data:</div>

                <p className="text-xs">Notion, Google Sheets, CRMs</p>

              </div>

            </div>

            

            <div className="border-4 border-black p-8">

              <h3 className="text-2xl font-black mb-4 text-red-600">CURRENTLY</h3>

              <div className="space-y-4 text-sm leading-relaxed">

                <p>Scaling Wesi Ltd's AI agent offerings to consulting and financial advisory firms across LATAM.</p>

                <p>Closing restaurant website deals across Santiago.</p>

                <p>AutoFolder awaiting Chrome Store approval.</p>

                <p>Training BJJ daily while balancing university and ventures.</p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Contact Section */}

      <section id="contact" className="min-h-screen py-20 px-6 bg-black text-white flex items-center">

        <div className="max-w-4xl mx-auto w-full">

          <h2 className="text-6xl font-black mb-8 tracking-tighter">

            LET'S <span className="text-red-600">WORK</span>

          </h2>

          

          <div className="border-8 border-white p-12 bg-red-600">

            <p className="text-3xl font-bold mb-8 leading-tight">

              Need AI automation for your business?<br/>

              Want a fast, modern website?<br/>

              Building something ambitious?

            </p>

            

            <a 

              href="https://wa.me/56971219394"

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xl font-black hover:bg-black hover:text-white transition-all border-4 border-black"

            >

              <MessageCircle size={24} />

              BOOK A CALL

            </a>

            

            <p className="text-sm mt-6 opacity-75">

              WhatsApp: +56 9 7121 9394

            </p>

          </div>

          

          <div className="flex gap-6 mt-12 justify-center">

            <a href="https://www.linkedin.com/in/luca-marrella-591221289/" target="_blank" rel="noopener noreferrer" className="border-4 border-white p-4 hover:bg-white hover:text-black transition-all">

              <Linkedin size={32} />

            </a>

            <a href="https://x.com/Serpensmare" target="_blank" rel="noopener noreferrer" className="border-4 border-white p-4 hover:bg-white hover:text-black transition-all">

              <Twitter size={32} />

            </a>

            <a href="https://www.instagram.com/djdomus/?hl=en" target="_blank" rel="noopener noreferrer" className="border-4 border-white p-4 hover:bg-white hover:text-black transition-all">

              <Instagram size={32} />

            </a>

          </div>

        </div>

      </section>



      {/* Privacy Policy Section */}

      <section id="privacy" className="py-20 px-6 bg-white">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-6xl font-black mb-12 tracking-tighter">

            PRIVACY <span className="text-red-600">POLICY</span>

          </h2>

          

          <div className="border-4 border-black p-8 space-y-6 text-sm leading-relaxed">

            <div>

              <h3 className="text-xl font-black mb-3">Last Updated: November 2024</h3>

              <p>This Privacy Policy describes how Luca Marrella and Wesi Ltd ("we", "our", "us") collect, use, and protect your personal information across our websites, applications, and services.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">1. INFORMATION WE COLLECT</h3>

              <p className="mb-2"><strong>Personal Information:</strong></p>

              <ul className="list-disc pl-6 space-y-1">

                <li>Contact details: name, email address, phone number, WhatsApp number</li>

                <li>Business information: company name, industry, website</li>

                <li>Communication data: messages sent via contact forms, WhatsApp, or email</li>

              </ul>

              

              <p className="mb-2 mt-4"><strong>Automatically Collected Data:</strong></p>

              <ul className="list-disc pl-6 space-y-1">

                <li>Browser type and version</li>

                <li>Operating system</li>

                <li>IP address and approximate location</li>

                <li>Pages visited and time spent on site</li>

                <li>Referral source</li>

              </ul>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">2. HOW WE USE YOUR INFORMATION</h3>

              <ul className="list-disc pl-6 space-y-1">

                <li>To respond to inquiries and provide requested services</li>

                <li>To improve our websites and user experience</li>

                <li>To send service-related communications</li>

                <li>To analyze website traffic and usage patterns</li>

                <li>To comply with legal obligations</li>

              </ul>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">3. COOKIES AND TRACKING</h3>

              <p>We may use cookies and similar tracking technologies to:</p>

              <ul className="list-disc pl-6 space-y-1 mt-2">

                <li>Remember your preferences</li>

                <li>Analyze site traffic and usage</li>

                <li>Improve site functionality</li>

              </ul>

              <p className="mt-3">You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">4. THIRD-PARTY SERVICES</h3>

              <p>We may use third-party services including:</p>

              <ul className="list-disc pl-6 space-y-1 mt-2">

                <li><strong>Hosting:</strong> Vercel, Lovable</li>

                <li><strong>Analytics:</strong> Google Analytics or similar tools</li>

                <li><strong>Communication:</strong> WhatsApp Business API, email providers</li>

                <li><strong>Automation:</strong> n8n, various CRM platforms</li>

              </ul>

              <p className="mt-3">These services have their own privacy policies governing their data collection and use.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">5. CHROME EXTENSION COMPLIANCE</h3>

              <p>If you use any of our Chrome extensions:</p>

              <ul className="list-disc pl-6 space-y-1 mt-2">

                <li>We collect only the minimum data necessary for functionality</li>

                <li>We do not sell or share your personal data with third parties for marketing purposes</li>

                <li>Browser data is processed locally when possible</li>

                <li>Any data sent to our servers is encrypted and securely stored</li>

                <li>You can request deletion of your data at any time</li>

              </ul>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">6. DATA STORAGE AND SECURITY</h3>

              <p>We implement appropriate technical and organizational measures to protect your personal information. Data is stored on secure servers and accessed only by authorized personnel. However, no method of transmission over the internet is 100% secure.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">7. YOUR RIGHTS (GDPR COMPLIANCE)</h3>

              <p>If you are in the EU/EEA, you have the right to:</p>

              <ul className="list-disc pl-6 space-y-1 mt-2">

                <li>Access your personal data</li>

                <li>Rectify inaccurate data</li>

                <li>Request deletion of your data</li>

                <li>Object to processing of your data</li>

                <li>Request data portability</li>

                <li>Withdraw consent at any time</li>

              </ul>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">8. DATA RETENTION</h3>

              <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When data is no longer needed, it is securely deleted or anonymized.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">9. CHILDREN'S PRIVACY</h3>

              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">10. INTERNATIONAL TRANSFERS</h3>

              <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">11. CHANGES TO THIS POLICY</h3>

              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the updated policy.</p>

            </div>



            <div>

              <h3 className="text-xl font-black mb-3 text-red-600">12. CONTACT US</h3>

              <p>For questions about this Privacy Policy or to exercise your rights, contact us via:</p>

              <ul className="list-none mt-2 space-y-1">

                <li><strong>WhatsApp:</strong> +56 9 7121 9394</li>

                <li><strong>LinkedIn:</strong> linkedin.com/in/luca-marrella-591221289/</li>

              </ul>

            </div>



            <div className="border-t-4 border-black pt-6 mt-8">

              <p className="font-bold">Company Information:</p>

              <p className="mt-2">Wesi Ltd<br/>Operating across Chile and Europe<br/>Represented by Luca Marrella</p>

            </div>

          </div>

        </div>

      </section>



      {/* Footer */}

      <footer className="bg-black text-white py-8 px-6 border-t-4 border-red-600">

        <div className="max-w-6xl mx-auto text-center">

          <p className="font-bold text-sm">© 2024 LUCA MARRELLA / WESI LTD</p>

          <p className="text-xs mt-2 text-gray-400">Built with AI tools. Deployed fast. Always iterating.</p>

        </div>

      </footer>

    </div>

  );

};



export default Portfolio;

