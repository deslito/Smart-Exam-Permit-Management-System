import prisma from "../config/prismaClient";

type CourseSeed = {
  code: string;
  name: string;
  departmentId: string; // e.g. 'DE001'
  type: "Bachelor" | "Diploma" | "Master" | "Phd";
};

const courses: CourseSeed[] = [
  // Already existing with course units
  {
    code: "CEE101",
    name: "Civil Engineering",
    departmentId: "DE001",
    type: "Bachelor",
  },
  {
    code: "MPE101",
    name: "Mechanical Engineering",
    departmentId: "DE002",
    type: "Bachelor",
  },
  {
    code: "EEE101",
    name: "Electrical Engineering",
    departmentId: "DE003",
    type: "Bachelor",
  },
  {
    code: "CSC101",
    name: "Computer Science",
    departmentId: "DE012",
    type: "Bachelor",
  },
  {
    code: "AGE101",
    name: "Agricultural Engineering",
    departmentId: "DE013",
    type: "Bachelor",
  },
  {
    code: "EDU101",
    name: "Education",
    departmentId: "DE040",
    type: "Bachelor",
  },
  { code: "LAW101", name: "Law", departmentId: "DE026", type: "Bachelor" },

  // DE001: Civil & Environmental Eng
  {
    code: "CEE101",
    name: "Intro to Civil Engineering",
    departmentId: "DE001",
    type: "Bachelor",
  },
  {
    code: "CEE102",
    name: "Engineering Drawing & CAD",
    departmentId: "DE001",
    type: "Bachelor",
  },
  {
    code: "CEE201",
    name: "Structural Analysis I",
    departmentId: "DE001",
    type: "Bachelor",
  },

  // DE002: Mechanical & Production Eng
  {
    code: "MPE101",
    name: "Statics & Mechanics of Materials",
    departmentId: "DE002",
    type: "Bachelor",
  },
  {
    code: "MPE102",
    name: "Dynamics & Vibrations",
    departmentId: "DE002",
    type: "Bachelor",
  },
  {
    code: "MPE201",
    name: "Thermodynamics I",
    departmentId: "DE002",
    type: "Bachelor",
  },

  // DE003: Electrical & Electronics Eng
  {
    code: "EEE101",
    name: "Circuit Theory I",
    departmentId: "DE003",
    type: "Bachelor",
  },
  {
    code: "EEE102",
    name: "Digital Logic & Microprocessors",
    departmentId: "DE003",
    type: "Bachelor",
  },
  {
    code: "EEE201",
    name: "Electromagnetic Fields",
    departmentId: "DE003",
    type: "Bachelor",
  },

  // DE004: Mining, Chemical & Petroleum Eng
  {
    code: "MCP101",
    name: "Intro to Mining Engineering",
    departmentId: "DE004",
    type: "Bachelor",
  },
  {
    code: "MCP102",
    name: "Fundamentals of Chemical Eng",
    departmentId: "DE004",
    type: "Bachelor",
  },
  {
    code: "MCP201",
    name: "Petroleum Recovery Methods",
    departmentId: "DE004",
    type: "Bachelor",
  },

  // DE005: Biological Sciences
  {
    code: "BIO101",
    name: "Cell Biology",
    departmentId: "DE005",
    type: "Bachelor",
  },
  {
    code: "BIO102",
    name: "Genetics & Evolution",
    departmentId: "DE005",
    type: "Bachelor",
  },
  {
    code: "BIO201",
    name: "Microbiology",
    departmentId: "DE005",
    type: "Bachelor",
  },

  // DE006: Chemistry
  {
    code: "CHE101",
    name: "General Chemistry I",
    departmentId: "DE006",
    type: "Bachelor",
  },
  {
    code: "CHE102",
    name: "Organic Chemistry I",
    departmentId: "DE006",
    type: "Bachelor",
  },
  {
    code: "CHE201",
    name: "Physical Chemistry",
    departmentId: "DE006",
    type: "Bachelor",
  },

  // DE007: Environmental Science
  {
    code: "ENV101",
    name: "Intro to Environmental Science",
    departmentId: "DE007",
    type: "Bachelor",
  },
  {
    code: "ENV102",
    name: "Environmental Chemistry",
    departmentId: "DE007",
    type: "Bachelor",
  },
  {
    code: "ENV201",
    name: "Pollution Control & Management",
    departmentId: "DE007",
    type: "Bachelor",
  },

  // DE008: Food Processing Tech
  {
    code: "FPT101",
    name: "Food Chemistry",
    departmentId: "DE008",
    type: "Bachelor",
  },
  {
    code: "FPT102",
    name: "Food Microbiology",
    departmentId: "DE008",
    type: "Bachelor",
  },
  {
    code: "FPT201",
    name: "Food Preservation & Packaging",
    departmentId: "DE008",
    type: "Bachelor",
  },

  // DE009: Mathematics
  {
    code: "MAT101",
    name: "Calculus I",
    departmentId: "DE009",
    type: "Bachelor",
  },
  {
    code: "MAT102",
    name: "Linear Algebra",
    departmentId: "DE009",
    type: "Bachelor",
  },
  {
    code: "MAT201",
    name: "Differential Equations",
    departmentId: "DE009",
    type: "Bachelor",
  },

  // DE010: Physics
  {
    code: "PHY101",
    name: "General Physics I",
    departmentId: "DE010",
    type: "Bachelor",
  },
  {
    code: "PHY102",
    name: "Mechanics",
    departmentId: "DE010",
    type: "Bachelor",
  },
  {
    code: "PHY201",
    name: "Thermal Physics",
    departmentId: "DE010",
    type: "Bachelor",
  },

  // DE011: Sports Science
  {
    code: "SPS101",
    name: "Foundations of Sports Science",
    departmentId: "DE011",
    type: "Bachelor",
  },
  {
    code: "SPS102",
    name: "Anatomy & Physiology",
    departmentId: "DE011",
    type: "Bachelor",
  },
  {
    code: "SPS201",
    name: "Exercise Physiology",
    departmentId: "DE011",
    type: "Bachelor",
  },

  // DE012: Computer Science
  {
    code: "CSC101",
    name: "Intro to Programming",
    departmentId: "DE012",
    type: "Bachelor",
  },
  {
    code: "CSC102",
    name: "Data Structures & Algorithms",
    departmentId: "DE012",
    type: "Bachelor",
  },
  {
    code: "CSC201",
    name: "Database Systems",
    departmentId: "DE012",
    type: "Bachelor",
  },

  // DE013: Agri Education & Agri Economics
  {
    code: "AGE101",
    name: "Principles of Agricultural Economics",
    departmentId: "DE013",
    type: "Bachelor",
  },
  {
    code: "AGE102",
    name: "Farm Management",
    departmentId: "DE013",
    type: "Bachelor",
  },
  {
    code: "AGE201",
    name: "Agri Extension Methods",
    departmentId: "DE013",
    type: "Bachelor",
  },

  // DE014: Agriculture Production
  {
    code: "AGP101",
    name: "Crop Production",
    departmentId: "DE014",
    type: "Bachelor",
  },
  {
    code: "AGP102",
    name: "Soil & Water Conservation",
    departmentId: "DE014",
    type: "Bachelor",
  },
  {
    code: "AGP201",
    name: "Integrated Pest Management",
    departmentId: "DE014",
    type: "Bachelor",
  },

  // DE015: Soil Science & Irrigation Mgmt
  {
    code: "SSM101",
    name: "Soil Science I",
    departmentId: "DE015",
    type: "Bachelor",
  },
  {
    code: "SSM102",
    name: "Soil Fertility & Plant Nutrition",
    departmentId: "DE015",
    type: "Bachelor",
  },
  {
    code: "SSM201",
    name: "Irrigation Systems Design",
    departmentId: "DE015",
    type: "Bachelor",
  },

  // DE016: Adult, Community & Lifelong Learning
  {
    code: "ACL101",
    name: "Foundations of Adult Education",
    departmentId: "DE016",
    type: "Bachelor",
  },
  {
    code: "ACL102",
    name: "Community Learning Strategies",
    departmentId: "DE016",
    type: "Bachelor",
  },
  {
    code: "ACL201",
    name: "Lifelong Learning Theories",
    departmentId: "DE016",
    type: "Bachelor",
  },

  // DE017: Disability & Rehabilitation Studies
  {
    code: "DRS101",
    name: "Intro to Disability Studies",
    departmentId: "DE017",
    type: "Bachelor",
  },
  {
    code: "DRS102",
    name: "Rehabilitation Principles",
    departmentId: "DE017",
    type: "Bachelor",
  },
  {
    code: "DRS201",
    name: "Assistive Technologies",
    departmentId: "DE017",
    type: "Bachelor",
  },

  // DE018: Hearing Impairment & Sign Language
  {
    code: "HIS101",
    name: "Fundamentals of Sign Language",
    departmentId: "DE018",
    type: "Bachelor",
  },
  {
    code: "HIS102",
    name: "Hearing Impairment Rehab",
    departmentId: "DE018",
    type: "Bachelor",
  },
  {
    code: "HIS201",
    name: "Advanced Interpretation Skills",
    departmentId: "DE018",
    type: "Bachelor",
  },

  // DE019: Intellectual & Development Difficulties
  {
    code: "IDD101",
    name: "Cognitive Development Theories",
    departmentId: "DE019",
    type: "Bachelor",
  },
  {
    code: "IDD102",
    name: "Special Education Assessment",
    departmentId: "DE019",
    type: "Bachelor",
  },
  {
    code: "IDD201",
    name: "Program Planning for IDD",
    departmentId: "DE019",
    type: "Bachelor",
  },

  // DE020: Visual Impairment Studies
  {
    code: "VIS101",
    name: "Foundations of Visual Impairment",
    departmentId: "DE020",
    type: "Bachelor",
  },
  {
    code: "VIS102",
    name: "Braille & Assistive Tech",
    departmentId: "DE020",
    type: "Bachelor",
  },
  {
    code: "VIS201",
    name: "Orientation & Mobility",
    departmentId: "DE020",
    type: "Bachelor",
  },

  // DE021: Languages & Communication
  {
    code: "LAN101",
    name: "Academic Writing Skills",
    departmentId: "DE021",
    type: "Bachelor",
  },
  {
    code: "LAN102",
    name: "Advanced English Grammar",
    departmentId: "DE021",
    type: "Bachelor",
  },
  {
    code: "LAN201",
    name: "Media & Communication Theory",
    departmentId: "DE021",
    type: "Bachelor",
  },

  // DE022: Religious Studies & Philosophy
  {
    code: "RSP101",
    name: "World Religions",
    departmentId: "DE022",
    type: "Bachelor",
  },
  {
    code: "RSP102",
    name: "Intro to Philosophy",
    departmentId: "DE022",
    type: "Bachelor",
  },
  {
    code: "RSP201",
    name: "Ethics & Moral Reasoning",
    departmentId: "DE022",
    type: "Bachelor",
  },

  // DE023: Literature & Film Studies
  {
    code: "LFS101",
    name: "Literary Theory",
    departmentId: "DE023",
    type: "Bachelor",
  },
  {
    code: "LFS102",
    name: "African Literature",
    departmentId: "DE023",
    type: "Bachelor",
  },
  {
    code: "LFS201",
    name: "Film Analysis",
    departmentId: "DE023",
    type: "Bachelor",
  },

  // DE024: Performing Arts & Cultural Studies
  {
    code: "PAS101",
    name: "Introduction to Theatre",
    departmentId: "DE024",
    type: "Bachelor",
  },
  {
    code: "PAS102",
    name: "Music & Movement",
    departmentId: "DE024",
    type: "Bachelor",
  },
  {
    code: "PAS201",
    name: "Cultural Heritage Management",
    departmentId: "DE024",
    type: "Bachelor",
  },

  // DE025: History & Heritage Studies
  {
    code: "HISG101",
    name: "World History I",
    departmentId: "DE025",
    type: "Bachelor",
  },
  {
    code: "HISG102",
    name: "African History",
    departmentId: "DE025",
    type: "Bachelor",
  },
  {
    code: "HISG201",
    name: "Heritage Conservation",
    departmentId: "DE025",
    type: "Bachelor",
  },

  // DE026: Economics
  {
    code: "ECO101",
    name: "Principles of Economics I",
    departmentId: "DE026",
    type: "Bachelor",
  },
  {
    code: "ECO102",
    name: "Microeconomics",
    departmentId: "DE026",
    type: "Bachelor",
  },
  {
    code: "ECO201",
    name: "Macro­economics",
    departmentId: "DE026",
    type: "Bachelor",
  },

  // DE027: Development Studies
  {
    code: "DEV101",
    name: "Intro to Development Studies",
    departmentId: "DE027",
    type: "Bachelor",
  },
  {
    code: "DEV102",
    name: "Rural Development",
    departmentId: "DE027",
    type: "Bachelor",
  },
  {
    code: "DEV201",
    name: "Project Planning & Management",
    departmentId: "DE027",
    type: "Bachelor",
  },

  // DE028: Psychology
  {
    code: "PSY101",
    name: "General Psychology",
    departmentId: "DE028",
    type: "Bachelor",
  },
  {
    code: "PSY102",
    name: "Developmental Psychology",
    departmentId: "DE028",
    type: "Bachelor",
  },
  {
    code: "PSY201",
    name: "Abnormal Psychology",
    departmentId: "DE028",
    type: "Bachelor",
  },

  // DE029: Social Work & Social Admin
  {
    code: "SWA101",
    name: "Foundations of Social Work",
    departmentId: "DE029",
    type: "Bachelor",
  },
  {
    code: "SWA102",
    name: "Community Practice",
    departmentId: "DE029",
    type: "Bachelor",
  },
  {
    code: "SWA201",
    name: "Social Policy & Administration",
    departmentId: "DE029",
    type: "Bachelor",
  },

  // DE030: Political Science & Pub Admin
  {
    code: "PSPA101",
    name: "Political Theory",
    departmentId: "DE030",
    type: "Bachelor",
  },
  {
    code: "PSPA102",
    name: "Comparative Politics",
    departmentId: "DE030",
    type: "Bachelor",
  },
  {
    code: "PSPA201",
    name: "Public Administration Theory",
    departmentId: "DE030",
    type: "Bachelor",
  },

  // DE031: Architecture
  {
    code: "ARC101",
    name: "Architectural Design I",
    departmentId: "DE031",
    type: "Bachelor",
  },
  {
    code: "ARC102",
    name: "Building Materials & Construction",
    departmentId: "DE031",
    type: "Bachelor",
  },
  {
    code: "ARC201",
    name: "History of Architecture",
    departmentId: "DE031",
    type: "Bachelor",
  },

  // DE032: Geo-informatics
  {
    code: "GEO101",
    name: "Intro to GIS",
    departmentId: "DE032",
    type: "Bachelor",
  },
  {
    code: "GEO102",
    name: "Remote Sensing",
    departmentId: "DE032",
    type: "Bachelor",
  },
  {
    code: "GEO201",
    name: "Spatial Data Analysis",
    departmentId: "DE032",
    type: "Bachelor",
  },

  // DE033: Quantity Surveying & Property Valuation
  {
    code: "QSP101",
    name: "Measurement & Estimating",
    departmentId: "DE033",
    type: "Bachelor",
  },
  {
    code: "QSP102",
    name: "Construction Contracts",
    departmentId: "DE033",
    type: "Bachelor",
  },
  {
    code: "QSP201",
    name: "Property Valuation I",
    departmentId: "DE033",
    type: "Bachelor",
  },

  // DE034: Agriculture (Vocational)
  {
    code: "AGV101",
    name: "Intro to Agronomy",
    departmentId: "DE034",
    type: "Bachelor",
  },
  {
    code: "AGV102",
    name: "Agricultural Machinery",
    departmentId: "DE034",
    type: "Bachelor",
  },
  {
    code: "AGV201",
    name: "Farm Business Management",
    departmentId: "DE034",
    type: "Bachelor",
  },

  // DE035: Art & Industrial Design
  {
    code: "AID101",
    name: "Foundations of Design",
    departmentId: "DE035",
    type: "Bachelor",
  },
  {
    code: "AID102",
    name: "Drawing & Illustration",
    departmentId: "DE035",
    type: "Bachelor",
  },
  {
    code: "AID201",
    name: "Industrial Design Studio",
    departmentId: "DE035",
    type: "Bachelor",
  },

  // DE036: Human Nutrition & Home Economics
  {
    code: "HNH101",
    name: "Nutrition Science I",
    departmentId: "DE036",
    type: "Bachelor",
  },
  {
    code: "HNH102",
    name: "Food & Dietetics",
    departmentId: "DE036",
    type: "Bachelor",
  },
  {
    code: "HNH201",
    name: "Family Resource Management",
    departmentId: "DE036",
    type: "Bachelor",
  },

  // DE037: Computer Science (SCIS)
  {
    code: "CSC201",
    name: "Algorithms & Complexity",
    departmentId: "DE037",
    type: "Bachelor",
  },
  {
    code: "CSC202",
    name: "Operating Systems",
    departmentId: "DE037",
    type: "Bachelor",
  },
  {
    code: "CSC301",
    name: "Software Engineering",
    departmentId: "DE037",
    type: "Bachelor",
  },

  // DE038: Networks, Data Science & AI
  {
    code: "NDAI201",
    name: "Computer Networks",
    departmentId: "DE038",
    type: "Bachelor",
  },
  {
    code: "NDAI202",
    name: "Database Management Systems",
    departmentId: "DE038",
    type: "Bachelor",
  },
  {
    code: "NDAI301",
    name: "Introduction to Machine Learning",
    departmentId: "DE038",
    type: "Bachelor",
  },

  // DE039: Library & Information Science
  {
    code: "LIS101",
    name: "Foundations of LIS",
    departmentId: "DE039",
    type: "Bachelor",
  },
  {
    code: "LIS102",
    name: "Cataloguing & Classification",
    departmentId: "DE039",
    type: "Bachelor",
  },
  {
    code: "LIS201",
    name: "Digital Libraries",
    departmentId: "DE039",
    type: "Bachelor",
  },

  // DE040: Foundations & Educational Psychology
  {
    code: "EDP101",
    name: "Foundations of Education",
    departmentId: "DE040",
    type: "Bachelor",
  },
  {
    code: "EDP102",
    name: "Educational Psychology",
    departmentId: "DE040",
    type: "Bachelor",
  },
  {
    code: "EDP201",
    name: "Assessment & Evaluation Methods",
    departmentId: "DE040",
    type: "Bachelor",
  },

  // DE041: Curriculum, Pedagogy & Educational Media
  {
    code: "CPEM101",
    name: "Curriculum Development",
    departmentId: "DE041",
    type: "Bachelor",
  },
  {
    code: "CPEM102",
    name: "Pedagogical Methods",
    departmentId: "DE041",
    type: "Bachelor",
  },
  {
    code: "CPEM201",
    name: "Educational Media Technology",
    departmentId: "DE041",
    type: "Bachelor",
  },

  // DE042: Early Childhood & Pre-Primary Education
  {
    code: "ECPE101",
    name: "Child Development",
    departmentId: "DE042",
    type: "Bachelor",
  },
  {
    code: "ECPE102",
    name: "Pre-Primary Curriculum",
    departmentId: "DE042",
    type: "Bachelor",
  },
  {
    code: "ECPE201",
    name: "Leadership in Early Childhood",
    departmentId: "DE042",
    type: "Bachelor",
  },

  // DE043: Education Planning & Management
  {
    code: "EPM101",
    name: "Education Policy Analysis",
    departmentId: "DE043",
    type: "Bachelor",
  },
  {
    code: "EPM102",
    name: "School Management",
    departmentId: "DE043",
    type: "Bachelor",
  },
  {
    code: "EPM201",
    name: "Higher Education Administration",
    departmentId: "DE043",
    type: "Bachelor",
  },

  // DE044: Fine Art
  {
    code: "FAR101",
    name: "Drawing & Painting Techniques",
    departmentId: "DE044",
    type: "Bachelor",
  },
  {
    code: "FAR102",
    name: "Sculpture & Ceramics",
    departmentId: "DE044",
    type: "Bachelor",
  },
  {
    code: "FAR201",
    name: "Art History",
    departmentId: "DE044",
    type: "Bachelor",
  },

  // DE045: Industrial & Commercial Art
  {
    code: "ICA101",
    name: "Graphic Design Fundamentals",
    departmentId: "DE045",
    type: "Bachelor",
  },
  {
    code: "ICA102",
    name: "Packaging Design",
    departmentId: "DE045",
    type: "Bachelor",
  },
  {
    code: "ICA201",
    name: "Branding & Identity",
    departmentId: "DE045",
    type: "Bachelor",
  },

  // DE046: Visual Communication
  {
    code: "VISC101",
    name: "Typography & Layout",
    departmentId: "DE046",
    type: "Bachelor",
  },
  {
    code: "VISC102",
    name: "Digital Illustration",
    departmentId: "DE046",
    type: "Bachelor",
  },
  {
    code: "VISC201",
    name: "Motion Graphics",
    departmentId: "DE046",
    type: "Bachelor",
  },

  // DE047: Business Admin & Entrepreneurship
  {
    code: "BAE101",
    name: "Principles of Management",
    departmentId: "DE047",
    type: "Bachelor",
  },
  {
    code: "BAE102",
    name: "Entrepreneurship Theory",
    departmentId: "DE047",
    type: "Bachelor",
  },
  {
    code: "BAE201",
    name: "Small Business Management",
    departmentId: "DE047",
    type: "Bachelor",
  },

  // DE048: Accounting & Finance
  {
    code: "ACF101",
    name: "Financial Accounting I",
    departmentId: "DE048",
    type: "Bachelor",
  },
  {
    code: "ACF102",
    name: "Managerial Accounting",
    departmentId: "DE048",
    type: "Bachelor",
  },
  {
    code: "ACF201",
    name: "Corporate Finance",
    departmentId: "DE048",
    type: "Bachelor",
  },

  // DE049: Management Science
  {
    code: "MSC101",
    name: "Quantitative Methods",
    departmentId: "DE049",
    type: "Bachelor",
  },
  {
    code: "MSC102",
    name: "Operations Research",
    departmentId: "DE049",
    type: "Bachelor",
  },
  {
    code: "MSC201",
    name: "Project Management",
    departmentId: "DE049",
    type: "Bachelor",
  },

  // DE050: Procurement & Logistics Mgmt
  {
    code: "PLM101",
    name: "Procurement Principles",
    departmentId: "DE050",
    type: "Bachelor",
  },
  {
    code: "PLM102",
    name: "Supply Chain Management",
    departmentId: "DE050",
    type: "Bachelor",
  },
  {
    code: "PLM201",
    name: "Logistics & Distribution",
    departmentId: "DE050",
    type: "Bachelor",
  },

  {
    code: "DCE100",
    name: "Computer Engineering",
    departmentId: "DE012",
    type: "Diploma",
  },
  {
    code: "ITC101",
    name: "Information Technology and Computing",
    departmentId: "DE012",
    type: "Bachelor",
  },
  {
    code: "BBA100",
    name: "Business Administration",
    departmentId: "DE047",
    type: "Bachelor",
  },
];

// Helper to prefix course name
function getPrefixedName(type: CourseSeed["type"], name: string) {
  switch (type) {
    case "Diploma":
      return `Diploma in ${name}`;
    case "Bachelor":
      return `Bsc in ${name}`;
    case "Master":
      return `Ms in ${name}`;
    case "Phd":
      return `Phd in ${name}`;
    default:
      return name;
  }
}

async function main() {
  for (let i = 0; i < courses.length; i++) {
    const { code, name, departmentId, type } = courses[i];
    const id = `CO${String(i + 1).padStart(3, "0")}`;
    await prisma.course.upsert({
      where: { code },
      update: {},
      create: {
        id,
        code,
        name: getPrefixedName(type, name),
        type,
        department: { connect: { id: departmentId } },
      },
    });
    console.log(
      `Seeded: ${getPrefixedName(type, name)} (${code}) [${type}] → ${id}`
    );
  }
  console.log("✅ All courses seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
