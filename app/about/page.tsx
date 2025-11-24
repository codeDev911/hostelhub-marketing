

export function generateMetadata(){

  return {
    title: "About hostelhub",
    description: "HostelHub is dedicated to making hostel accommodation accessible and affordable for every student in Pakistan. We believe that finding a safe place to stay shouldn't be complicated or stressful.",
    keywords:"about, hostelhub, pakistan, hostels, students, study, about hosetlhub, ai",
    author:"Hostelhub"
  }
}

const team = [
  {
    "role":"Founder & CEO",
    "name":"Afnan Ahad",
    "bio":"A full stack developer and Comupter engineer.",
    "image":""
  },
  {
    "role":"Sales Manager",
    "name":"Saifullah Khan",
    "bio":"Expert in accountent and finance.",
    "image":""
  },
  {
    "role":"Designer",
    "name":"Anwar Iqbal",
    "bio":"A new era in designing.", 
    "image":""
  },
   
]

export default function About() {
  return (
    <>
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">About HostelHub</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Connecting Pakistani students with safe, affordable, and comfortable hostel accommodations across the
              country.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                HostelHub is dedicated to making hostel accommodation accessible and affordable for every student in
                Pakistan. We believe that finding a safe place to stay shouldn't be complicated or stressful.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our platform connects students with verified hostels, providing transparent pricing, detailed
                information, and real reviews to help you make the best choice.
              </p>
            </div>
            <div className="bg-accent/10 p-6 sm:p-8 rounded-sm border border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-4">Why Choose HostelHub?</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Verified and trusted hostels across Pakistan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Transparent pricing with no hidden charges</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Real reviews from verified students</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Easy search and booking process</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="bg-primary-foreground border border-border p-6 sm:p-8 rounded-sm text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-foreground/70 text-sm">Hostels Listed</p>
            </div>
            <div className="bg-primary-foreground border border-border p-6 sm:p-8 rounded-sm text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">50K+</div>
              <p className="text-foreground/70 text-sm">Happy Students</p>
            </div>
            <div className="bg-primary-foreground border border-border p-6 sm:p-8 rounded-sm text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">20+</div>
              <p className="text-foreground/70 text-sm">Cities Covered</p>
            </div>
            <div className="bg-primary-foreground border border-border p-6 sm:p-8 rounded-sm text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">4.8★</div>
              <p className="text-foreground/70 text-sm">Average Rating</p>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Our Team</h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              HostelHub is built by a passionate team of developers, designers, and student advocates who understand the
              challenges of finding accommodation. We're committed to making your hostel search experience smooth and
              hassle-free.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              {team.map((member:any)=>(
              <div className="p-2 bg-accent/10 flex flex-col text-center rounded-md border border-accent/30">
                  <h3 className="text-base text-primary font-bold">{member.name}</h3>
                  <p className="text-sm  text-secondray">{member.role}</p>
                  <p className="text-xs mt-2 text-secondray">{member.bio}</p>
              </div>
            ))}
            </div>


            <p className="text-foreground/70 leading-relaxed mt-4">
              Have questions? Feel free to{" "}
              <a href="/contact" className="text-accent font-semibold hover:underline">
                contact us
              </a>{" "}
              anytime. We're here to help!
            </p>
          </div>
        </div>
      </main>
      
    </>
  )
}
