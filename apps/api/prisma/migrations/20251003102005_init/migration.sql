-- CreateEnum
CREATE TYPE "CourseKind" AS ENUM ('ON_CAMPUS', 'ONLINE');

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "courseKind" "CourseKind" NOT NULL,
    "instalmentValue" MONEY NOT NULL,
    "instalments" INTEGER NOT NULL,
    "finalPrice" MONEY NOT NULL,
    "schoolCompletion" TEXT NOT NULL,
    "consentTerms" BOOLEAN NOT NULL,
    "phoneNotificationOptIn" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_cpf_key" ON "Application"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Application_email_key" ON "Application"("email");
