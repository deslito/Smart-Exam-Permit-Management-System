import prisma from "../config/prismaClient";

interface DeptSeed {
  id: string;
  name: string;
  facultyOrSchoolId: string; // e.g. FC001 or SC003
}

const departments: DeptSeed[] = [
  // Faculty of Engineering
  {
    id: "DE001",
    facultyOrSchoolId: "FC001",
    name: "Department of Civil and Environmental Engineering",
  },
  {
    id: "DE002",
    facultyOrSchoolId: "FC001",
    name: "Department of Mechanical and Production Engineering",
  },
  {
    id: "DE003",
    facultyOrSchoolId: "FC001",
    name: "Department of Electrical and Electronics Engineering",
  },
  {
    id: "DE004",
    facultyOrSchoolId: "FC001",
    name: "Department of Mining, Chemical and Petroleum Engineering",
  },

  // Faculty of Science
  {
    id: "DE005",
    facultyOrSchoolId: "FC002",
    name: "Department of Biological Sciences",
  },
  { id: "DE006", facultyOrSchoolId: "FC002", name: "Department of Chemistry" },
  {
    id: "DE007",
    facultyOrSchoolId: "FC002",
    name: "Department of Environmental Science",
  },
  {
    id: "DE008",
    facultyOrSchoolId: "FC002",
    name: "Department of Food Processing Technology",
  },
  {
    id: "DE009",
    facultyOrSchoolId: "FC002",
    name: "Department of Mathematics",
  },
  { id: "DE010", facultyOrSchoolId: "FC002", name: "Department of Physics" },
  {
    id: "DE011",
    facultyOrSchoolId: "FC002",
    name: "Department of Sports Science",
  },
  {
    id: "DE012",
    facultyOrSchoolId: "FC002",
    name: "Department of Computer Science",
  },

  // Faculty of Agriculture
  {
    id: "DE013",
    facultyOrSchoolId: "FC003",
    name: "Department of Agricultural Education and Agricultural Economics",
  },
  {
    id: "DE014",
    facultyOrSchoolId: "FC003",
    name: "Department of Agriculture Production",
  },
  {
    id: "DE015",
    facultyOrSchoolId: "FC003",
    name: "Department of Soil Science and Irrigation Management",
  },

  // Faculty of Special Needs & Rehabilitation
  {
    id: "DE016",
    facultyOrSchoolId: "FC004",
    name: "Department of Adult, Community and Lifelong Learning",
  },
  {
    id: "DE017",
    facultyOrSchoolId: "FC004",
    name: "Department of Disability and Rehabilitation Studies",
  },
  {
    id: "DE018",
    facultyOrSchoolId: "FC004",
    name: "Department of Hearing Impairment and Sign Language Interpretation Studies",
  },
  {
    id: "DE019",
    facultyOrSchoolId: "FC004",
    name: "Department of Intellectual and Development Difficulties",
  },
  {
    id: "DE020",
    facultyOrSchoolId: "FC004",
    name: "Department of Visual Impairment Studies",
  },

  // Faculty of Arts and Humanities
  {
    id: "DE021",
    facultyOrSchoolId: "FC005",
    name: "Department of Languages & Communication",
  },
  {
    id: "DE022",
    facultyOrSchoolId: "FC005",
    name: "Department of Religious Studies and Philosophy",
  },
  {
    id: "DE023",
    facultyOrSchoolId: "FC005",
    name: "Department of Literature and Film Studies",
  },
  {
    id: "DE024",
    facultyOrSchoolId: "FC005",
    name: "Department of Performing Arts & Cultural Studies",
  },
  {
    id: "DE025",
    facultyOrSchoolId: "FC005",
    name: "Department of History & Heritage Studies",
  },

  // Faculty of Social Sciences
  {
    id: "DE026",
    facultyOrSchoolId: "FC006",
    name: "Department of Economics",
  },
  {
    id: "DE027",
    facultyOrSchoolId: "FC006",
    name: "Department of Development Studies",
  },
  { id: "DE028", facultyOrSchoolId: "FC006", name: "Department of Psychology" },
  {
    id: "DE029",
    facultyOrSchoolId: "FC006",
    name: "Department of Social Work and Social Administration",
  },
  {
    id: "DE030",
    facultyOrSchoolId: "FC006",
    name: "Department of Political Science and Public Administration",
  },

  // Schools of Built Environment
  {
    id: "DE031",
    facultyOrSchoolId: "SC001",
    name: "Department of Architecture",
  },
  {
    id: "DE032",
    facultyOrSchoolId: "SC001",
    name: "Department of Geo-informatics",
  },
  {
    id: "DE033",
    facultyOrSchoolId: "SC001",
    name: "Department of Quantity Surveying and Property Valuation",
  },

  // Schools of Vocational Studies
  {
    id: "DE034",
    facultyOrSchoolId: "SC002",
    name: "Department of Agriculture",
  },
  {
    id: "DE035",
    facultyOrSchoolId: "SC002",
    name: "Department of Art and Industrial Design",
  },
  {
    id: "DE036",
    facultyOrSchoolId: "SC002",
    name: "Department of Human Nutrition and Home Economics",
  },

  // Schools of Computing and Information Science
  {
    id: "DE037",
    facultyOrSchoolId: "SC003",
    name: "Department of Computer Science",
  },
  {
    id: "DE038",
    facultyOrSchoolId: "SC003",
    name: "Department of Networks, Data Science and Artificial Intelligence",
  },
  {
    id: "DE039",
    facultyOrSchoolId: "SC003",
    name: "Department of Library and Information Science",
  },

  // Schools of Education
  {
    id: "DE040",
    facultyOrSchoolId: "SC004",
    name: "Department of Foundations of Education and Educational Psychology",
  },
  {
    id: "DE041",
    facultyOrSchoolId: "SC004",
    name: "Department of Curriculum, Pedagogy and Educational Media",
  },
  {
    id: "DE042",
    facultyOrSchoolId: "SC004",
    name: "Department of Early Childhood and Pre-Primary Education",
  },
  {
    id: "DE043",
    facultyOrSchoolId: "SC004",
    name: "Department of Education Planning and Management",
  },

  // Schools of Art and Industrial Design
  {
    id: "DE044",
    facultyOrSchoolId: "SC005",
    name: "Department of Fine Art",
  },
  {
    id: "DE045",
    facultyOrSchoolId: "SC005",
    name: "Department of Industrial and Commercial Art",
  },
  {
    id: "DE046",
    facultyOrSchoolId: "SC005",
    name: "Department of Visual Communication",
  },

  // Schools of Management and Entrepreneurship
  {
    id: "DE047",
    facultyOrSchoolId: "SC006",
    name: "Department of Business Administration and Entrepreneurship",
  },
  {
    id: "DE048",
    facultyOrSchoolId: "SC006",
    name: "Department of Accounting and Finance",
  },
  {
    id: "DE049",
    facultyOrSchoolId: "SC006",
    name: "Department of Management Science",
  },
  {
    id: "DE050",
    facultyOrSchoolId: "SC006",
    name: "Department of Procurement and Logistics Management",
  },
];

async function main() {
  for (const dept of departments) {
    await prisma.department.upsert({
      where: { id: dept.id },
      update: {},
      create: {
        id: dept.id,
        name: dept.name,
        facultyOrSchool: { connect: { id: dept.facultyOrSchoolId } },
      },
    });
    console.log(
      `Seeded: ${dept.name} (${dept.id}) ➔ ${dept.facultyOrSchoolId}`
    );
  }
  console.log("✅ All departments seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });