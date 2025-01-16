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


        // Benutzer anhand der E-Mail abrufen
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

        // Korrektes Datum in der lokalen Zeitzone erstellen
        const localCombinedDateTime = new Date(year, month - 1, day, hours, minutes);

        console.log("Creating task with data:", {
            title,
            content,
            location,
            dueDate: new Date(dueDate),
            dueTime: localCombinedDateTime,
            authorId: user.id,
        });

        // Eintrag in der Datenbank erstellen
        const newTask = await prisma.post.create({
            data: {
                title,
                content,
                location,
                dueDate: new Date(dueDate),
                dueTime: localCombinedDateTime,
                authorId: String(user.id) // ID des Benutzers verwenden
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

