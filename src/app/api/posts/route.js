import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Request Body:", body);
        const { title, content, location, dueDate, dueTime, email } = body;

        if (!title || !content || !location || !dueDate || !dueTime || !email) {
            return new Response(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400 }
            );
        }

        const user = await prisma.usermodel.findUnique({
            where: { email },
        });

        console.log("User found:", user);

        if (!user) {
            return new Response(
                JSON.stringify({ error: "User not found" }),
                { status: 404 }
            );
        }

        const [year, month, day] = dueDate.split("-").map(Number);
        const [hours, minutes] = dueTime.split(":").map(Number);
        const localCombinedDateTime = new Date(year, month - 1, day, hours, minutes);

        console.log("Creating task with data:", {
            title,
            content,
            location,
            dueDate: new Date(dueDate),
            dueTime: localCombinedDateTime,
            authorId: user.id,
        });

        const newTask = await prisma.post.create({
            data: {
                title,
                content,
                location,
                dueDate: new Date(dueDate),
                dueTime: localCombinedDateTime,
                authorId: String(user.id),
            },
        });

        return new Response(
            JSON.stringify({ message: "Task created successfully", newTask }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error creating task:", error);
        return new Response(
            JSON.stringify({ error: "An error occurred while creating the task" }),
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new Response(
            JSON.stringify({ error: "An error occurred while fetching posts" }),
            { status: 500 }
        );
    }
}
