-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'INVIGILATOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "StudyMode" AS ENUM ('DAY', 'EVENING');

-- CreateEnum
CREATE TYPE "Semester" AS ENUM ('ONE', 'TWO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "otherNames" TEXT,
    "lastName" TEXT NOT NULL,
    "studentNo" TEXT NOT NULL,
    "regNo" TEXT NOT NULL,
    "studyYear" INTEGER NOT NULL,
    "programme" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "academicYear" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "currentSemester" "Semester" NOT NULL,
    "facultyOrSchool" TEXT NOT NULL,
    "picture" BYTEA,
    "qrCode" TEXT,
    "course" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invigilator" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "otherNames" TEXT,
    "lastName" TEXT NOT NULL,
    "picture" BYTEA,
    "currentSemester" "Semester" NOT NULL,

    CONSTRAINT "Invigilator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "otherNames" TEXT,
    "lastName" TEXT NOT NULL,
    "picture" BYTEA,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseUnit" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "facultyOrSchool" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" "Semester" NOT NULL,

    CONSTRAINT "CourseUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnrolledCourseUnit" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "courseUnitId" TEXT NOT NULL,

    CONSTRAINT "EnrolledCourseUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "courseUnitId" TEXT NOT NULL,
    "examDate" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "venue" TEXT NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAssignment" (
    "id" TEXT NOT NULL,
    "invigilatorId" TEXT NOT NULL,
    "examId" TEXT NOT NULL,

    CONSTRAINT "ExamAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentNo_key" ON "Student"("studentNo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_regNo_key" ON "Student"("regNo");

-- CreateIndex
CREATE UNIQUE INDEX "CourseUnit_code_key" ON "CourseUnit"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EnrolledCourseUnit_studentId_courseUnitId_key" ON "EnrolledCourseUnit"("studentId", "courseUnitId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamAssignment_invigilatorId_examId_key" ON "ExamAssignment"("invigilatorId", "examId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invigilator" ADD CONSTRAINT "Invigilator_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrolledCourseUnit" ADD CONSTRAINT "EnrolledCourseUnit_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrolledCourseUnit" ADD CONSTRAINT "EnrolledCourseUnit_courseUnitId_fkey" FOREIGN KEY ("courseUnitId") REFERENCES "CourseUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_courseUnitId_fkey" FOREIGN KEY ("courseUnitId") REFERENCES "CourseUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAssignment" ADD CONSTRAINT "ExamAssignment_invigilatorId_fkey" FOREIGN KEY ("invigilatorId") REFERENCES "Invigilator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAssignment" ADD CONSTRAINT "ExamAssignment_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
