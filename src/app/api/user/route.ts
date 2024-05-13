import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstname, lastname, age, gender, email, password } = body;

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
      },
    });

    return NextResponse.json(
      { usermodel: newUsermodel, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { usermodel: null, message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
