import prisma from "../config/prismaClient";

function getProgrammeCode(baseCode: string, mode: "DAY" | "EVENING", suffix?: string) {
  // Remove numbers from code, add D or E, or custom suffix
  const letters = baseCode.replace(/[0-9]/g, "");
  if (suffix) return `${letters}${suffix}`;
  return mode === "DAY" ? `${letters}D` : `${letters}E`;
}

// Helper to increment the last letter of a string (A-Z, wraps to A after Z)
function incrementLastLetter(code: string) {
  if (!code) return code;
  const last = code.slice(-1);
  let nextChar = String.fromCharCode(last.charCodeAt(0) + 1);
  if (nextChar > "Z") nextChar = "A";
  return code.slice(0, -1) + nextChar;
}

async function getUniqueProgrammeCode(baseCode: string, mode: "DAY" | "EVENING") {
  let code = getProgrammeCode(baseCode, mode);
  let exists = await prisma.programme.findUnique({ where: { name: code } });
  while (exists) {
    code = incrementLastLetter(code);
    exists = await prisma.programme.findUnique({ where: { name: code } });
  }
  return code;
}

async function main() {
  const courses = await prisma.course.findMany();

  for (const course of courses) {
    // Always add Day
    const dayCode = await getUniqueProgrammeCode(course.code, "DAY");
    await prisma.programme.create({
      data: {
        name: dayCode,
        courseId: course.id,
        programme: "DAY",
      },
    });

    // For Bachelor, also add Evening
    if (course.type === "Bachelor") {
      const eveningCode = await getUniqueProgrammeCode(course.code, "EVENING");
      await prisma.programme.create({
        data: {
          name: eveningCode,
          courseId: course.id,
          programme: "EVENING",
        },
      });
    }
  }

  console.log("✅ Programmes seeded");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
