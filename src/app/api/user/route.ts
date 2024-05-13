import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

//Define schrma for inputvalidation
const userSchema = z.object({
  firstname: z.string().min(1, "firstname is required").max(20),
  lastname: z.string().min(1, "lastname is required").max(20),
  age: z.number().min(1, "age is required").max(100),
  gender: z.string().min(1, "gender is required").max(20),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
  disability: z.string(),
  hilfbeduerftig: z.boolean(),
  bio: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstname,
      lastname,
      age,
      gender,
      email,
      password,
      disability,
      hilfbeduerftig,
      bio,
    } = userSchema.parse(body);

    //check if emailt already exists

    const existingUserByEmail = await db.usermodel.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { usermodel: null, message: "User with this email already existst" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUsermodel = await db.usermodel.create({
      data: {
        firstname,
        lastname,
        age,
        gender,
        email,
        password: hashedPassword,
        disability,
        hilfbeduerftig,
        bio,
      },
    });

    const { password: newUserPassword, ...rest } = newUsermodel;

    return NextResponse.json(
      { usermodel: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
