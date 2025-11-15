export const mockCities = [
    {
        "name": "Karachi",
        "areas": [
            "DHA",
            "Clifton",
            "Gulshan-e-Iqbal",
            "North Nazimabad",
            "Saddar",
            "Korangi",
            "Malir",
            "Nazimabad",
            "PECHS",
            "Federal B Area",
            "Gulistan-e-Jauhar",
            "Bahria Town",
            "Lyari",
            "Orangi Town",
            "Garden East",
            "Garden West",
            "Allama Iqbal Colony",
            "Saudabad",
            "New Karachi",
            "Landhi"
        ],
    },
    {
        "name": "Lahore",
        "areas": [
            "DHA",
            "Bahria Town",
            "Gulberg",
            "Model Town",
            "Johar Town",
            "Askari",
            "Cantt",
            "Faisal Town",
            "Wapda Town",
            "Valencia Town",
            "Samanabad",
            "Ichhra",
            "Shad Bagh",
            "Badami Bagh",
            "Sabzazar",
            "Gulshan-e-Ravi",
            "Thokar Niaz Baig",
            "Burj Colony",
            "Canal Road"
        ],
    },
    {
        "name": "Islamabad",
        "areas": [
            "F-6",
            "F-7",
            "F-8",
            "G-9",
            "G-10",
            "Blue Area",
            "E-11",
            "Bahria Enclave",
            "I-8",
            "F-11",
            "G-11",
            "G-13",
            "B-17",
            "DHA Islamabad",
            "E-7",
            "G-12",
            "I-10",
            "I-9",
            "Bhara Kahu",
            "Bani Gala"
        ],
    },
    {
        "name": "Peshawar",
        "areas": [
            "Hayatabad",
            "University Town",
            "Saddar",
            "Gulbahar",
            "Hashtnagri",
            "Nishterabad",
            "Regi Model Town",
            "Warsak Road",
            "Dalazak Road",
            "Charsadda Road",
            "Ring Road",
            "Board Bazar",
            "Abra Road",
            "Defence Colony",
            "Gulberg",
            "Badaber",
            "Momin Town",
            "Sethi Mohallah",
            "Faqeerabad",
            "Kohat Road"
        ],
    },
    {
        "name": "Rawalpindi",
        "areas": [
            "Saddar",
            "Peshawar Road",
            "Chaklala",
            "Bahria Town Phase 1",
            "Bahria Town Phase 2",
            "Askari 7",
            "Askari 8",
            "Westridge",
            "Satellite Town",
            "Murree Road",
            "Saddar Cantt",
            "Pindi Cantt",
            "Ganjmandi",
            "College Road",
            "F-8 Markaz (Rawalpindi side)"
        ],
    },
    {
        "name": "Multan",
        "areas": [
            "Cantt",
            "Bosan Road",
            "Shah Rukn-e-Alam",
            "Model Town",
            "Gulgasht Colony",
            "Wapda Town",
            "New Multan",
            "Town Ship Area",
            "Colonies in Bosan Road area",
            "Airport Road Multan",
            "Dunyapur Road",
            "Islamabad Colony",
            "Fort Park Area",
            "Shamsabad",
            "City Centre Multan",
            "Shah Jamal Road"
        ],
    },
    {
        "name": "Quetta",
        "areas": [
            "Cantt",
            "Jinnah Road",
            "Samungli Road",
            "Sariab Road",
            "Satellite Town",
            "Model Town",
            "Brewery Road",
            "Hanna Lake vicinity",
            "Killi Sirki",
            "Pishin Road",
            "Muslim Bagh Road",
            "Airport Road Quetta",
            "Hazarganji",
            "Gulistan Road",
            "Gul Muhammad Lal Road"
        ],
    },
    {
        "name": "Sialkot",
        "areas": [
            "Cantt",
            "Defense Road",
            "Shahabpura",
            "Paris Road",
            "Model Town",
            "Ugoki Road",
            "Kotli Behram",
            "Rasulpur",
            "B‐Block Sialkot",
            "Sikh Chowk",
            "Umar Colony",
            "DC Park Road",
            "Wahadat Road Sialkot",
            "Civil Lines Sialkot",
            "Sambrial"
        ],
    },
    {
        "name": "Hyderabad",
        "areas": [
            "Qasimabad",
            "Latifabad",
            "Hirabad",
            "Saddar",
            "Tilak Incline",
            "City Center Hyderabad",
            "Cantt",
            "Jhimpir Colony",
            "Gorakh Hills Road area",
            "Mashriq Colony",
            "Famous Chowk area",
            "Chak Beli Khan Road suburb",
            "Tando Jam Road area",
            "Jamshoro Road vicinity"
        ],
    },
    {
        "name": "Faisalabad",
        "areas": [
            "D Ground",
            "Jinnah Colony",
            "Peoples Colony",
            "Madina Town",
            "Canal Road",
            "Millat Town",
            "Samanabad",
            "Civil Lines Faisalabad",
            "Chenab Colony",
            "Satiana Road",
            "Jhang Road Faisalabad",
            "Brewery Road Faisalabad",
            "Iqbal Town Faisalabad",
            "Ghulam Muhammad Abad",
            "Saddar Faisalabad"
        ],
    }

]

 
export const getSeoMeta = (city?: string, area?: string) => {
//   if (!city) return null; // No city, can't generate meta

  const cityData = mockCities.find(c => c.name.toLowerCase() === city?.toLowerCase());
//   if (!cityData?) return null; // City not found

  if (area) {
    const matchedArea =cityData ? cityData?.areas.find(a => a.toLowerCase() === area.toLowerCase()) : area
    if (matchedArea) {
      // Return area-level meta
      return {
        city: cityData?.name,
        area: matchedArea,
        title: `Best Hostels in ${matchedArea} ${cityData?.name} with Affordable & Comfortable Stay | Hostelhub`,
        desc: `Find top-rated hostels in ${matchedArea} ${cityData?.name} offering safe, budget-friendly, and comfortable stays. Book easily on Hostelhub.`,
        keywords: `${matchedArea} ${cityData?.name} hostels, hostels in ${matchedArea}, ${cityData?.name}, affordable hostels ${matchedArea} ${cityData?.name}, Hostelhub ${matchedArea} ${cityData?.name}, ${matchedArea} apartments,pakistan, hostelhub, ai, startup, students, mdcat, entry test, etea test, best university in pakistan, university, UET, KMU, KMC, school, best school in pakistan, best university in pakistan`,
      };
    }
  }

  // Return city-level meta if area not provided or not found
  return {
    city: cityData?.name,
    title: `Best Hostels in ${cityData?.name} with Affordable & Comfortable Accommodation | Hostelhub`,
    desc: `Explore the best hostels and apartments in ${cityData?.name} with affordable prices, prime locations, and comfortable accommodations. Hostelhub makes booking easy.`,
    keywords: `hostels in ${cityData?.name}, ${cityData?.name} accommodation, affordable hostels ${cityData?.name}, Hostelhub ${cityData?.name}, best hostels ${cityData?.name}, ${cityData?.name} apartments,pakistan, hostelhub, ai, startup, students, mdcat, entry test, etea test, best university in pakistan, university, UET, KMU, KMC, school, best school in pakistan, best university in pakistan`,
  };
};
 



