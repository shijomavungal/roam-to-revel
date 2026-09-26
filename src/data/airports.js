const AIRPORTS = [
  ['DEL', 'Delhi', 'Indira Gandhi International', 'India', 'New Delhi'],
  ['BOM', 'Mumbai', 'Chhatrapati Shivaji Maharaj International', 'India', 'Bombay'],
  ['BLR', 'Bengaluru', 'Kempegowda International', 'India', 'Bangalore'],
  ['MAA', 'Chennai', 'Chennai International', 'India', 'Madras'],
  ['CCU', 'Kolkata', 'Netaji Subhas Chandra Bose International', 'India', 'Calcutta'],
  ['HYD', 'Hyderabad', 'Rajiv Gandhi International', 'India'],
  ['COK', 'Kochi', 'Cochin International', 'India', 'Cochin'],
  ['GOI', 'Goa', 'Dabolim Airport', 'India'],
  ['GOX', 'Goa', 'Manohar International', 'India', 'Mopa'],
  ['AMD', 'Ahmedabad', 'Sardar Vallabhbhai Patel International', 'India'],
  ['PNQ', 'Pune', 'Pune Airport', 'India'],
  ['JAI', 'Jaipur', 'Jaipur International', 'India'],
  ['LKO', 'Lucknow', 'Chaudhary Charan Singh International', 'India'],
  ['TRV', 'Thiruvananthapuram', 'Trivandrum International', 'India', 'Trivandrum'],
  ['IXC', 'Chandigarh', 'Shaheed Bhagat Singh International', 'India'],
  ['GAU', 'Guwahati', 'Lokpriya Gopinath Bordoloi International', 'India'],
  ['IXB', 'Bagdogra', 'Bagdogra Airport', 'India', 'Siliguri'],
  ['SXR', 'Srinagar', 'Sheikh ul-Alam International', 'India'],
  ['IXE', 'Mangaluru', 'Mangalore International', 'India', 'Mangalore'],
  ['VNS', 'Varanasi', 'Lal Bahadur Shastri International', 'India'],
  ['ATQ', 'Amritsar', 'Sri Guru Ram Dass Jee International', 'India'],
  ['CJB', 'Coimbatore', 'Coimbatore International', 'India'],
  ['IXM', 'Madurai', 'Madurai Airport', 'India'],
  ['IDR', 'Indore', 'Devi Ahilya Bai Holkar Airport', 'India'],
  ['NAG', 'Nagpur', 'Dr. Babasaheb Ambedkar International', 'India'],
  ['PAT', 'Patna', 'Jay Prakash Narayan Airport', 'India'],
  ['BBI', 'Bhubaneswar', 'Biju Patnaik International', 'India'],
  ['IXR', 'Ranchi', 'Birsa Munda Airport', 'India'],
  ['IXJ', 'Jammu', 'Jammu Airport', 'India'],
  ['DED', 'Dehradun', 'Jolly Grant Airport', 'India'],
  ['IXZ', 'Port Blair', 'Veer Savarkar International', 'India'],
  ['CCJ', 'Kozhikode', 'Calicut International', 'India', 'Calicut'],
  ['TRZ', 'Tiruchirappalli', 'Tiruchirappalli International', 'India', 'Trichy'],
  ['VTZ', 'Visakhapatnam', 'Visakhapatnam Airport', 'India', 'Vizag'],
  ['RPR', 'Raipur', 'Swami Vivekananda Airport', 'India'],
  ['BDQ', 'Vadodara', 'Vadodara Airport', 'India', 'Baroda'],
  ['STV', 'Surat', 'Surat Airport', 'India'],
  ['UDR', 'Udaipur', 'Maharana Pratap Airport', 'India'],
  ['JDH', 'Jodhpur', 'Jodhpur Airport', 'India'],
  ['IXL', 'Leh', 'Kushok Bakula Rimpochee Airport', 'India', 'Ladakh'],
  ['CNN', 'Kannur', 'Kannur International', 'India'],
  ['HSR', 'Rajkot', 'Hirasar Airport', 'India'],
  ['IXG', 'Belagavi', 'Belagavi Airport', 'India', 'Belgaum'],
  ['HBX', 'Hubballi', 'Hubballi Airport', 'India', 'Hubli'],
  ['MYQ', 'Mysuru', 'Mysuru Airport', 'India', 'Mysore'],
  ['TIR', 'Tirupati', 'Tirupati Airport', 'India'],
  ['VGA', 'Vijayawada', 'Vijayawada Airport', 'India'],
  ['IXA', 'Agartala', 'Maharaja Bir Bikram Airport', 'India'],
  ['DIB', 'Dibrugarh', 'Dibrugarh Airport', 'India'],
  ['IMF', 'Imphal', 'Imphal Airport', 'India'],
  ['GAY', 'Gaya', 'Gaya Airport', 'India'],
  ['AYJ', 'Ayodhya', 'Maharishi Valmiki International', 'India'],
  ['GOP', 'Gorakhpur', 'Gorakhpur Airport', 'India'],
  ['DHM', 'Dharamshala', 'Kangra Airport', 'India', 'Kangra'],
  ['BHO', 'Bhopal', 'Raja Bhoj Airport', 'India'],
  ['JLR', 'Jabalpur', 'Jabalpur Airport', 'India'],
  ['IXD', 'Prayagraj', 'Prayagraj Airport', 'India', 'Allahabad'],
  ['IXU', 'Chhatrapati Sambhajinagar', 'Chhatrapati Sambhajinagar Airport', 'India', 'Aurangabad'],
  ['TCR', 'Thoothukudi', 'Tuticorin Airport', 'India', 'Tuticorin'],
  ['DBR', 'Darbhanga', 'Darbhanga Airport', 'India'],
  ['SAG', 'Shirdi', 'Shirdi Airport', 'India'],
  ['RJA', 'Rajahmundry', 'Rajahmundry Airport', 'India'],
  ['BHJ', 'Bhuj', 'Bhuj Airport', 'India'],
  ['JGA', 'Jamnagar', 'Jamnagar Airport', 'India'],
  ['DIU', 'Diu', 'Diu Airport', 'India'],
  ['KLH', 'Kolhapur', 'Kolhapur Airport', 'India'],
  ['ISK', 'Nashik', 'Nashik Airport', 'India'],
  ['HJR', 'Khajuraho', 'Khajuraho Airport', 'India'],
  ['JSA', 'Jaisalmer', 'Jaisalmer Airport', 'India'],
  ['IXW', 'Jamshedpur', 'Sonari Airport', 'India'],
  ['RDP', 'Durgapur', 'Kazi Nazrul Islam Airport', 'India'],
  ['LHR', 'London', 'Heathrow', 'United Kingdom'],
  ['LGW', 'London', 'Gatwick', 'United Kingdom'],
  ['STN', 'London', 'Stansted', 'United Kingdom'],
  ['LTN', 'London', 'Luton', 'United Kingdom'],
  ['LCY', 'London', 'London City', 'United Kingdom'],
  ['MAN', 'Manchester', 'Manchester Airport', 'United Kingdom'],
  ['EDI', 'Edinburgh', 'Edinburgh Airport', 'United Kingdom'],
  ['GLA', 'Glasgow', 'Glasgow Airport', 'United Kingdom'],
  ['BHX', 'Birmingham', 'Birmingham Airport', 'United Kingdom'],
  ['BRS', 'Bristol', 'Bristol Airport', 'United Kingdom'],
  ['NCL', 'Newcastle', 'Newcastle Airport', 'United Kingdom'],
  ['LBA', 'Leeds', 'Leeds Bradford Airport', 'United Kingdom'],
  ['EMA', 'East Midlands', 'East Midlands Airport', 'United Kingdom', 'Nottingham'],
  ['CWL', 'Cardiff', 'Cardiff Airport', 'United Kingdom'],
  ['ABZ', 'Aberdeen', 'Aberdeen Airport', 'United Kingdom'],
  ['BFS', 'Belfast', 'Belfast International', 'United Kingdom'],
  ['BHD', 'Belfast', 'George Best Belfast City', 'United Kingdom'],
  ['DUB', 'Dublin', 'Dublin Airport', 'Ireland'],
  ['ORK', 'Cork', 'Cork Airport', 'Ireland'],
  ['SNN', 'Shannon', 'Shannon Airport', 'Ireland'],
  ['CDG', 'Paris', 'Charles de Gaulle', 'France'],
  ['ORY', 'Paris', 'Orly', 'France'],
  ['AMS', 'Amsterdam', 'Schiphol', 'Netherlands'],
  ['FRA', 'Frankfurt', 'Frankfurt Airport', 'Germany'],
  ['MUC', 'Munich', 'Munich Airport', 'Germany'],
  ['BER', 'Berlin', 'Berlin Brandenburg', 'Germany'],
  ['MAD', 'Madrid', 'Adolfo Suárez Madrid-Barajas', 'Spain'],
  ['BCN', 'Barcelona', 'Josep Tarradellas Barcelona-El Prat', 'Spain'],
  ['AGP', 'Malaga', 'Málaga-Costa del Sol', 'Spain'],
  ['PMI', 'Palma', 'Palma de Mallorca', 'Spain', 'Majorca'],
  ['LIS', 'Lisbon', 'Humberto Delgado', 'Portugal'],
  ['OPO', 'Porto', 'Francisco Sá Carneiro', 'Portugal'],
  ['FCO', 'Rome', 'Leonardo da Vinci Fiumicino', 'Italy'],
  ['MXP', 'Milan', 'Malpensa', 'Italy'],
  ['VCE', 'Venice', 'Marco Polo', 'Italy'],
  ['NAP', 'Naples', 'Naples International', 'Italy'],
  ['ZRH', 'Zurich', 'Zurich Airport', 'Switzerland'],
  ['GVA', 'Geneva', 'Geneva Airport', 'Switzerland'],
  ['VIE', 'Vienna', 'Vienna International', 'Austria'],
  ['PRG', 'Prague', 'Václav Havel Airport', 'Czechia'],
  ['BUD', 'Budapest', 'Budapest Ferenc Liszt', 'Hungary'],
  ['WAW', 'Warsaw', 'Chopin Airport', 'Poland'],
  ['ATH', 'Athens', 'Eleftherios Venizelos', 'Greece'],
  ['IST', 'Istanbul', 'Istanbul Airport', 'Turkey'],
  ['SAW', 'Istanbul', 'Sabiha Gökçen', 'Turkey'],
  ['AYT', 'Antalya', 'Antalya Airport', 'Turkey'],
  ['DXB', 'Dubai', 'Dubai International', 'United Arab Emirates'],
  ['DWC', 'Dubai', 'Al Maktoum International', 'United Arab Emirates'],
  ['AUH', 'Abu Dhabi', 'Zayed International', 'United Arab Emirates'],
  ['SHJ', 'Sharjah', 'Sharjah International', 'United Arab Emirates'],
  ['DOH', 'Doha', 'Hamad International', 'Qatar'],
  ['BAH', 'Bahrain', 'Bahrain International', 'Bahrain'],
  ['KWI', 'Kuwait City', 'Kuwait International', 'Kuwait'],
  ['MCT', 'Muscat', 'Muscat International', 'Oman'],
  ['RUH', 'Riyadh', 'King Khalid International', 'Saudi Arabia'],
  ['JED', 'Jeddah', 'King Abdulaziz International', 'Saudi Arabia'],
  ['MED', 'Medina', 'Prince Mohammad bin Abdulaziz', 'Saudi Arabia'],
  ['CAI', 'Cairo', 'Cairo International', 'Egypt'],
  ['SSH', 'Sharm el-Sheikh', 'Sharm el-Sheikh International', 'Egypt'],
  ['HRG', 'Hurghada', 'Hurghada International', 'Egypt'],
  ['CMN', 'Casablanca', 'Mohammed V International', 'Morocco'],
  ['RAK', 'Marrakesh', 'Marrakesh Menara', 'Morocco'],
  ['JNB', 'Johannesburg', 'O. R. Tambo International', 'South Africa'],
  ['CPT', 'Cape Town', 'Cape Town International', 'South Africa'],
  ['NBO', 'Nairobi', 'Jomo Kenyatta International', 'Kenya'],
  ['ADD', 'Addis Ababa', 'Addis Ababa Bole', 'Ethiopia'],
  ['MRU', 'Mauritius', 'Sir Seewoosagur Ramgoolam', 'Mauritius'],
  ['SEZ', 'Mahé', 'Seychelles International', 'Seychelles'],
  ['MLE', 'Malé', 'Velana International', 'Maldives'],
  ['CMB', 'Colombo', 'Bandaranaike International', 'Sri Lanka'],
  ['KTM', 'Kathmandu', 'Tribhuvan International', 'Nepal'],
  ['DAC', 'Dhaka', 'Hazrat Shahjalal International', 'Bangladesh'],
  ['KHI', 'Karachi', 'Jinnah International', 'Pakistan'],
  ['LHE', 'Lahore', 'Allama Iqbal International', 'Pakistan'],
  ['ISB', 'Islamabad', 'Islamabad International', 'Pakistan'],
  ['SIN', 'Singapore', 'Changi', 'Singapore'],
  ['BKK', 'Bangkok', 'Suvarnabhumi', 'Thailand'],
  ['DMK', 'Bangkok', 'Don Mueang', 'Thailand'],
  ['HKT', 'Phuket', 'Phuket International', 'Thailand'],
  ['CNX', 'Chiang Mai', 'Chiang Mai International', 'Thailand'],
  ['KUL', 'Kuala Lumpur', 'Kuala Lumpur International', 'Malaysia'],
  ['PEN', 'Penang', 'Penang International', 'Malaysia'],
  ['CGK', 'Jakarta', 'Soekarno-Hatta', 'Indonesia'],
  ['DPS', 'Denpasar', 'Ngurah Rai', 'Indonesia', 'Bali'],
  ['MNL', 'Manila', 'Ninoy Aquino International', 'Philippines'],
  ['SGN', 'Ho Chi Minh City', 'Tan Son Nhat', 'Vietnam', 'Saigon'],
  ['HAN', 'Hanoi', 'Noi Bai International', 'Vietnam'],
  ['PNH', 'Phnom Penh', 'Phnom Penh International', 'Cambodia'],
  ['REP', 'Siem Reap', 'Siem Reap-Angkor', 'Cambodia'],
  ['RGN', 'Yangon', 'Yangon International', 'Myanmar'],
  ['HKG', 'Hong Kong', 'Hong Kong International', 'Hong Kong'],
  ['TPE', 'Taipei', 'Taoyuan International', 'Taiwan'],
  ['NRT', 'Tokyo', 'Narita', 'Japan'],
  ['HND', 'Tokyo', 'Haneda', 'Japan'],
  ['KIX', 'Osaka', 'Kansai', 'Japan'],
  ['ICN', 'Seoul', 'Incheon', 'South Korea'],
  ['PEK', 'Beijing', 'Capital', 'China'],
  ['PKX', 'Beijing', 'Daxing', 'China'],
  ['PVG', 'Shanghai', 'Pudong', 'China'],
  ['SHA', 'Shanghai', 'Hongqiao', 'China'],
  ['CAN', 'Guangzhou', 'Baiyun', 'China'],
  ['SYD', 'Sydney', 'Kingsford Smith', 'Australia'],
  ['MEL', 'Melbourne', 'Melbourne Airport', 'Australia'],
  ['BNE', 'Brisbane', 'Brisbane Airport', 'Australia'],
  ['PER', 'Perth', 'Perth Airport', 'Australia'],
  ['AKL', 'Auckland', 'Auckland Airport', 'New Zealand'],
  ['CHC', 'Christchurch', 'Christchurch Airport', 'New Zealand'],
  ['JFK', 'New York', 'John F. Kennedy', 'United States'],
  ['EWR', 'New York', 'Newark Liberty', 'United States', 'Newark'],
  ['LGA', 'New York', 'LaGuardia', 'United States'],
  ['LAX', 'Los Angeles', 'Los Angeles International', 'United States'],
  ['SFO', 'San Francisco', 'San Francisco International', 'United States'],
  ['ORD', 'Chicago', "O'Hare", 'United States'],
  ['MIA', 'Miami', 'Miami International', 'United States'],
  ['ATL', 'Atlanta', 'Hartsfield-Jackson', 'United States'],
  ['BOS', 'Boston', 'Logan International', 'United States'],
  ['IAD', 'Washington', 'Dulles', 'United States'],
  ['SEA', 'Seattle', 'Seattle-Tacoma', 'United States'],
  ['LAS', 'Las Vegas', 'Harry Reid International', 'United States'],
  ['DFW', 'Dallas', 'Dallas Fort Worth', 'United States'],
  ['YYZ', 'Toronto', 'Pearson', 'Canada'],
  ['YVR', 'Vancouver', 'Vancouver International', 'Canada'],
  ['YUL', 'Montreal', 'Montréal-Trudeau', 'Canada'],
  ['MEX', 'Mexico City', 'Mexico City International', 'Mexico'],
  ['CUN', 'Cancún', 'Cancún International', 'Mexico'],
  ['GRU', 'São Paulo', 'Guarulhos', 'Brazil', 'Sao Paulo'],
  ['GIG', 'Rio de Janeiro', 'Galeão', 'Brazil'],
  ['EZE', 'Buenos Aires', 'Ministro Pistarini', 'Argentina'],
  ['LIM', 'Lima', 'Jorge Chávez', 'Peru'],
  ['SCL', 'Santiago', 'Arturo Merino Benítez', 'Chile'],
  ['BOG', 'Bogotá', 'El Dorado', 'Colombia', 'Bogota'],
];

function toAirport([code, city, name, country, aliases = '']) {
  return { code, city, name, country, aliases };
}

const airports = AIRPORTS.map(toAirport);

export function formatAirport(airport) {
  return `${airport.city} — ${airport.name} (${airport.code})`;
}

function startsWithAny(values, query) {
  return values.some((value) => value && (value === query || value.startsWith(query)));
}

function scoreAirport(airport, query) {
  const code = airport.code.toLowerCase();
  const city = airport.city.toLowerCase();
  const name = airport.name.toLowerCase();
  const aliases = airport.aliases.toLowerCase().split(',').map((alias) => alias.trim()).filter(Boolean);
  const places = [city, ...aliases];

  if (code === query) return 100;
  if (places.some((place) => place === query)) return 90;
  if (code.startsWith(query)) return 80;
  if (startsWithAny(places, query)) return 70;
  if (name.startsWith(query)) return 60;
  if (query.length >= 4 && places.some((place) => place.includes(query))) return 50;
  if (query.length >= 4 && name.includes(query)) return 40;
  if (query.length >= 4 && airport.country.toLowerCase().startsWith(query)) return 20;
  return 0;
}

export function searchAirports(query, limit = 8) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) return [];

  return airports
    .map((airport) => ({ airport, score: scoreAirport(airport, normalized) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.airport.city.localeCompare(b.airport.city))
    .slice(0, limit)
    .map((item) => item.airport);
}

export function isKnownAirport(value) {
  const normalized = value.trim().toLowerCase();
  return airports.some((airport) => formatAirport(airport).toLowerCase() === normalized);
}
