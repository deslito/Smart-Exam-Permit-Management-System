// prisma/seeds/02_courseUnit.seed.ts
import prisma from "../config/prismaClient";
import { Semester, CourseCategory } from "./client";

async function main() {
  // 1. Load all courses and map by lowercased name
  const allCourses = await prisma.course.findMany();
  const coursesByName: { [name: string]: typeof allCourses } = {};
  for (const course of allCourses) {
    const key = course.name.trim().toLowerCase();
    if (!coursesByName[key]) coursesByName[key] = [];
    coursesByName[key].push(course);
  }

  // 2. Define course units by courseName (keys must match DB course names, case-insensitive)
  const courseUnitsByCourseName: {
    [courseName: string]: Array<{
      code: string;
      title: string;
      credits: number;
      year: number;
      semester: Semester;
      category: CourseCategory;
    }>;
  } = {
    "diploma in computer engineering": [
      {
        code: "DCE101",
        title: "Digital Logic Design",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE102",
        title: "Circuit Theory",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE103",
        title: "Signals & Systems",
        credits: 4,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE104",
        title: "Mathematics for Engineers",
        credits: 4,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },

      {
        code: "DCE105",
        title: "Electronics II",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE106",
        title: "Electronics I",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE107",
        title: "Programming Basics",
        credits: 4,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE108",
        title: "Computer Architecture",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },

      {
        code: "DCE201",
        title: "Microprocessors",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE202",
        title: "Data Communications",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE203",
        title: "Control Systems",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE204",
        title: "Embedded Systems",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "DCE205",
        title: "Software Engineering",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE206",
        title: "Network Engineering",
        credits: 4,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "DCE207",
        title: "Power Electronics",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "DCE208",
        title: "Digital Signal Processing",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
    ],
    "bsc in civil engineering": [
      {
        code: "CIV101",
        title: "Engineering Mathematics I",
        credits: 4,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV102",
        title: "Engineering Drawing",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV103",
        title: "Mechanics of Materials",
        credits: 4,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV104",
        title: "Surveying I",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },

      {
        code: "CIV105",
        title: "Engineering Mathematics II",
        credits: 4,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV106",
        title: "Structural Analysis I",
        credits: 4,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV107",
        title: "Fluid Mechanics I",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV108",
        title: "Surveying II",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },

      {
        code: "CIV201",
        title: "Structural Analysis II",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV202",
        title: "Reinforced Concrete Design",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV203",
        title: "Soil Mechanics I",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV204",
        title: "Transportation Engineering I",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "CIV205",
        title: "Soil Mechanics II",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV206",
        title: "Hydraulics",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV207",
        title: "Structural Design III",
        credits: 4,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV208",
        title: "Transportation Engineering II",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "CIV209",
        title: "Geotechnical Engineering",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "CIV301",
        title: "Bridge Engineering",
        credits: 4,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV302",
        title: "Environmental Engineering",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV303",
        title: "Water Resources Engineering",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV304",
        title: "Construction Management",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "CIV305",
        title: "Foundation Engineering",
        credits: 4,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV306",
        title: "Concrete Technology",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "CIV307",
        title: "Steel Structures",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV308",
        title: "Construction Materials",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "CIV401",
        title: "Structural Design IV",
        credits: 4,
        year: 4,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV402",
        title: "Project Management in Civil Eng",
        credits: 3,
        year: 4,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV403",
        title: "Advanced Geotechnical Engineering",
        credits: 3,
        year: 4,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "CIV404",
        title: "Highway Engineering",
        credits: 3,
        year: 4,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "CIV405",
        title: "Advanced Structural Design",
        credits: 4,
        year: 4,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV406",
        title: "Construction Project Management",
        credits: 3,
        year: 4,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "CIV407",
        title: "Water Resources Management",
        credits: 3,
        year: 4,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "CIV408",
        title: "Environmental Impact Assessment",
        credits: 3,
        year: 4,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
    ],
    "bsc in information technology and computing": [
      {
        code: "ITD101",
        title: "Introduction to Programming",
        credits: 4,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD102",
        title: "Discrete Mathematics",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD103",
        title: "Computer Systems",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD104",
        title: "Web Fundamentals",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },

      {
        code: "ITD105",
        title: "Data Structures",
        credits: 4,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD106",
        title: "Database Systems I",
        credits: 4,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD107",
        title: "Networks & Communications",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD108",
        title: "Software Engineering I",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },

      {
        code: "ITD201",
        title: "Operating Systems",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD202",
        title: "Algorithms",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD203",
        title: "Software Engineering II",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD204",
        title: "Mobile App Development",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "ITD205",
        title: "Database Systems II",
        credits: 4,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD206",
        title: "Computer Graphics",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "ITD207",
        title: "Cloud Computing",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "ITD208",
        title: "Cybersecurity Fundamentals",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "ITD301",
        title: "Machine Learning",
        credits: 4,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD302",
        title: "Big Data Analytics",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD303",
        title: "Information Security",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD304",
        title: "Distributed Systems",
        credits: 4,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },

      {
        code: "ITD305",
        title: "Web Application Development",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD306",
        title: "Data Mining",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD307",
        title: "Artificial Intelligence",
        credits: 4,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "ITD306",
        title: "Advanced Web Tech",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "ITD308",
        title: "Blockchain Basics",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
    ],
    "bsc in business administration": [
      {
        code: "BBA101",
        title: "Principles of Accounting",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA102",
        title: "Business Communication",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA103",
        title: "Microeconomics",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA104",
        title: "Business Law",
        credits: 3,
        year: 1,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },

      {
        code: "BBA105",
        title: "Statistics for Business",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA106",
        title: "Management Theory",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA107",
        title: "Marketing I",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA108",
        title: "Organizational Behavior",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA109",
        title: "Quantitative Methods",
        credits: 3,
        year: 1,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },

      {
        code: "BBA201",
        title: "Financial Management",
        credits: 4,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA202",
        title: "Operations Management",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA203",
        title: "Human Resource Management",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA204",
        title: "Strategic Management",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA205",
        title: "International Business",
        credits: 3,
        year: 2,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },

      {
        code: "BBA206",
        title: "Entrepreneurship and Innovation",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA207",
        title: "E-Commerce and Digital Business",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA208",
        title: "Cost and Management Accounting",
        credits: 3,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA209",
        title: "Business Ethics and Corporate Governance",
        credits: 4,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "BBA210",
        title: "Business Analytics",
        credits: 5,
        year: 2,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "BBA301",
        title: "Business Research Methods",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA302",
        title: "Business Information Systems",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA303",
        title: "Marketing II",
        credits: 3,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "BBA304",
        title: "Business Ethics and Corporate Governance",
        credits: 4,
        year: 3,
        semester: Semester.ONE,
        category: CourseCategory.ELECTIVE,
      },

      {
        code: "BBA305",
        title: "Project Management",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA306",
        title: "Corporate Finance",
        credits: 3,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      },
      {
        code: "BBA307",
        title: "Business Research Project",
        credits: 4,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.CORE,
      }, // often a capstone project
      {
        code: "BBA308",
        title: "Business Ethics and Corporate Governance",
        credits: 4,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
      {
        code: "BBA309",
        title: "Leadership Skills",
        credits: 4,
        year: 3,
        semester: Semester.TWO,
        category: CourseCategory.ELECTIVE,
      },
    ],
  };

  // 3. For each course name, find the course(s), then their programme(s), then seed units
  for (const [courseName, units] of Object.entries(courseUnitsByCourseName)) {
    const matchedCourses = coursesByName[courseName.trim().toLowerCase()] || [];
    for (const course of matchedCourses) {
      const unitsForCourse = units
        .filter(
          (unit) =>
            unit.credits === 3 || unit.credits === 4 || unit.credits === 5
        )
        .map((unit) => ({
          ...unit,
          courseName: course.name,
        }));

      if (unitsForCourse.length > 0) {
        await prisma.courseUnit.createMany({
          data: unitsForCourse,
          skipDuplicates: true,
        });

        // Group by year and semester for logging
        const grouped = unitsForCourse.reduce((acc, unit) => {
          const key = `Year ${unit.year} - Semester ${unit.semester}`;
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        for (const [key, count] of Object.entries(grouped)) {
          console.log(
            `Seeded ${count} course units for "${course.name}" | ${key}`
          );
        }
      }
    }
  }

  console.log("✅ CourseUnits seeded by courseName");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

