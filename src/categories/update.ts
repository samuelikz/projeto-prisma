import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "3d18fa8d-8e92-4e2d-91f0-efcc76dc8820",
        },
        data: {
            duration: 300,
        }
    });
    console.log(result)
}

main();